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
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const NavBurger = ({ children }: { children: React.ReactNode }) => {
  const [isOpenNavBar, setOpenNavBar] = useState(false);
  const pathway = usePathname();

  return (
    <div className="flex justify-start hidden burger">
      <BurgerButton onClick={() => setOpenNavBar(true)} />
      <AnimatePresence>
        {isOpenNavBar && (
          <motion.div
            className="fixed top-0 left-0 bottom-0 z-50 h-auto min-w-100 burger-nav"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <aside className="bg-[var(--main-themecolor)] text-white p-3 w-full w-1/5 h-full rounded-r-3xl flex flex-col justify-between ">
              <div>
                <div
                  className={`flex items-center justify-between  mb-5 ${styles.navline} pb-4 `}
                >
                  {children}
                  <NavButton onClick={() => setOpenNavBar(false)}>
                    <VscClose size={30} />
                  </NavButton>
                </div>
                <ul className="flex flex-col gap-1.5  ">
                  <li
                    onClick={() => setOpenNavBar(false)}
                    className={`${
                      pathway === "/dashboard" ? "active-nav underline" : null
                    } `}
                  >
                    <NavButton>
                      <MdDashboard size={20} />
                      <Link href="/dashboard" className="sideNav-sdes">
                        Dashboard
                      </Link>
                    </NavButton>
                  </li>
                  <li
                    onClick={() => setOpenNavBar(false)}
                    className={`${
                      pathway === "/dashboard/profile"
                        ? "active-nav underline"
                        : null
                    } `}
                  >
                    <NavButton>
                      <FaUser size={20} />
                      <Link href="/dashboard/profile" className="sideNav-sdes">
                        Your profile
                      </Link>
                    </NavButton>
                  </li>
                </ul>
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
