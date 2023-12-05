import * as React from "react";

import { ModifiedProducts, ProductsPayload } from "@/types/product";

import { InventoryContextType } from "@/types/inventory";

const InventoryContext = React.createContext<InventoryContextType | null>(null);

function InventoryProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = React.useState<ProductsPayload[]>([]);
  const [modifiedProducts, setModifiedProducts] = React.useState<
    ModifiedProducts[]
  >(() => {
    let savedProducts = localStorage.getItem("modifiedProducts");
    if (savedProducts) {
      return JSON.parse(savedProducts);
    }
    return [];
  });

  function toggleEditingById(id: number) {
    const newData = modifiedProducts.map((item) => {
      return item.id === id ? { ...item, editing: !item.editing } : item;
    });
    setModifiedProducts(newData);
  }

  function updateModifiedProductById(id: number, data: ModifiedProducts) {
    const newData = modifiedProducts.map((item) => {
      return item.id === id ? data : item;
    });
    setModifiedProducts(newData);
  }

  function getModifiedProductById(id: number): ModifiedProducts | undefined {
    const data = modifiedProducts.find((item) => {
      return item.id === id;
    });
    return data;
  }

  const value = {
    modifiedProducts,
    setModifiedProducts,
    toggleEditingById,
    getModifiedProductById,
    updateModifiedProductById,
    products,
    setProducts,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
}

function useInventory() {
  const context = React.useContext(InventoryContext) as InventoryContextType;
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { InventoryProvider, useInventory };
