"use client";

import React from "react";
import { TextField, Box } from "@mui/material";

export default function PantrySearch({ searchQuery, setSearchQuery }) {
  return (
    <Box mb={2}>
      <TextField
        label="Search Items"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Box>
  );
}
