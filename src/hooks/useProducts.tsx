import { ENDPOINTS } from "@/utils/constants";
import { fetcher } from "@/utils/utils";
import useSWR from "swr";

export default function useProducts() {
  const { data, error, isLoading } = useSWR(ENDPOINTS.API.PRODUCTS, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
