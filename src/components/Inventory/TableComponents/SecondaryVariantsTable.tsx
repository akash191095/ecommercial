import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Fragment } from "react";
import { SecondaryVariants } from "@/types/product";

export default function SecondaryVariantsTable({
  secondaryVariants,
}: {
  secondaryVariants: SecondaryVariants[];
}) {
  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "rgba(7, 7, 23,1)" }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Secondary</TableCell>
            <TableCell>Variant</TableCell>
            <TableCell>Inventory</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Discount%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {secondaryVariants.map((item) => (
            <SecondaryVariantsRow key={item.name} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SecondaryVariantsRow({ row }: { row: SecondaryVariants }) {
  const { name, inventory, price, discountPercentage } = row;

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell />
        <TableCell>{name}</TableCell>
        <TableCell>{inventory}</TableCell>
        <TableCell align="right">${price}</TableCell>
        <TableCell align="right">{discountPercentage}</TableCell>
      </TableRow>
    </Fragment>
  );
}
