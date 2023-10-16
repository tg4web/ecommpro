import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function ProductsPage() {
  return (
    <div>
      <h1 className="flex w-full justify-center font-bold p-6">Products</h1>
      <Table>
  <TableCaption>Manage your product catalog.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Product ID</TableHead>
      <TableHead>Product Name</TableHead>
      <TableHead>Product Type</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">DS-001</TableCell>
      <TableCell>Getting Started Guide</TableCell>
      <TableCell>Digital Product</TableCell>
      <TableCell className="text-right">Free</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  );
}
