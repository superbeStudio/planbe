"use client";

import { API } from "@/api";
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
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createGoalFormSchema = z.object({
  goalName: z.string(),
  categorySequence: z.number(),
  goalAmount: z.number(),
  priority: z.number(),
  goalTime: z.string(),
  goalUrl: z.string().optional(),
});

type CreateGoalForm = z.infer<typeof createGoalFormSchema>;

export default function Create() {
  const priorityRankOptions = [1, 2, 3, 4, 5];

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGoalForm>({
    resolver: zodResolver(createGoalFormSchema),
  });

  const { mutateAsync: createGoal } = useMutation({
    mutationFn: API.GOAL.LIST,
  });

  const createGoalInfo = () => {
    createGoal();
  };

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
            <Input
              placeholder="목표 카테고리"
              {...register("categorySequence")}
            />
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
      <Button variant="contained" onClick={() => alert("연동예정")}>
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
