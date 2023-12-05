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
import { memo } from "react";
import { useInventory } from "@/context/inventory-context";

const CustomCollapsableTable = ({ products }: CustomCollapsableTableProps) => {
  const {
    toggleEditingById,
    getModifiedProductById,
    updateModifiedProductById,
    modifiedProducts: allModifiedProducts,
    setModifiedProducts,
  } = useInventory();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>WHS</TableCell>
            <TableCell>Discount%</TableCell>
            <TableCell>Colour</TableCell>
            <TableCell>Lead Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length ? (
            products.map((product) => {
              return (
                <Row
                  key={product.id}
                  product={product}
                  toggleEditingById={toggleEditingById}
                  getModifiedProductById={getModifiedProductById}
                  updateModifiedProductById={updateModifiedProductById}
                  allModifiedProducts={allModifiedProducts}
                  modifiedProduct={getModifiedProductById(product.id) || null}
                  setModifiedProducts={setModifiedProducts}
                />
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={12}>
                <p>No data</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(CustomCollapsableTable);
