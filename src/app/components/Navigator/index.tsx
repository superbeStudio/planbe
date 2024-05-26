"use client";

import { URL_MAP, URL_MAP_LIST, URL_MAP_NAME } from "@/app/_lib/constant/url";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navigator() {
  const router = useRouter();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        onChange={(event, _index) => {
          const target = URL_MAP_LIST[_index];
          console.log(URL_MAP[target]);
          router.push(URL_MAP[target]);
        }}
      >
        {Object.entries(URL_MAP_NAME).map(([url, { name, icon }]) => (
          <BottomNavigationAction label={name} icon={icon} key={name} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
