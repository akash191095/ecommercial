import { PrimaryVariants } from "./product";

export type Row = {
  value: string | number;
  id: number;
  colorList?: string[];
  align?: "center" | "left" | "right" | "justify" | "inherit" | undefined;
  type?: "text" | "colorList";
  prefix?: string;
};

export type CustomCollapsableTableProps = {
  columns: {
    align?: "center" | "left" | "right" | "justify" | "inherit" | undefined;
    name: string;
  }[];
  rows: {
    rowData: Row[];
    primaryVariants: PrimaryVariants[];
  }[];
};

export type RowProps = {
  row: Row[];
  primaryVariants: PrimaryVariants[];
};
