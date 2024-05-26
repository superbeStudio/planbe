import React from "react";
import ScatterChart from "./_scatter";
import BarLineChart from "./_barLine";
import { Box } from "@mui/material";
import FunnelChart from "./_funnel";

export default function Result() {
  return (
    <Box
      minHeight="100vh"
      height="100vh"
      display="flex"
      flexDirection="column"
      rowGap={2}
    >
      <ScatterChart />
      <BarLineChart />
      <FunnelChart />
      <FunnelChart />
    </Box>
  );
}
