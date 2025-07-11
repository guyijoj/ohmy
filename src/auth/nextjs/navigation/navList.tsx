"use client";

import ProfileButton from "../buttons/profileButton";
import LogoutButton from "../components/LogoutButton";

const NavList = () => {
  return (
    <>
      <ul className="flex flex-col ">
        <li>
          <ProfileButton />
        </li>
      </ul>
    </>
  );
};

export default NavList;
