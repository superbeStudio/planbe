"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function GoalItem() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", flex: 1, width: "100%" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="/sample.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <h2 className="text-base">목표이름들어갈자리</h2>
          <h5 className="text-sm">목표금액들어갈자리</h5>
          <h6 className="text-xs">월필요저축</h6>
          <h6 className="text-xs">목표달성률</h6>
        </CardContent>
      </Box>
    </Card>
  );
}
