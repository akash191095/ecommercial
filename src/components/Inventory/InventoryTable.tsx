import { memo, useEffect } from "react";

import CustomCollapsableTable from "./TableComponents/CustomCollapsableTable";
import { ProductsPayload } from "@/types/product";
import { useInventory } from "@/context/inventory-context";

const InventoryTable = ({ products }: { products: ProductsPayload[] }) => {
  const { setProducts } = useInventory();

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  return (
    <>
      <CustomCollapsableTable products={products} />
    </>
  );
};

export default memo(InventoryTable);
