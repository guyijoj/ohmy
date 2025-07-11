"use client";
import { RxHamburgerMenu } from "react-icons/rx";

import { ButtonClassic } from "../../../../components/Button";

interface BurgerProps extends React.HTMLAttributes<HTMLDivElement> {}

const BurgerButton: React.FC<BurgerProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <ButtonClassic>
        <RxHamburgerMenu size={25} />
      </ButtonClassic>
    </div>
  );
};

export default BurgerButton;
