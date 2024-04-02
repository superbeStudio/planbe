"use client";
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
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-slate-100">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "4px 8px",
          }}
        >
          <button onClick={handleDarkMode}>useDark</button>
        </div>
        {children}
      </div>
    </div>
  );
}
