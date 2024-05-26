import { ReactNode } from "react";
import {
  ChartBarIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export type SuperbeUrl = "GOAL" | "STATISTICS" | "SETTINGS";

export const URL_MAP_LIST: SuperbeUrl[] = ["GOAL", "STATISTICS", "SETTINGS"];

export const URL_MAP: Record<SuperbeUrl, string> = {
  GOAL: "goal",
  STATISTICS: "statistics",
  SETTINGS: "settings",
};

export const URL_MAP_NAME: Record<
  SuperbeUrl,
  { name: string; icon: ReactNode }
> = {
  GOAL: {
    name: "목표",
    icon: <PencilSquareIcon className="h-6 w-6 text-gray-500" />,
  },
  STATISTICS: {
    name: "통계",
    icon: <ChartBarIcon className="h-6 w-6 text-gray-500" />,
  },
  SETTINGS: {
    name: "설정",
    icon: <UserCircleIcon className="h-6 w-6 text-gray-500" />,
  },
};
