import { SiValorant } from "react-icons/si";

import { VscClose } from "react-icons/vsc";
import { NavButton } from "../../../../components/Button";
import { getCurrentUser } from "../currentUser";

interface NavUserProps {
  onClick: () => void;
}

const NavUser = async () => {
  const fullUser = await getCurrentUser();
  return (
    <div className="flex items-center gap-2.5">
      <SiValorant size={45} className="bg-gray-700 p-1 rounded-full  " />
      <h2 className="text-2xl font-bold">{fullUser.name}</h2>
    </div>
  );
};

export default NavUser;
