import React from "react";
import { ButtonMainColor } from "../../../../components/Button";
import Link from "next/link";

const ProfileEditButton = () => {
  return (
    <div className="absolute right-0 font-semibold text-white text-lg">
      <ButtonMainColor>
        {" "}
        <Link href="/dashboard/editProfile" className="text-white">
          Edit Profile
        </Link>
      </ButtonMainColor>
    </div>
  );
};

export default ProfileEditButton;
