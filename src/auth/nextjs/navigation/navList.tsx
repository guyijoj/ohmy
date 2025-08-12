"use client";

import { useState } from "react";
import DashboardButton from "../buttons/dashboardButton";
import ProfileButton from "../buttons/profileButton";
import { usePathname } from "next/navigation";
import styles from "./dashboard.module.css";

const NavList = () => {
  const pathway = usePathname();
  return (
    <>
      <ul className="flex flex-col gap-1.5  ">
        <li
          className={`${
            pathway === "/dashboard" ? "active-nav underline" : null
          } `}
        >
          <DashboardButton />
        </li>
        <li
          className={`${
            pathway === "/dashboard/profile" ? "active-nav underline" : null
          } `}
        >
          <ProfileButton />
        </li>
      </ul>
    </>
  );
};

export default NavList;
