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
      className={`bg-gray-600 text-xl text-center rounded-lg p-3 logoutButton ${styles.profileButton}`}
    >
      {children}
    </div>
  );
};
