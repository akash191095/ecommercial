import { Box, CircularProgress } from "@mui/material";

import React from "react";

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={5}>
      <CircularProgress />
    </Box>
  );
}
