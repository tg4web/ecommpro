import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function UsersPage() {
  return (
    <div>
      <h1 className="flex w-full justify-center font-bold p-6">Users</h1>
      <Table>
  <TableCaption>Manage all current users.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">User ID</TableHead>
      <TableHead>First Name</TableHead>
      <TableHead>Last Name</TableHead>
      <TableHead className="text-right">Type</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>John</TableCell>
      <TableCell>Doe</TableCell>
      <TableCell className="text-right">Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  );
}
