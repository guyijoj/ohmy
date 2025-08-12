"use client";
import { AnimatePresence, motion } from "motion/react";
import BurgerButton from "../buttons/burgerButton";
import NavigationBar from "./sideNavigationBar";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { NavButton } from "../../../../components/Button";
import NavUser from "./navUser";
import NavList from "./navList";
import LogoutButton from "../components/LogoutButton";
import styles from "../../../app/dashboard/dashboard.module.css";

const NavBurger = ({ children }: { children: React.ReactNode }) => {
  const [isOpenNavBar, setOpenNavBar] = useState(false);

  return (
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
            <aside className="bg-zinc-800 p-3 min-w-100 w-1/5 h-full rounded-l-3xl flex flex-col justify-between">
              <div>
                <div
                  className={`flex items-center justify-between gap-2.5 mb-5 ${styles.navline} pb-4 `}
                >
                  {children}
                  <NavButton onClick={() => setOpenNavBar(false)}>
                    <VscClose size={30} />
                  </NavButton>
                </div>
                <NavList />
              </div>
              <LogoutButton />
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBurger;
