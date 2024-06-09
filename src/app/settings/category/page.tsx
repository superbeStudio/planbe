"use client";

import { Box, Divider, Icon, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { SETTINGS_DETAIL } from "@/app/_lib/constant/url";

export default function Category() {
  const router = useRouter();
  const [mockDate, setMockDate] = useState(12);

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
      >
        <Box
          onClick={() =>
            router.push(`/settings/${SETTINGS_DETAIL.CATEGORY}/goal`)
          }
          padding={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          목표
          <ArrowForwardIosRounded fontSize="small" />
        </Box>
        <Box
          onClick={() =>
            router.push(`/settings/${SETTINGS_DETAIL.CATEGORY}/expense`)
          }
          padding={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          지출
          <ArrowForwardIosRounded fontSize="small" />
        </Box>
      </Box>
    </Box>
  );
}
