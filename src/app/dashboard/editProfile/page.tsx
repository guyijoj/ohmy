import { getCurrentUser } from "@/auth/nextjs/currentUser";
import Link from "next/link";
import React from "react";
import { SiValorant } from "react-icons/si";
import styles from "./editProfile.module.css";
import ProfileForms from "../../../../components/forms/ProfileForms";
import NavUser from "@/auth/nextjs/navigation/navUser";
import { Frijole } from "next/font/google";

const EditProfile = async () => {
  const fullUser = await getCurrentUser();

  return (
    <div className="relative">
      <h2 className="font-semibold text-2xl heading-line mb-6.5">
        Edit Profile
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
      <Link
        href="/dashboard/profile"
        className={`absolute right-0 top-0 ${styles.btngoback}`}
      >
        &larr; Go Back
      </Link>

      <div className="border-1 border-[var(--main-bordercolor)] rounded-xl p-7.5 mb-4">
        <ProfileForms
          UserData={{
            id: fullUser.id,
            email: fullUser.email,
            firstName: fullUser.firstName,
            lastName: fullUser.lastName,
            role: fullUser.role,
            contactNumber: fullUser.contactNumber,
          }}
        />
      </div>
    </div>
  );
};

export default EditProfile;
