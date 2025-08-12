import { SiValorant } from "react-icons/si";

import { VscClose } from "react-icons/vsc";
import { NavButton } from "../../../../components/Button";
import { getCurrentUser } from "../currentUser";
import { resolve } from "path";

interface NavUserProps {
  onClick: () => void;
}

const NavUser = async () => {
  const fullUser = await getCurrentUser();

  return (
    <div className="text-center relative pt-9 mb-3">
      <SiValorant
        size={75}
        className="bg-gray-700 p-1 rounded-full absolute left-1/2 bottom-5.5 -translate-1/2 border-1 border-white shadow-sm shadow-black"
      />
      <h2 className="text-xl font-bold  capitalize">{fullUser.name}</h2>
      <h3>{fullUser.email}</h3>
    </div>
  );
};

export default NavUser;
