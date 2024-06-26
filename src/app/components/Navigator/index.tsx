﻿"use client";

import { URL_MAP, URL_MAP_LIST, URL_MAP_NAME } from "@/app/_lib/constant/url";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function Navigator() {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1];

  console.log(currentPath);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={currentPath}
        showLabels
        onChange={(event, url) => {
          router.push(`/${url}`);
        }}
      >
        {Object.entries(URL_MAP_NAME).map(([url, { name, icon }]) => (
          <BottomNavigationAction
            label={name}
            icon={icon}
            key={name}
            value={url}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
