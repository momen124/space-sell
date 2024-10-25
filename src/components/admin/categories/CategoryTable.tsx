import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation } from "@/hooks/useMutation";
import { queryClient } from "@/pages/_app";
import { adminCategoryService } from "@/service/admin/categoryService";
import { Category } from "@/types/Category";

export const getCategoryName = (category: Category, categories: Category[]): string => {
  if (!category.parent) {
    return category.name;
  }

  const parent = category.parent.isRootParent
    ? categories?.find((c) => c.id === category.parent.id)
    : category.parent;

  const parentName = parent ? getCategoryName(parent, categories) : '';

  return parentName ? `${parentName} > ${category.name}` : category.name;
};


function CategoryTable({
  categories,
  handleEdit,
}: {
  categories: Category[];
  handleEdit: (c: Category) => void;
}) {

  const { mutate: handleDelete, isPending } = useMutation({
    mutationFn: adminCategoryService.deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(adminCategoryService.getQueryOptions("getCategories"))
    }
  });


  // Recursive component to render categories and their children
  const renderCategory = (category: Category, depth = 0): JSX.Element => (
    <>
      <TableRow key={category.id} style={{ paddingLeft: `${depth * 20}px` }}>
        <TableCell style={{ paddingLeft: `${depth * 20}px` }}>
          {getCategoryName(category, categories)}
        </TableCell>
        <TableCell>{category.description || "No Description"}</TableCell>
        <TableCell>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleEdit(category)}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(category.id)}
              loading={isPending}
            >
              Delete
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Existing Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => renderCategory(category))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default CategoryTable;
