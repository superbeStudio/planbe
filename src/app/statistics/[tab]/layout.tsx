"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { LayoutProps } from "../../../../.next/types/app/layout";
import { useRouter } from "next/navigation";

export type StatisticsTabType = "result" | "consume" | "history";

const STATISTICS_TAB_URL: StatisticsTabType[] = [
  "result",
  "consume",
  "history",
];

const STATISTICS_TAB_URL_MAP: Record<StatisticsTabType, string> = {
  result: "목표 관리",
  consume: "소비 관리",
  history: "내역 조회",
};

export default function Statistics({ children, params }: LayoutProps) {
  const router = useRouter();

  const handleChange = (
    event: React.SyntheticEvent,
    value: StatisticsTabType
  ) => {
    router.push(`/statistics/${value}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        display="flex"
        flexDirection="column"
        flex="1"
      >
        <Tabs onChange={handleChange} variant="fullWidth" value={params.tab}>
          {STATISTICS_TAB_URL.map((url) => (
            <Tab label={STATISTICS_TAB_URL_MAP[url]} key={url} value={url} />
          ))}
        </Tabs>
      </Box>
      <Box width="100%" overflow="auto" padding={2}>
        {children}
      </Box>
    </Box>
  );
}
