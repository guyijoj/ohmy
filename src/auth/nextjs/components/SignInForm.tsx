"use client";
import { resolve } from "path";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInSchema } from "../schemas";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "../actions";
import { useState } from "react";
import Link from "next/link";
import { MdEmail, MdLock } from "react-icons/md";

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
    <form className="flex flex-col gap-2.5" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <MdEmail
          size={20}
          className="text-[var(--main-textcolor)] input-icon absolute top-1/2 left-5"
        />
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          disabled={isSubmitting}
          className={`form-input  ${errors.email && "form-input-error "}  `}
        />
      </div>
      {errors.email && (
        <h3 className="text-red-500 text-xs">{errors.email.message}</h3>
      )}

      <div className="input-container">
        <MdLock
          size={20}
          className="text-[var(--main-textcolor)] input-icon absolute top-1/2 left-5"
        />
        <input
          {...register("password")}
          disabled={isSubmitting}
          type="password"
          placeholder="Password"
          className={`form-input  ${errors.password && "form-input-error "}  `}
        />
      </div>
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
      <p className="text-[var(--main-textcolor)] text-sm mt-4">
        Don't have an account?{" "}
        <Link
          className="text-[#008BD9] ease-linear duration-300 hover:text-[#4e0cb1]"
          href="/sign-up"
        >
          Create one!
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
