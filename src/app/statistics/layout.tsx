"use client";

import { useState, ReactNode } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Statistics({ children }: { children: ReactNode }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, index: number) => {
    setSelectedTabIndex(index);
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
        <Tabs
          value={selectedTabIndex}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="목표 관리" />
          <Tab label="소비 관리" />
          <Tab label="내역 조회" />
        </Tabs>
      </Box>
      <Box width="100%" overflow="auto" padding={2}>
        {children}
      </Box>
    </Box>
  );
}
