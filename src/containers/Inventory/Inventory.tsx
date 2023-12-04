"use client";

import { Box, Paper } from "@mui/material";

import Loader from "@/components/Loader";
import React from "react";
import useProducts from "@/hooks/useProducts";

export default function Inventory() {
  const { products, isLoading, isError } = useProducts();

  if (isLoading) return <Loader />;
  if (!products || !products.length || isError) return <p>No data</p>;

  return (
    <Paper elevation={3}>
      <Box height="100%" width="100%" px={3} py={5} mt={5}>
        Inventory
      </Box>
    </Paper>
  );
}
