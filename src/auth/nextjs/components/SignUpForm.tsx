"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "../actions";
import { useState } from "react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";
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
      className="flex flex-col  gap-3.5 "
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="input-container">
        <FaUserAlt
          size={20}
          className="text-[var(--main-textcolor)] input-icon absolute top-1/2 left-5"
        />
        <input
          {...register("name")}
          type="text"
          placeholder="Enter Username"
          className={`form-input ${errors.name && "form-input-error "}  `}
        />
      </div>
      {errors.name && (
        <h3 className="text-red-500 text-xs">{errors.name.message}</h3>
      )}
      <div className="input-container">
        <MdEmail
          size={20}
          className="text-[var(--main-textcolor)] input-icon absolute top-1/2 left-5"
        />
        <input
          {...register("email")}
          type="text"
          placeholder="Enter Email"
          className={`form-input  ${errors.name && "form-input-error "}  `}
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
          type="text"
          placeholder="Enter Password"
          className={`form-input  ${errors.name && "form-input-error "}  `}
        />
      </div>

      {errors.password && (
        <h3 className="text-red-500 text-xs">{errors.password.message}</h3>
      )}
      <div className="input-container">
        <LuLockKeyhole
          size={20}
          className="text-[var(--main-textcolor)] input-icon absolute top-1/2 left-5"
        />
        <input
          {...register("confirmPassword")}
          type="text"
          placeholder="Confirm Password"
          className={`form-input  ${errors.name && "form-input-error "}  `}
        />
      </div>
      {errors.confirmPassword && (
        <h3 className="text-red-500 text-xs">
          {errors.confirmPassword.message}
        </h3>
      )}

      <div className="flex gap-3 text-sm text-[var(--main-textcolor)]">
        <input {...register("terms")} type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">I agree to all terms</label>
      </div>
      {errors.terms && (
        <h3 className="text-red-500 text-xs">{errors.terms.message}</h3>
      )}

      <button
        type="submit"
        className={`form-submit-button ${
          isSubmitting ? "bg-gray-700" : "bg-gray-600"
        }`}
      >
        {isSubmitting ? "Loading..." : "Register"}
      </button>
      {error && <h3 className="text-red-500 text-xs">{error}</h3>}
      <p className="text-[var(--main-textcolor)] text-sm">
        Already have an account?{" "}
        <Link
          className="text-[#008BD9] ease-linear duration-300 hover:text-[#4e0cb1]"
          href="/sign-in"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
