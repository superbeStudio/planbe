"use client";
import { useState } from "react";
import { Layout } from "../Common/Layout";
import Paragraph from "../Common/Paragraph";
import { LightBulbIcon } from "@heroicons/react/20/solid";

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
    <Layout isDarkMode={isDarkMode}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "8px 16px",
        }}
      >
        <LightBulbIcon
          onClick={handleDarkMode}
          className={`h-6 w-6 ${isDarkMode ? "text-blue-50" : "text-black"}`}
        />
      </div>
      {children}
    </Layout>
  );
}
