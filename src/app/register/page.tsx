"use client";

import React from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender, SystemCurrency, SystemColor } from "@/app/_lib/types/user.d";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const registerFormSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  nickname: z.string(),
  sex: z.nativeEnum(Gender),
  age: z.number(),
  currencyMain: z.nativeEnum(SystemCurrency),
  modeScreen: z.nativeEnum(SystemColor),
});

type RegisterForm = z.infer<typeof registerFormSchema>;
export const getUser = async () => {
  const res = await fetch("https://planbe-backend.p-e.kr/api/user/1");
  return res.json();
};

export default function Page() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      age: 30,
      sex: Gender.F,
      currencyMain: SystemCurrency.KWD,
      modeScreen: SystemColor.L,
    },
  });

  const handleRegister = (values: RegisterForm) => {
    console.log(values);
    fetch("https://planbe-backend.p-e.kr/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      console.log(res);
      res.json();
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div className="mb-8">
            <TextField
              fullWidth
              type="email"
              id="email"
              variant="filled"
              label="이메일"
              placeholder="hey@chrisoncode.io"
              error={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                A valid email is required.
              </p>
            )}
          </div>
          <div className="mb-8">
            <TextField
              fullWidth
              type="text"
              id="nickname"
              variant="filled"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              error={!!errors.nickname}
              {...register("nickname")}
            />
            {errors.nickname && (
              <p className="text-red-500 text-sm mt-2">
                A valid nickname is required.
              </p>
            )}
          </div>
          <div className="mb-8">
            <TextField
              fullWidth
              type="password"
              id="password"
              variant="filled"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              error={!!errors.password}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                A valid password is required.
              </p>
            )}
          </div>
          <div className="mb-8">
            <TextField
              fullWidth
              type="password"
              id="confirmPassword"
              variant="filled"
              label="비밀번호 확인"
              placeholder="비밀번호를 입력해주세요"
              error={!!errors.password}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                A valid password is required.
              </p>
            )}
          </div>
          <Controller
            control={control}
            name="sex"
            render={({ field }) => {
              return (
                <FormControl>
                  <FormLabel id="gender">성별</FormLabel>
                  <RadioGroup row aria-labelledby="gender" name="gender">
                    <FormControlLabel
                      value={Gender.F}
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value={Gender.M}
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              );
            }}
          />
          <Button
            type="button"
            onClick={handleSubmit(handleRegister)}
            size="large"
            fullWidth
            variant="outlined"
          >
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
}
