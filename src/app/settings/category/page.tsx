"use client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Category() {
  return (
    <Box
      width="100%"
      height="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding={8}
    >
      <Box
        borderBottom={1}
        sx={{ cursor: "pointer" }}
        width="100%"
        display="flex"
        flexDirection="column"
        rowGap={8}
      >
        <Box display="flex" justifyContent="flex-end">
          <PlusCircleIcon width={24} onClick={() => alert("추가예정")} />
        </Box>
        <Typography variant="subtitle1" color="text.primary" component="text">
          목표/지출
        </Typography>
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <Button variant="outlined">등록</Button>
      </Box>
    </Box>
  );
}
