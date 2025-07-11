import { useState } from "react";
import BurgerButton from "@/auth/nextjs/buttons/burgerButton";
import NavigationBar from "@/auth/nextjs/navigation/navigationBar";
import { AnimatePresence, motion } from "motion/react";
import ToggleRole from "../profile/ToggleRole";
import { fullUserProps } from "@/auth/nextjs/currentUser";
import Navigation from "@/auth/nextjs/navigation/navigation";
import NavUser from "@/auth/nextjs/navigation/navUser";
import NavList from "@/auth/nextjs/navigation/navList";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4">
      <Navigation>
        <NavUser />
      </Navigation>

      <div>{children}</div>
    </div>
  );
};

export default DashBoardLayout;
