"use client";

import { API, QUERY_KEY } from "@/api";
import { Box, Button, Input } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useDeferredValue, useEffect, useState } from "react";

export default function CategoryForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const type = searchParams.get("type") as CategoryType;
  const id = searchParams.get("id") as string | undefined;

  const editMode = !!id;

  const [title, setTitle] = useState<string>();

  const queryClient = useQueryClient();
  const { data: goalData } = useQuery({
    queryKey: QUERY_KEY.CATEGORY.GOAL_LIST(),
    queryFn: API.CATEGORY.GOAL_LIST,
    enabled: editMode && type === "G",
  });

  const { data: expenseData } = useQuery({
    queryKey: QUERY_KEY.CATEGORY.EXPENSE_LIST(),
    queryFn: API.CATEGORY.EXPENSE_LIST,
    enabled: editMode && type === "E",
  });

  const { mutate: createCategory } = useMutation({
    mutationFn: API.CATEGORY.CREATE_CATEGORY,
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: QUERY_KEY.CATEGORY.ALL });
      router.back();
    },
  });
  const { mutate: editCategory } = useMutation({
    mutationFn: API.CATEGORY.EDIT_CATEGORY,
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: QUERY_KEY.CATEGORY.ALL });
      router.back();
    },
  });
  const { mutate: deleteCategory } = useMutation({
    mutationFn: API.CATEGORY.DELETE_CATEGORY,
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: QUERY_KEY.CATEGORY.ALL });
      router.back();
    },
  });

  useEffect(() => {
    if (!goalData?.data || !id) return;
    const targetGoal = goalData.data.find(
      (goal) => goal.categorySequence === Number(id)
    );
    targetGoal && setTitle(targetGoal.categoryName);
  }, [goalData, id]);

  useEffect(() => {
    if (!expenseData?.data || !id) return;
    const targetExpense = expenseData.data.find(
      (goal) => goal.categorySequence === Number(id)
    );
    targetExpense && setTitle(targetExpense.categoryName);
  }, [expenseData, id]);

  const handleSave = () => {
    if (!title) {
      alert("카테고리 명을 입력해주세요.");
      return;
    }
    if (id && editMode) {
      editCategory({
        categoryName: title,
        categoryType: type,
        categorySequence: Number(id),
      });
    } else {
      createCategory({ categoryName: title, categoryType: type });
    }
  };

  return (
    <Box
      display="flex"
      flex={1}
      padding={4}
      rowGap={4}
      flexDirection="column"
      justifyContent="center"
    >
      <Input
        placeholder="카테고리 명"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button fullWidth variant="contained" onClick={handleSave}>
        저장
      </Button>
    </Box>
  );
}
