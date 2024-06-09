"use client";

import { Box, Button, Fab } from "@mui/material";
import CategoryItem from "../_item";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { API, QUERY_KEY } from "@/api";
import { Add } from "@mui/icons-material";
import { SETTINGS_DETAIL, URL_MAP } from "@/app/_lib/constant/url";

export default function Goal() {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: QUERY_KEY.CATEGORY.GOAL_LIST(),
    queryFn: API.CATEGORY.GOAL_LIST,
  });

  const handleDetail = () => {
    router.push(`/${URL_MAP.settings}/${SETTINGS_DETAIL.CATEGORY}/form?type=G`);
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column" width="100%">
      {data?.data.length ? (
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          flex={1}
          rowGap={0.2}
          flexDirection="column"
        >
          {data?.data.map((category) => (
            <CategoryItem category={category} key={category.categorySequence} />
          ))}
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          flex={1}
        >
          생성된 카테고리가 없습니다.
        </Box>
      )}
      <Fab
        onClick={handleDetail}
        sx={{
          position: "absolute",
          bottom: 70,
          right: 16,
        }}
      >
        <Add />
      </Fab>
    </Box>
  );
}
