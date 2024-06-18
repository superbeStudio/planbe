"use client";

import { API, QUERY_KEY } from "@/api";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createGoalFormSchema = z.object({
  goalName: z.string(),
  categorySequence: z.string(),
  goalAmount: z.string(),
  priority: z.number(),
  goalTime: z.string().optional(),
  goalUrl: z.string().optional(),
});

type CreateGoalForm = z.infer<typeof createGoalFormSchema>;

export default function Create() {
  const priorityRankOptions = [1, 2, 3, 4, 5];
  const [goalOptions, setGoalOptions] = useState<string[]>([]);
  const router = useRouter();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGoalForm>({
    resolver: zodResolver(createGoalFormSchema),
  });

  const { data: goalData } = useQuery({
    queryKey: QUERY_KEY.CATEGORY.GOAL_LIST(),
    queryFn: API.CATEGORY.GOAL_LIST,
  });

  const { mutateAsync: createGoal } = useMutation({
    mutationFn: API.GOAL.CREATE,
    onSuccess: () => {
      alert("목표가 생성되었습니다.");
      router.push("/goal");
    },
  });

  const createGoalInfo = (info: CreateGoalForm) => {
    const { categorySequence, goalAmount, priority, ...rest } = info;

    const catSequence = goalData?.data.find(
      (data) => data.categoryName === categorySequence
    )?.categorySequence;

    createGoal({
      categorySequence: Number(catSequence),
      goalAmount: Number(goalAmount),
      priority: Number(priority),
      goalTime: "2024-01-01",
      ...rest,
    });
  };

  useEffect(() => {
    if (goalData) {
      const options = goalData.data.map((data) => data.categoryName);
      setGoalOptions(options);
    }
  }, [goalData]);

  return (
    <Box
      width="100%"
      height="90vh"
      display="flex"
      flexDirection="column"
      padding={8}
      rowGap={8}
    >
      <Box>
        <Typography variant="h6" color="text.primary" component="text">
          당신의 크고 작은 목표는 무엇인가요?
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{ cursor: "pointer" }}
          width="100%"
          display="flex"
          flexDirection="column"
          rowGap={4}
          component="form"
        >
          <FormControl variant="standard">
            <InputLabel>목표 이름</InputLabel>
            <Input placeholder="목표 이름" {...register("goalName")} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel>목표 카테고리</InputLabel>
            <Select {...register("categorySequence")}>
              {goalOptions.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel>목표금액</InputLabel>
            <Input placeholder="목표금액" {...register("goalAmount")} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel>우선 순위</InputLabel>
            <Select {...register("priority")}>
              {priorityRankOptions.map((option) => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel>목표URL</InputLabel>
            <Input placeholder="목표URL" {...register("goalUrl")} />
          </FormControl>
          <FormControl variant="standard">
            <Button
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
            >
              사진업로드
              <VisuallyHiddenInput type="file" />
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Button variant="contained" onClick={handleSubmit(createGoalInfo)}>
        설정
      </Button>
    </Box>
  );
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
