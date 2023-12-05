import { ENDPOINTS } from "@/utils/constants";
import { ProductsPayload } from "@/types/product";
import { fetcher } from "@/utils/utils";
import useSWR from "swr";

export default function useProducts() {
  const { data, error, isLoading } = useSWR<ProductsPayload[]>(
    ENDPOINTS.API.PRODUCTS,
    fetcher
  );

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
