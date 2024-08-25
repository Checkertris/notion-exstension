import { cn } from "~/services/shadcn/lib/utils";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "~/services/shadcn/components/ui/table";

export interface AppTableProps extends QuickStaticTableProps {
  caption?: string
}

export const AppStaticTable = ({ head, body }: QuickStaticTableProps) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="m-0 border-t p-0 even:bg-muted">
          {head.map((cell, index) => (
            <th key={cn(index, "-head")} className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, rowIndex) => (
          <tr key={cn(rowIndex, "-row")} className="m-0 border-t p-0 even:bg-muted">
            {row.map((cell, cellIndex) => (
              <td key={cn(cellIndex, "-", rowIndex, "-cell")} className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const AppTable = ({ caption, body, head }: AppTableProps) => {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {head.map((cell, index) => (
            <TableHead key={cn(index, "-head")}>{cell}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {body.map((row, rowIndex) => (
          <TableRow key={cn(rowIndex, "-row")}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cn(rowIndex, "-", cellIndex, "-cell")}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
