"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export default function Page() {
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleRegister = (values: LoginForm) => {
    fetch("https://planbe-backend.p-e.kr/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.data) {
          localStorage.setItem("login-token", res.data.token.accessToken);
        }

        router.push("/goal");
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

          <Button
            type="button"
            onClick={handleSubmit(handleRegister)}
            size="large"
            fullWidth
            variant="outlined"
          >
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
}
