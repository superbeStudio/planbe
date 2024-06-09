"use client";

import { Box, Divider, Icon, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SETTINGS_DETAIL } from "../_lib/constant/url";
import { ArrowForwardIosRounded } from "@mui/icons-material";

export default function Settings() {
  const router = useRouter();
  const [mockDate, setMockDate] = useState(12);

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="center" gap={4} padding={2} width="100%">
        {/* 사용자 프로필 */}
        <Box padding={6} sx={{ backgroundColor: "brown" }}>
          프로필 이미지
        </Box>
        <Box display="flex" flexDirection="column" paddingLeft={4} rowGap={2}>
          <Typography variant="subtitle1" component="text">
            닉네임
          </Typography>
          <Typography variant="subtitle1" component="text">
            {`함께한 날들${mockDate}일`}
          </Typography>
        </Box>
      </Box>
      <Divider
        style={{ borderColor: "#efefef", width: "100%", borderWidth: 5 }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
      >
        <Box
          onClick={() => router.push(`settings/${SETTINGS_DETAIL.CATEGORY}`)}
          padding={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          입력 카테고리 등록
          <ArrowForwardIosRounded fontSize="small" />
        </Box>
        <Box
          onClick={() => router.push(`settings/${SETTINGS_DETAIL.MONEY}`)}
          padding={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          주 사용화폐 등록
          <ArrowForwardIosRounded fontSize="small" />
        </Box>
        <Box
          onClick={() => router.push(`settings/${SETTINGS_DETAIL.SCREEN}`)}
          padding={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          스크린 모드
          <ArrowForwardIosRounded fontSize="small" />
        </Box>
      </Box>
    </Box>
  );
}
