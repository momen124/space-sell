import { getCategoryName } from "@/components/admin/categories/CategoryTable";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SelectInput
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForms } from "@/hooks/useForms/useForms";
import { useMutation } from "@/hooks/useMutation";
import { modals } from "@/packages/modals";
import UploadButton from "@/packages/upload-zone/upload-files-button";
import { createListingSchema } from "@/schema/createListingSchema";
import { categoryService } from "@/service/categoryService";
import { listingService } from "@/service/listingService";
import { Category } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function CreateListingPage() {
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: listingService.createListing,
    onSuccess: async () => {
      router.push("/")
      modals.open({
        id: "",
        title: "Listing Created",
        subTitle: "Your listing has been created successfully!",
        primaryButtonAction() {
          router.push("/")
        },
      })
    },
  });

  const form = useForms({
    onSubmit: mutateAsync,
    validationSchema: createListingSchema,
    initialValues: {
      title: "",
      description: "",
      category: "",
      price: 0,
      images: [],
    },
  });

  const { data: categories } = useQuery(
    categoryService.getQueryOptions("getCategories")
  );

  return (
    <>
      <Form {...form}>
        <div className="max-w-2xl mx-auto px-6 py-10 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-semibold mb-8 text-center text-gray-900">
            Create a New Listing
          </h1>
          <form onSubmit={form.handleSubmit} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Mountain Bike" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 500"
                      {...field}
                      onChange={(e) => {
                        field.onChange({
                          ...e,
                          target: {
                            ...e.target,
                            value: parseFloat(e.target.value),
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
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <SelectInput placeholder="Select a category" 
                            options={categories?.data?.map((i: Category) => ({
                              value: i.id,
                              label: getCategoryName(i, categories?.data),
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
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <UploadButton
                    modelType="listing"
                    onRemove={()=>{}}
                      onUploadEnd={(v) => {
                        form.setValue("images", 
                          [...field.value, ...v.map((v) => v.key)],
                        )
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <Button
              type="submit"
              variant="destructive"
              disabled={form.isSubmitting}
            >
              {form.isSubmitting ? "Creating..." : "Create Listing"}
            </Button>
          </form>
        </div>
      </Form>
    </>
  );
}
