"use client";

import { ButtonRed } from "../../../../components/Button";
import { logOut } from "../actions";

const LogoutButton = () => {
  return (
    <ButtonRed
      onClick={async () => {
        await logOut();
      }}
    >
      Log out
    </ButtonRed>
  );
};

export default LogoutButton;
