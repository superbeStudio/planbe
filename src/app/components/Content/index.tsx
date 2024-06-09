"use client";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { defaultOptions } from "../../_lib/utils/queryClient.util";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }));
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Box
        className={`${isDarkMode ? "dark" : ""}`}
        display="flex"
        flex={1}
        minHeight="calc(100vh - 56px)" // bottom navigator 높이 빼주기
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
    </QueryClientProvider>
  );
}
