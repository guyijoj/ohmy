"use client";
import ToggleRole from "@/auth/nextjs/components/ToggleRole";
import React, { useState } from "react";
import styles from "../components.module.css";
import { ButtonEditProfileMainColor, ButtonMainColor } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  profileUpdateSchema,
  signInSchema,
  signUpSchema,
} from "@/auth/nextjs/schemas";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfile } from "@/auth/nextjs/actions";

interface ProfileFormsProps {
  UserData: {
    UserRole: string;
    UserEmail: string;
  };
}

type FormField = z.infer<typeof profileUpdateSchema>;
const ProfileForms = ({ UserData }: ProfileFormsProps) => {
  const [error, setError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(profileUpdateSchema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    const result = await EditProfile(UserData.UserEmail, data);
    setError(result);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col gap-1 mb-5.5">
        <span className="text-lg font-medium">First name</span>
        <input
          {...register("name")}
          className={`${styles.editProfileForm} max-w-3/5`}
        />
        {errors.name && (
          <span className="text-sm text-red-500">
            {errors.name.message as string}
          </span>
        )}
      </label>
      <label className="flex flex-col gap-1 mb-5.5">
        <span className="text-lg font-medium">Last name</span>
        <input
          {...register("name")}
          className={`${styles.editProfileForm} max-w-3/5`}
        />
        {errors.name && (
          <span className="text-sm text-red-500">
            {errors.name.message as string}
          </span>
        )}
      </label>

      <label className="flex flex-col gap-1. mb-5.5">
        <span className="text-lg font-medium text-[var(--main-bordercolor)]">
          Email
        </span>
        <input
          disabled={true}
          className={`${styles.editProfileForm} max-w-3/5`}
          placeholder={UserData.UserEmail}
        />
      </label>
      <label className="flex flex-col gap-1 mb-5.5">
        <span className="text-lg font-medium">Contact Number</span>
        <input
          {...register("name")}
          className={`${styles.editProfileForm} max-w-3/5`}
        />
        {errors.name && (
          <span className="text-sm text-red-500">
            {errors.name.message as string}
          </span>
        )}
      </label>
      {error && <h3 className="text-red-500 text-xs">{error}</h3>}
      <h1 className="text-xl">
        Role: <span className="font-bold">{UserData.UserRole}</span>
      </h1>
      <div className="flex mt-3 mb-4">
        <ToggleRole />
      </div>
      <div className="flex justify-end">
        <ButtonEditProfileMainColor>
          {isSubmitting ? "Loading" : "Update Info"}
        </ButtonEditProfileMainColor>
      </div>
    </form>
  );
};

export default ProfileForms;
