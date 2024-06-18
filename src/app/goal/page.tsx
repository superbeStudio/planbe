"use client";

import { Box, Button, Card, CardContent, Fab } from "@mui/material";
import Chart from "./_chart";
import GoalItem from "./_list";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { API, QUERY_KEY } from "@/api";

export default function Goal() {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: QUERY_KEY.GOAL.LIST(),
    queryFn: API.GOAL.LIST,
  });
  console.log(data?.data);
  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        flex={1}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 240,
            flex: 1,
          }}
        >
          <Chart chartProps={{ fill: "#9cb5dd" }} />
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            minWidth: 240,
          }}
        >
          <Chart chartProps={{ fill: "#c1a2dd" }} />
        </CardContent>
      </Box>
      <Box display="flex" width="100%" justifyContent="flex-end">
        <Button
          onClick={() => {
            router.push(`/goal/create`);
          }}
        >
          <p>목표 생성</p>
        </Button>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        flex={1}
        rowGap={1}
        flexDirection="column"
      >
        {data?.data && data?.data.length > 0 ? (
          data?.data.map((goalInfo) => {
            return (
              <GoalItem goalInfo={goalInfo} key={goalInfo.createDatetime} />
            );
          })
        ) : (
          <p>등록된 목표가 없습니다.</p>
        )}
      </Box>
    </Box>
  );
}
