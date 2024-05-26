import React from "react";
import BarLineChart from "./_barLine";
import PieChart from "./_pie";
import { Box } from "@mui/material";

export default function Result() {
  return (
    <Box
      minHeight="100vh"
      height="100vh"
      display="flex"
      flexDirection="column"
      rowGap={2}
    >
      <BarLineChart />
      <Box display="flex" flexDirection="row">
        <PieChart />
        <PieChart />
      </Box>
    </Box>
  );
}
