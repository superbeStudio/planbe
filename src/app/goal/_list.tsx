"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { GoalList } from "../_lib/@types/goal";
import { formatStrPrice } from "../_lib/utils/price.util";

type Props = {
  goalInfo: GoalList;
};

export default function GoalItem({ goalInfo }: Props) {
  const theme = useTheme();

  const {
    categoryName,
    categorySequence,
    createDatetime,
    goalAmount,
    goalName,
    goalSequence,
    goalTime,
    goalUrl,
    priority,
    updateDatetime,
  } = goalInfo;

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
          <h2 className="text-base">{goalName}</h2>
          <h5 className="text-sm">{`<${categoryName}>`}</h5>
          <h5 className="text-sm">{formatStrPrice(goalAmount)}원</h5>
          <h6 className="text-xs">{goalTime}</h6>
          <h6 className="text-xs">{createDatetime.slice(0, 10)}</h6>
        </CardContent>
      </Box>
    </Card>
  );
}
