import { getCurrentUser } from "@/auth/nextjs/currentUser";
import ToggleRole from "../profile/ToggleRole";
import BurgerButton from "@/auth/nextjs/buttons/burgerButton";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ClientDashboard from "./client";
import { SiValorant } from "react-icons/si";

const Dashboard = async () => {
  return <p className="text-4xl text-blue-600">HELLO</p>;
};

export default Dashboard;
