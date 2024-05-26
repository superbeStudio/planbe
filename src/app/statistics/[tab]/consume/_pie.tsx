﻿"use client";

import {
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
} from "recharts";

export default function PieChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <RechartsPieChart>
        <Pie
          data={data01}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          renderingIntent={"test"}
          dataKey="value"
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];
