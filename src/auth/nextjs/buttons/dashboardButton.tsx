"use client";

import Link from "next/link";
import { NavButton } from "../../../../components/Button";
import { MdDashboard } from "react-icons/md";

const DashboardButton = () => {
  return (
    <NavButton>
      <MdDashboard size={20} />
      <Link href="/dashboard" className="sideNav-sdes">
        Dashboard
      </Link>
    </NavButton>
  );
};

export default DashboardButton;
