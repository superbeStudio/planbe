"use client";

import { SuperbeUrl, URL_MAP, URL_MAP_NAME } from "@/app/lib/constant/url";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navigator() {
  const router = useRouter();

  return (
    <div className="flex fixed bottom-0 row bg-red-50 w-full">
      {Object.entries(URL_MAP_NAME).map(([url, name]) => (
        <div
          key={url}
          className="flex flex-1 p-4 items-center justify-center border-r-indigo-950 border last:border-0"
          onClick={() => {
            router.push(URL_MAP[url as SuperbeUrl]);
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
