import { getCurrentUser } from "@/auth/nextjs/currentUser";
import ToggleRole from "../../auth/nextjs/components/ToggleRole";
import BurgerButton from "@/auth/nextjs/buttons/burgerButton";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ClientDashboard from "./client";
import { SiValorant } from "react-icons/si";

const Dashboard = async () => {
  return <img src="public/hmmm.jpg" className="w-3.5" />;
};

export default Dashboard;
