export type ProductsPayload = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  inventory: string;
  active: boolean;
  leadTime: string;
  description: string;
  category: string;
  image: string;
  primary_variant_name: string;
  secondary_variant_name: string;
  primary_variants?: PrimaryVariants[];
};

export type PrimaryVariants = {
  name: string;
  price: number;
  discountPercentage: number;
  inventory: number;
  active: boolean;
  secondary_variants?: SecondaryVariants[];
};

export type SecondaryVariants = {
  name: string;
  price: number;
  discountPercentage: number;
  inventory: number;
};
