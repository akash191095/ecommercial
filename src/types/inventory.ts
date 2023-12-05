import { ModifiedProducts, ProductsPayload } from "./product";

export type CustomCollapsableTableProps = {
  products: ProductsPayload[];
};

export type RowProps = {
  product: ProductsPayload;
  toggleEditingById: (id: number) => void;
  updateModifiedProductById: (id: number, data: ModifiedProducts) => void;
  allModifiedProducts: ModifiedProducts[];
  modifiedProduct: ModifiedProducts | null;
  getModifiedProductById: (id: number) => ModifiedProducts | undefined;
  setModifiedProducts: React.Dispatch<React.SetStateAction<ModifiedProducts[]>>;
};

export type InventoryContextType = {
  modifiedProducts: ModifiedProducts[];
  setModifiedProducts: React.Dispatch<React.SetStateAction<ModifiedProducts[]>>;
  toggleEditingById: (id: number) => void;
  getModifiedProductById: (id: number) => ModifiedProducts | undefined;
  updateModifiedProductById: (id: number, data: ModifiedProducts) => void;
  products: ProductsPayload[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsPayload[]>>;
};
