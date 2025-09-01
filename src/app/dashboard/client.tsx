"use client";

import BurgerButton from "@/auth/nextjs/buttons/burgerButton";
import NavigationBar from "@/auth/nextjs/navigation/navigationBar";
import { AnimatePresence, motion } from "motion/react";
import ToggleRole from "../../auth/nextjs/components/ToggleRole";
import { useState } from "react";
import { fullUserProps } from "@/auth/nextjs/currentUser";

const ClientDashboard = ({ fullUser }: fullUserProps) => {
  const [isOpenNavBar, setOpenNavBar] = useState(false);
  return (
    <div className="p-3 ">
      <div className="flex justify-end mb-2.5 gap-2">
        <BurgerButton onClick={() => setOpenNavBar(true)} />
        <AnimatePresence>
          {isOpenNavBar && (
            <motion.div
              className="fixed top-0 right-0 z-50 h-full "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <NavigationBar onClick={() => setOpenNavBar(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h1 className="text-3xl">User: {fullUser?.id}</h1>
      <h2 className="text-2xl">Role: {fullUser?.role}</h2>
      <div className="flex mt-3">
        <ToggleRole />
      </div>
    </div>
  );
};

export default ClientDashboard;
