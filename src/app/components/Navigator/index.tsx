"use client";

import { SuperbeUrl, URL_MAP, URL_MAP_NAME } from "@/app/_lib/constant/url";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navigator() {
  const router = useRouter();

  return (
    <div className="flex fixed bottom-0 row w-full shadow-inner">
      {Object.entries(URL_MAP_NAME).map(([url, { name, icon }]) => (
        <div
          key={url}
          className="flex flex-1 p-4 items-center justify-center border-r-indigo-950 flex-col"
          onClick={() => {
            router.push(URL_MAP[url as SuperbeUrl]);
          }}
        >
          {icon}
          <p className="text-xs"> {name}</p>
        </div>
      ))}
    </div>
  );
}
