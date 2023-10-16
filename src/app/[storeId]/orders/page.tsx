import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function OrdersPage() {
  return (
    <div>
      <h1 className="flex w-full justify-center font-bold p-6">Orders</h1>
      <Table>
  <TableCaption>Manage your orders.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Order ID</TableHead>
      <TableHead>Items Ordered</TableHead>
      <TableHead>Customer Name</TableHead>
      <TableHead className="text-right">Sell Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">O-001</TableCell>
      <TableCell>Getting Started Guide</TableCell>
      <TableCell>John Doe</TableCell>
      <TableCell className="text-right">Free</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  );
}
