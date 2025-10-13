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
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: "admin" | "user";
    contactNumber: string | null;
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
    const result = await EditProfile(UserData.email, data);
    setError(result);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col gap-1 mb-5.5">
        <span className="text-lg font-medium">First name</span>
        <input
          {...register("firstname")}
          value={UserData.firstName}
          className={`${styles.editProfileForm} max-w-3/5`}
        />
        {errors.firstname && (
          <span className="text-sm text-red-500">
            {errors.firstname.message as string}
          </span>
        )}
      </label>
      <label className="flex flex-col gap-1 mb-5.5">
        <span className="text-lg font-medium">Last name</span>
        <input
          {...register("lastname")}
          value={UserData.lastName}
          className={`${styles.editProfileForm} max-w-3/5`}
        />
        {errors.lastname && (
          <span className="text-sm text-red-500">
            {errors.lastname.message as string}
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
          placeholder={UserData.email}
        />
      </label>
      <label className="flex flex-col gap-1 mb-5.5">
        <span className="text-lg font-medium">Contact Number</span>
        <input
          {...register("contactNumber")}
          value={UserData.contactNumber || ""}
          className={`${styles.editProfileForm} max-w-3/5`}
        />
        {errors.contactNumber && (
          <span className="text-sm text-red-500">
            {errors.contactNumber.message as string}
          </span>
        )}
      </label>
      {error && <h3 className="text-red-500 text-xs">{error}</h3>}
      <h1 className="text-xl">
        Role: <span className="font-bold">{UserData.role}</span>
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
