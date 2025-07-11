"use client";

import Link from "next/link";
import { NavButton } from "../../../../components/Button";
import { FaRegUser } from "react-icons/fa";

const ProfileButton = () => {
  return (
    <NavButton>
      <FaRegUser size={20} />
      <Link href="/profile">Your profile</Link>
    </NavButton>
  );
};

export default ProfileButton;
