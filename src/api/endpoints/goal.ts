import { AUTH_ALL } from "@/app/_lib/constant/queryKey";
import { QueryFunctionContext } from "@tanstack/react-query";
import { api } from "../axios";
import { CreateGoalBody, GoalList } from "@/app/_lib/@types/goal";

export const GOAL_QUERY_KEY = {
  ALL: [AUTH_ALL] as const,
  LIST: () => [...GOAL_QUERY_KEY.ALL, "LIST"],
};

export const getGoalList = async () => {
  const url = `/api/goal`;
  const { data } = await api.get<APIData<GoalList[]>>(url);
  return data;
};

export const createGoalList = async (params: CreateGoalBody) => {
  const url = `/api/goal`;
  const { data } = await api.post<APIData<null>>(url, params);
  return data;
};

export const GOAL = {
  LIST: getGoalList,
  CREATE: createGoalList,
};
