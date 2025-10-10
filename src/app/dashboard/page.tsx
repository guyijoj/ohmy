import { getCurrentUser } from "@/auth/nextjs/currentUser";
import ToggleRole from "../../auth/nextjs/components/ToggleRole";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ClientDashboard from "./client";
import { SiValorant } from "react-icons/si";

const Dashboard = async () => {
  return (
    <div>
      <img src="/hmmm.jpg" alt="hmmmm" className="m-auto" />;
    </div>
  );
};

export default Dashboard;
