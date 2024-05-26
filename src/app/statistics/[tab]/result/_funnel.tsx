"use client";

import React from "react";
import {
  Tooltip,
  ResponsiveContainer,
  FunnelChart as RechartsFunnelChart,
  Funnel,
  LabelList,
} from "recharts";

const data = [
  {
    value: 12,
    name: "10대",
    fill: "#8884d8",
  },
  {
    value: 80,
    name: "20대",
    fill: "#83a6ed",
  },
  {
    value: 50,
    name: "30대",
    fill: "#8dd1e1",
  },
  {
    value: 40,
    name: "40대",
    fill: "#82ca9d",
  },
  {
    value: 26,
    name: "50대",
    fill: "#a4de6c",
  },
];

export default function FunnelChart() {
  return (
    <ResponsiveContainer width="100%" height="30%">
      <RechartsFunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList
            position="right"
            fill="#000"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </RechartsFunnelChart>
    </ResponsiveContainer>
  );
}
