import ToggleRole from "@/app/profile/ToggleRole";
import { getCurrentUser } from "@/auth/nextjs/currentUser";
import React from "react";
import { SiValorant } from "react-icons/si";

const Profile = async () => {
  const fullUser = await getCurrentUser();
  return (
    <div className="">
      <h2 className="font-semibold text-2xl heading-line mb-2.5">
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
            {fullUser?.name}
          </h1>
          <h1 className="text-lg"> {fullUser?.email}</h1>
        </div>
      </div>

      <h1 className="text-2xl">User ID: {fullUser?.id}</h1>
      <h1 className="text-2xl">Role: {fullUser?.role}</h1>
      <div className="flex mt-3">
        <ToggleRole />
      </div>
    </div>
  );
};

export default Profile;
