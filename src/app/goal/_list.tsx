"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function GoalItem() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", flex: 1, width: "100%" }}>
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image="/sample.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            목표이름들어갈자리
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            목표금액들어갈자리
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            월필요저축
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            목표달성률
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
