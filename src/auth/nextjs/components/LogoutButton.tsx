"use client";

import { ButtonRed } from "../../../../components/Button";
import { logOut } from "../actions";
import { IoMdExit } from "react-icons/io";

const LogoutButton = () => {
  return (
    <div className="sideNav-sdes">
      <ButtonRed
        onClick={async () => {
          await logOut();
        }}
      >
        <IoMdExit size={25} />
        Log out
      </ButtonRed>
    </div>
  );
};

export default LogoutButton;
