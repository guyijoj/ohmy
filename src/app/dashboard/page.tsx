import { getCurrentUser } from "@/auth/nextjs/currentUser";
import ToggleRole from "../profile/ToggleRole";
import BurgerButton from "@/auth/nextjs/buttons/burgerButton";
import NavigationBar from "@/auth/nextjs/navigation/navigationBar";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ClientDashboard from "./client";

const Dashboard = async () => {
  const fullUser = await getCurrentUser();
  return (
    <>
      <h1 className="text-3xl">User: {fullUser?.id}</h1>
      <h2 className="text-2xl">Role: {fullUser?.role}</h2>
      <div className="flex mt-3">
        <ToggleRole />
      </div>
    </>
  );
};

export default Dashboard;
