import { Box, Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import { Fragment, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PrimaryVariantsTable from "./PrimaryVariantsTable";
import { RowProps } from "@/types/inventory";

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

export default function Row({ row, primaryVariants }: RowProps) {
  const [open, setOpen] = useState(false);
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
        {row.map((rowItems, index) => (
          <TableCell
            key={`${index}-${rowItems.id}`}
            align={rowItems?.align || "left"}
          >
            {rowItems.type === "colorList"
              ? getColors(rowItems?.colorList || [])
              : `${rowItems.prefix ?? ""}${rowItems.value}`}
          </TableCell>
        ))}
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
}
