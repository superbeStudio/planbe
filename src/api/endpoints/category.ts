import { AUTH_ALL } from "@/app/_lib/constant/queryKey";
import { api } from "../axios";

export const CATEGORY_QUERY_KEY = {
  ALL: ["CATEGORY"],
  GOAL_LIST: () => [...CATEGORY_QUERY_KEY.ALL, "GOAL_LIST"],
  EXPENSE_LIST: () => [...CATEGORY_QUERY_KEY.ALL, "EXPENSE_LIST"],
};

export const getGoalCategoryList = async () => {
  const url = `/api/cate/goal`;
  const { data } = await api.get<APIData<Category[]>>(url);
  return data;
};

export const getExpenseCategoryList = async () => {
  const url = `/api/cate/expense`;
  const { data } = await api.get<APIData<Category[]>>(url);
  return data;
};

export const createCategory = async ({
  categoryName,
  categoryType,
}: CreateCategoryParams) => {
  const url = `/api/cate`;
  const { data } = await api.post<APIData<void>>(url, {
    categoryName,
    categoryType,
  });
  return data;
};

export const editCategory = async ({
  categorySequence,
  categoryName,
  categoryType,
}: EditCategoryParams) => {
  const url = `/api/cate/${categorySequence}`;
  const { data } = await api.put<APIData<void>>(url, {
    categoryName,
    categoryType,
  });
  return data;
};

export const deleteCategory = async (categorySequence: string) => {
  const url = `/api/cate/${categorySequence}`;
  const { data } = await api.delete<APIData<void>>(url);
  return data;
};

export const CATEGORY = {
  GOAL_LIST: getGoalCategoryList,
  EXPENSE_LIST: getExpenseCategoryList,
  CREATE_CATEGORY: createCategory,
  EDIT_CATEGORY: editCategory,
  DELETE_CATEGORY: deleteCategory,
};
