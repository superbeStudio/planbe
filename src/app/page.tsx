"use server";

import { redirect } from "next/navigation";
import { URL_MAP } from "./_lib/constant/url";

export default async function Home() {
  redirect(URL_MAP.GOAL);
}
