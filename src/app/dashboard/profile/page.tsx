import ProfileEditButton from "@/auth/nextjs/components/ProfileEditButton";
import ToggleRole from "@/auth/nextjs/components/ToggleRole";
import { getCurrentUser } from "@/auth/nextjs/currentUser";
import React, { useState } from "react";
import { SiValorant } from "react-icons/si";
import ProfileClient from "./ProfileClient";

const Profile = async () => {
  const fullUser = await getCurrentUser();

  return <ProfileClient fullUser={fullUser} />;
};

export default Profile;
