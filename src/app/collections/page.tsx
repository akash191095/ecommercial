"use client";

import { Box, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";

export default function Collections() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      pt={5}
    >
      <Typography variant="h5">Cute dog of the day: </Typography>
      <Box mt={3}>
        <img src="https://placedog.net/500/500?random" alt="puppy" />
      </Box>
    </Box>
  );
}
