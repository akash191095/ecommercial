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
          { name: "Status" },
        ]}
        rows={data.map((item) => {
          const colorList: string[] =
            item.primary_variants?.map((item) => item.name) || [];
          return {
            rowData: [
              {
                value: item.title,
              },
              {
                value: item.inventory,
              },
              {
                value: item.price,
                prefix: "$",
              },
              {
                value: item.discountPercentage,
              },
              {
                value: "",
                type: "colorList",
                colorList,
              },
              {
                value: item.leadTime,
              },
              {
                value: item.active ? "Active" : "Inactive",
              },
            ],
            primaryVariants: item?.primary_variants || [],
            id: item.id,
          };
        })}
      />
    </>
  );
}
