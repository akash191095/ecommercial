import CustomCollapsableTable from "./TableComponents/CustomCollapsableTable";
import { ProductsPayload } from "@/types/product";

export default function InventoryTable({ data }: { data: ProductsPayload[] }) {
  return (
    <>
      <CustomCollapsableTable
        columns={[
          { name: "Name" },
          { name: "Stock" },
          { name: "WHS" },
          { name: "Discount%" },
          { name: "Colour" },
          { name: "Lead Time" },
        ]}
        rows={data.map((item) => {
          const colorList: string[] =
            item.primary_variants?.map((item) => item.name) || [];
          return {
            rowData: [
              {
                value: item.title,
                id: item.id,
              },
              {
                value: item.inventory,
                id: item.id,
              },
              {
                value: item.price,
                id: item.id,
                prefix: "$",
              },
              {
                value: item.discountPercentage,
                id: item.id,
              },
              {
                value: "",
                id: item.id,
                type: "colorList",
                colorList,
              },
              {
                value: item.leadTime,
                id: item.id,
              },
            ],
            primaryVariants: item?.primary_variants || [],
          };
        })}
      />
    </>
  );
}
