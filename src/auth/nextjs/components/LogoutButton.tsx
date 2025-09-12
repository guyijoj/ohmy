"use client";

import { ButtonRed } from "../../../../components/Button";
import { logOut } from "../actions";
import { IoMdExit } from "react-icons/io";

const LogoutButton = () => {
  return (
    <ButtonRed
      onClick={async () => {
        await goBack();
      }}
    >
      <IoMdExit size={25} />
      Log out
    </ButtonRed>
  );
};

export default LogoutButton;
