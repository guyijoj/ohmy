import React from "react";
import { ButtonMainColor } from "../../../../components/Button";

interface ProfileEditButtonProprs {
  onClick: () => void;
}

const ProfileEditButton = ({ onClick }: ProfileEditButtonProprs) => {
  return (
    <div
      className="absolute right-0 font-semibold text-white text-lg"
      onClick={onClick}
    >
      <ButtonMainColor>Edit profile</ButtonMainColor>
    </div>
  );
};

export default ProfileEditButton;
