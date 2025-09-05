"use client";
import { RxHamburgerMenu } from "react-icons/rx";

import { ButtonClassic } from "../../../../components/Button";

interface BurgerProps {
  onClick?: () => void;
}

const BurgerButton: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <div>
      <ButtonClassic onClick={onClick}>
        <RxHamburgerMenu size={25} />
      </ButtonClassic>
    </div>
  );
};

export default BurgerButton;
