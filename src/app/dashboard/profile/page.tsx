import ProfileEditButton from "@/auth/nextjs/components/ProfileEditButton";
import ToggleRole from "@/auth/nextjs/components/ToggleRole";
import { getCurrentUser } from "@/auth/nextjs/currentUser";
import React, { useState } from "react";
import { SiValorant } from "react-icons/si";

import Link from "next/link";
import { ButtonMainColor, NavButton } from "../../../../components/Button";

const Profile = async () => {
  const fullUser = await getCurrentUser();

  return (
    <div className="relative">
      <ProfileEditButton />

      <h2 className="font-semibold text-2xl heading-line mb-6.5">
        Account Information
      </h2>

      <div className="flex gap-3 items-center mb-4">
        <SiValorant
          size={75}
          className="bg-gray-700 p-1 rounded-full text-white"
        />
        <div>
          <h1 className="text-xl font-semibold capitalize">
            {" "}
            {fullUser.firstName + " " + fullUser.lastName}
          </h1>
          <h1 className="text-lg"> {fullUser?.email}</h1>
        </div>
      </div>

      <h1 className="text-2xl">User ID: {fullUser?.id}</h1>
      <h1 className="text-2xl">Role: {fullUser?.role}</h1>
      <h1 className="text-2xl">Contact number {fullUser?.contactNumber}</h1>
    </div>
  );
};

export default Profile;
