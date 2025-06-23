"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "../actions";
import { useState } from "react";

type FormField = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const [error, setError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(signUpSchema),
  });

  const submitHandler: SubmitHandler<FormField> = async (data) => {
    const error = await signUp(data);
    setError(error);
  };

  return (
    <form
      className="flex flex-col p-3 gap-2.5 items-center"
      onSubmit={handleSubmit(submitHandler)}
    >
      <input
        {...register("name")}
        type="text"
        placeholder="Username"
        className="form-input "
      />
      {errors.name && (
        <h3 className="text-red-500 text-xs">{errors.name.message}</h3>
      )}
      <input
        {...register("email")}
        type="text"
        placeholder="Email"
        className="form-input "
      />
      {errors.email && (
        <h3 className="text-red-500 text-xs">{errors.email.message}</h3>
      )}
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="form-input"
      />
      {errors.password && (
        <h3 className="text-red-500 text-xs">{errors.password.message}</h3>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm Password"
        className="form-input"
      />
      {errors.confirmPassword && (
        <h3 className="text-red-500 text-xs">
          {errors.confirmPassword.message}
        </h3>
      )}

      <button
        type="submit"
        className={`form-submit-button ${
          isSubmitting ? "bg-gray-700" : "bg-gray-600"
        }`}
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {error && <h3 className="text-red-500 text-xs">{error}</h3>}
    </form>
  );
};

export default SignUpForm;
