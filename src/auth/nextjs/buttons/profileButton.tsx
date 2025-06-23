"use client";

import Link from "next/link";
import { ButtonClassic } from "../../../../components/Button";

const ProfileButton = () => {
  return (
    <ButtonClassic>
      <Link href="/profile">Profile</Link>
    </ButtonClassic>
  );
};

export default ProfileButton;
