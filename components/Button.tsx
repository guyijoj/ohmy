import styles from "./components.module.css";

interface ButtonProps {
  children: any;
  onClick?: () => void;
}

export const ButtonRed = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-red-700 text-xl text-center rounded-lg p-3 logoutButton ${styles.logoutButton}`}
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

export const NavButton = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`font-semibold text-xl rounded-xl p-2 flex gap-2 items-center ${styles.navButton}`}
    >
      {children}
    </div>
  );
};
