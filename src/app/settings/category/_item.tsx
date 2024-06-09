"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { SETTINGS_DETAIL, URL_MAP } from "@/app/_lib/constant/url";

type Props = {
  category: Category;
};

export default function CategoryItem({ category }: Props) {
  const router = useRouter();
  const { categoryName, categorySequence, categoryType } = category;

  const handleDetail = () => {
    router.push(
      `/${URL_MAP.settings}/${SETTINGS_DETAIL.CATEGORY}/form?type=${categoryType}&id=${categorySequence}`
    );
  };

  return (
    <Box
      onClick={handleDetail}
      display="flex"
      width="100%"
      padding={2}
      justifyContent="space-between"
      flexDirection="row"
      borderBottom="1px solid #e6e6e6"
    >
      <h2 className="text-base">{categoryName}</h2>
    </Box>
  );
}
