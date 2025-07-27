"use client";
import { resolve } from "path";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInSchema } from "../schemas";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "../actions";
import { useState } from "react";

type FormField = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const [error, setError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({ resolver: zodResolver(signInSchema) });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    const error = await signIn(data);
    setError(error);
  };

  return (
    <form
      className="flex flex-col p-3 gap-2.5 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("email")}
        type="text"
        placeholder="Email"
        disabled={isSubmitting}
        className="form-input "
      />
      {errors.email && (
        <h3 className="text-red-500 text-xs">{errors.email.message}</h3>
      )}
      <input
        {...register("password")}
        disabled={isSubmitting}
        type="password"
        placeholder="Password"
        className="form-input"
      />
      {errors.password && (
        <h3 className="text-red-500 text-xs">{errors.password.message}</h3>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
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

export default SignInForm;
