import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { CustomCollapsableTableProps } from "@/types/inventory";
import Row from "./Row";

export default function CustomCollapsableTable({
  columns,
  rows,
}: CustomCollapsableTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {columns.map(({ align, name }) => (
              <TableCell key={name} align={align ?? "left"}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <Row
                key={row.id}
                row={row.rowData}
                primaryVariants={row.primaryVariants}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
