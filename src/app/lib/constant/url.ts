export type SuperbeUrl = "GOAL" | "STATISTICS" | "SETTINGS";

export const URL_MAP: Record<SuperbeUrl, string> = {
  GOAL: "goal",
  STATISTICS: "statistics",
  SETTINGS: "settings",
};

export const URL_MAP_NAME: Record<SuperbeUrl, string> = {
  GOAL: "목표",
  STATISTICS: "통계",
  SETTINGS: "설정",
};
