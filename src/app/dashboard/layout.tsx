import { Suspense, useState } from "react";
import BurgerButton from "@/auth/nextjs/buttons/burgerButton";
import { AnimatePresence, motion } from "motion/react";
import ToggleRole from "../../auth/nextjs/components/ToggleRole";
import { fullUserProps } from "@/auth/nextjs/currentUser";
import Navigation from "@/auth/nextjs/navigation/navBurger";
import NavUser from "@/auth/nextjs/navigation/navUser";
import LogoutButton from "@/auth/nextjs/components/LogoutButton";
import NavBurger from "@/auth/nextjs/navigation/navBurger";
import SideNavigationBar from "@/auth/nextjs/navigation/sideNavigationBar";
import NavigationBar from "@/auth/nextjs/navigation/navigationBar";
import DashboardSkeleton from "@/auth/nextjs/components/DashboardSkeleton";
import DashboardLoading from "./loading";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen pt-35 pr-10 ">
      <nav>
        <NavigationBar />
        <SideNavigationBar />
      </nav>

      <main className="ml-90  p-5 text-[var(--main-textcolor)] border-1 border-[var(--main-bordercolor)] rounded-xl ">
        <Suspense fallback={<DashboardLoading />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default DashBoardLayout;
