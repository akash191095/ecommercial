import {
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Fragment, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PrimaryVariants } from "@/types/product";
import SecondaryVariantsTable from "./SecondaryVariantsTable";

export default function PrimaryVariantsTable({
  primaryVariants,
}: {
  primaryVariants: PrimaryVariants[];
}) {
  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "rgba(7, 7, 23,0.8)" }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Primary</TableCell>
            <TableCell>Variant</TableCell>
            <TableCell>Inventory</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Discount%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {primaryVariants.map((item) => (
            <PrimaryVariantsRow key={item.name} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function PrimaryVariantsRow({ row }: { row: PrimaryVariants }) {
  const [open, setOpen] = useState(false);
  const { name, inventory, price, discountPercentage } = row;

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{inventory}</TableCell>
        <TableCell align="right">${price}</TableCell>
        <TableCell align="right">{discountPercentage}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row?.secondary_variants ? (
              <SecondaryVariantsTable
                secondaryVariants={row.secondary_variants}
              />
            ) : null}
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
