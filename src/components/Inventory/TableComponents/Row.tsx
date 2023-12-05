import {
  Box,
  Button,
  Collapse,
  IconButton,
  Input,
  MenuItem,
  Select,
  TableCell,
  TableRow,
} from "@mui/material";
import { Fragment, memo, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ModifiedProducts } from "@/types/product";
import PrimaryVariantsTable from "./PrimaryVariantsTable";
import { RowProps } from "@/types/inventory";
import _ from "lodash";

function getColors(colors: string[]) {
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      {colors.map((color) => {
        return (
          <div
            key={color}
            style={{
              height: 20,
              width: 20,
              backgroundColor: color.toLowerCase(),
              borderRadius: 100,
              marginLeft: 5,
              opacity: 0.8,
            }}
          ></div>
        );
      })}
    </Box>
  );
}

const Row = ({
  product,
  toggleEditingById,
  updateModifiedProductById,
  allModifiedProducts,
  modifiedProduct,
  setModifiedProducts,
}: RowProps) => {
  const [open, setOpen] = useState(false);
  const { id, primary_variants: primaryVariants } = product;
  const colorList: string[] =
    product.primary_variants?.map((item) => item.name) || [];

  function handleSaveEdit() {
    if (!modifiedProduct) {
      setModifiedProducts([
        ...allModifiedProducts,
        { ...product, editing: true },
      ]);
      return;
    }
    if (modifiedProduct?.editing) {
      localStorage.setItem(
        "modifiedProducts",
        JSON.stringify(
          allModifiedProducts.map((item: ModifiedProducts) => ({
            ...item,
            editing: false,
          }))
        )
      );
      toggleEditingById(id);
    } else {
      toggleEditingById(id);
    }
  }

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          {primaryVariants ? (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>
        {modifiedProduct && modifiedProduct.editing ? (
          <>
            <TableCell>
              <Input
                fullWidth
                type="text"
                value={modifiedProduct.title}
                onChange={(event) =>
                  updateModifiedProductById(id, {
                    ...modifiedProduct,
                    title: event.target.value,
                  })
                }
              />
            </TableCell>
            <TableCell>
              <Input
                fullWidth
                type="number"
                value={modifiedProduct.inventory || ""}
                onChange={(event) =>
                  updateModifiedProductById(id, {
                    ...modifiedProduct,
                    inventory: event.target.value,
                  })
                }
              />
            </TableCell>
            <TableCell>
              <Input
                fullWidth
                type="number"
                value={modifiedProduct.price || ""}
                onChange={(event) =>
                  updateModifiedProductById(id, {
                    ...modifiedProduct,
                    price: Number(event.target.value),
                  })
                }
              />
            </TableCell>
            <TableCell>
              <Input
                fullWidth
                type="number"
                value={modifiedProduct.discountPercentage || ""}
                onChange={(event) =>
                  updateModifiedProductById(id, {
                    ...modifiedProduct,
                    discountPercentage: Number(event.target.value),
                  })
                }
              />
            </TableCell>
            <TableCell>{getColors(colorList)}</TableCell>
            <TableCell>
              <Input
                fullWidth
                type="text"
                value={modifiedProduct.leadTime}
                onChange={(event) =>
                  updateModifiedProductById(id, {
                    ...modifiedProduct,
                    leadTime: event.target.value,
                  })
                }
              />
            </TableCell>
            <TableCell>
              <Select
                value={modifiedProduct.active ? 0 : 1}
                label="Status"
                onChange={(event) => {
                  updateModifiedProductById(id, {
                    ...modifiedProduct,
                    active: event.target.value === 0 ? true : false,
                  });
                }}
              >
                <MenuItem value={0}>Active</MenuItem>
                <MenuItem value={1}>Inactive</MenuItem>
              </Select>
            </TableCell>
          </>
        ) : null}
        {modifiedProduct && !modifiedProduct.editing ? (
          <>
            <TableCell>{modifiedProduct.title}</TableCell>
            <TableCell>{modifiedProduct.inventory}</TableCell>
            <TableCell>${modifiedProduct.price}</TableCell>
            <TableCell>{modifiedProduct.discountPercentage}%</TableCell>
            <TableCell>{getColors(colorList)}</TableCell>
            <TableCell>{modifiedProduct.leadTime}</TableCell>
            <TableCell>
              {modifiedProduct.active ? "Active" : "Inactive"}
            </TableCell>
          </>
        ) : null}
        {!modifiedProduct ? (
          <>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.inventory}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.discountPercentage}%</TableCell>
            <TableCell>{getColors(colorList)}</TableCell>
            <TableCell>{product.leadTime}</TableCell>
            <TableCell>{product.active ? "Active" : "Inactive"}</TableCell>
          </>
        ) : null}
        <TableCell>
          <Button variant="contained" onClick={handleSaveEdit}>
            {modifiedProduct?.editing ? "Save" : "Edit"}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {primaryVariants ? (
              <PrimaryVariantsTable primaryVariants={primaryVariants} />
            ) : null}
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default memo(Row, (prevProps, nextProps) => {
  if (_.isEqual(prevProps.modifiedProduct, nextProps.modifiedProduct)) {
    return true;
  }
  return false;
});
