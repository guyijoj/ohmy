import { usePathname } from "next/navigation";
import styles from "./components.module.css";

interface ButtonProps {
  children: any;
  onClick?: () => void;
}

export const ButtonRed = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={` text-lg font-bold rounded-lg flex gap-2 items-center p-3 logoutButton ${styles.logoutButton}`}
    >
      {children}
    </div>
  );
};

export const ButtonClassic = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-600 text-xl text-center rounded-lg p-3  ${styles.profileButton}`}
    >
      {children}
    </div>
  );
};

export const ButtonMainColor = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[var(--main-themecolor)]  text-center rounded-lg p-3  ${styles.buttonMainColor}`}
    >
      {children}
    </div>
  );
};

export const NavButton = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`font-semibold text-lg  p-3 flex gap-4 items-center ${styles.navButton} `}
    >
      {children}
    </div>
  );
};
