"use client";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      className={`${isDarkMode ? "dark" : ""}`}
      display="flex"
      flex={1}
      minHeight="100%"
      width="100%"
    >
      <Box
        className="dark:bg-slate-800 dark:text-slate-100"
        display="flex"
        flex={1}
        minHeight="100%"
        width="100%"
        flexDirection="column"
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "4px 8px",
          }}
        >
          <button onClick={handleDarkMode}>useDark</button>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
