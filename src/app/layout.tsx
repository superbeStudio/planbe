"use client";

import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navigator from "./components/Navigator";
import Content from "./components/Content";
import { createTheme, ThemeProvider } from "@mui/material";
import { Suspense } from "react";

const NotoR = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: ["inherit"].join(","),
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={NotoR.className}>
        <ThemeProvider theme={theme}>
          <Content>
            <Suspense>{children}</Suspense>
          </Content>
          <Navigator />
        </ThemeProvider>
      </body>
    </html>
  );
}
