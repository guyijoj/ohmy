"use client";

import Link from "next/link";
import { NavButton } from "../../../../components/Button";
import { FaUser } from "react-icons/fa";

const ProfileButton = () => {
  return (
    <NavButton>
      <FaUser size={20} />
      <Link href="/dashboard/profile">Your profile</Link>
    </NavButton>
  );
};

export default ProfileButton;
