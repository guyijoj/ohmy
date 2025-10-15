import ProfileButton from "../buttons/profileButton";
import LogoutButton from "../components/LogoutButton";
import { SiValorant } from "react-icons/si";
import styles from "../../../app/dashboard/dashboard.module.css";
import NavUser from "./navUser";
import NavList from "./navList";
import { Suspense } from "react";
import { SideNavigationSkeleton } from "../components/SideNavigationSkeleton";
interface NavProps {
  onClick: () => void;
}
const SideNavigationBar = () => {
  return (
    <div className="w-75 p-2 bottom-0 top-40  fixed  bg-[var(--main-themecolor)] h-auto  rounded-r-xl border-r-1 border-t-1 border-white shadow-sm shadow-black flex flex-col justify-between sideNavBar">
      <div>
        <Suspense fallback={<SideNavigationSkeleton />}>
          <NavUser />
        </Suspense>

        <NavList />
      </div>
      <LogoutButton />
    </div>
  );
};

export default SideNavigationBar;
