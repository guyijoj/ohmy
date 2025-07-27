import ProfileButton from "../buttons/profileButton";
import LogoutButton from "../components/LogoutButton";
import { SiValorant } from "react-icons/si";
import styles from "../../../app/dashboard/dashboard.module.css";
import NavUser from "./navUser";
import NavList from "./navList";
interface NavProps {
  onClick: () => void;
}
const NavigationBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-zinc-800 p-3 min-w-100 w-1/5 h-full rounded-l-3xl flex flex-col justify-between">
      <div>{children}</div>
    </div>
  );
};

export default NavigationBar;
