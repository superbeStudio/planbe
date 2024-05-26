import { ReactNode } from "react";
import {
  ChartBarIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export type SuperbeUrl = "goal" | "statistics" | "settings";

export type SettingsDetail = "CATEGORY" | "MONEY" | "SCREEN";

export const URL_MAP_LIST: SuperbeUrl[] = ["goal", "statistics", "settings"];

export const URL_MAP: Record<SuperbeUrl, string> = {
  goal: "goal",
  statistics: "statistics",
  settings: "settings",
};

export const SETTINGS_DETAIL: Record<SettingsDetail, string> = {
  CATEGORY: "category",
  MONEY: "money",
  SCREEN: "screen",
};

export const URL_MAP_NAME: Record<
  SuperbeUrl,
  { name: string; icon: ReactNode }
> = {
  goal: {
    name: "목표",
    icon: <PencilSquareIcon className="h-6 w-6 text-gray-500" />,
  },
  statistics: {
    name: "통계",
    icon: <ChartBarIcon className="h-6 w-6 text-gray-500" />,
  },
  settings: {
    name: "설정",
    icon: <UserCircleIcon className="h-6 w-6 text-gray-500" />,
  },
};
