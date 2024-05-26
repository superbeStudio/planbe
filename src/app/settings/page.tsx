"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SETTINGS_DETAIL } from "../_lib/constant/url";

export default function Settings() {
  const router = useRouter();
  const [mockDate, setMockDate] = useState(12);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={4}
    >
      <Box display="flex" alignItems="center" gap={4} height={200}>
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
        gap={4}
        paddingTop={8}
      >
        <Typography variant="h5" color="text.primary" component="text">
          설정
        </Typography>
        <Box display="flex" flexDirection="column" gap={4} width="100%">
          <Box
            borderBottom={1}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`settings/${SETTINGS_DETAIL.CATEGORY}`)}
          >
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="text"
            >
              입력 카테고리 등록
            </Typography>
          </Box>
          <Box
            borderBottom={1}
            display="flex"
            justifyContent="space-between"
            paddingRight={1}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`settings/${SETTINGS_DETAIL.MONEY}`)}
          >
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="text"
            >
              주 사용화폐 등록
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="text"
            >
              KRW (원)
            </Typography>
          </Box>
          <Box
            borderBottom={1}
            display="flex"
            justifyContent="space-between"
            paddingRight={1}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`settings/${SETTINGS_DETAIL.SCREEN}`)}
          >
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="text"
            >
              스크린 모드
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="text"
            >
              다크모드
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
