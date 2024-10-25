import CategoryTable, {
  getCategoryName,
} from "@/components/admin/categories/CategoryTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectInput } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useForms } from "@/hooks/useForms/useForms";
import { useMutation } from "@/hooks/useMutation";
import { adminCategoryService } from "@/service/admin/categoryService";
import { Category } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import * as z from "zod";
import { queryClient } from "../_app";

const categorySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  parent: z.string().optional().nullable(),
  isFeatured: z.boolean(),
});

export type CategoryFormData = z.infer<typeof categorySchema>;

export default function CategoryManagementPage() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const { data, isLoading } = useQuery(
    adminCategoryService.getQueryOptions("getCategories")
  );

  const { mutateAsync: createOrUpdateCategory } = useMutation({
    mutationFn: (body: CategoryFormData) =>
      editingCategory
        ? adminCategoryService.updateCategory(editingCategory.id, body)
        : adminCategoryService.createCategory(body),
    onSuccess: () => {
      setShowForm(false);
      setEditingCategory(null);
      queryClient.invalidateQueries(
        adminCategoryService.getQueryOptions("getCategories")
      );
    },
  });

  const initialValues = {
    name: "",
    description: "",
    parent: null,
    isFeatured: false,
  };

  const form = useForms({
    validationSchema: categorySchema,
    initialValues,
    onSubmit: createOrUpdateCategory,
    resetOnSuccess: true,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-8">Category Management</h1>
        {!isLoading && (
          <Button
            variant={showForm ? "outline" : "destructive"}
            onClick={() => {
              form.reset(initialValues);
              setShowForm((prev) => !prev);
            }}
          >
            {showForm ? "Back To Categories" : "Add Category"}
          </Button>
        )}
      </div>
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center min-h-80">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {showForm ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingCategory ? "Edit Category" : "Add New Category"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="parent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent Category</FormLabel>
                          <FormControl>
                            <SelectInput
                              options={data?.data?.map((i: Category) => ({
                                label: getCategoryName(i, data?.data),
                                value: i.id,
                              }))}
                              {...field}
                              value={field.value!}
                              onChange={(v) => {
                                field.onChange({
                                  target: {
                                    value: v,
                                  },
                                });
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Provide a detailed description..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="h-px bg-gray-200 w-full" />
                    <FormField
                      control={form.control}
                      name="isFeatured"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between">
                          <FormLabel>Featured</FormLabel>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className=" flex flex-col gap-2">
                      <Button
                        type="submit"
                        variant="destructive"
                        className="flex-1"
                        loading={form.isSubmitting}
                      >
                        {editingCategory ? "Update Category" : "Add Category"}
                      </Button>

                      {editingCategory && (
                        <Button
                          onClick={() => {
                            setEditingCategory(null);
                            form.reset(initialValues);
                            setShowForm(false);
                          }}
                          variant="outline"
                          className="flex-1"
                          loading={form.isSubmitting}
                        >
                          {"Cancel Editing"}
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <CategoryTable
              categories={data?.data || []}
              handleEdit={(c) => {
                setEditingCategory(c);
                form.reset({
                  name: c.name,
                  description: c.description,
                  parent: c.parent ? c.parent.id : null,
                  isFeatured: c.isFeatured,
                });
                setShowForm(true);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
