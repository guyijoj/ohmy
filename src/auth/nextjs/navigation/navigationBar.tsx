import { SiValorant } from "react-icons/si";
import NavBurger from "./navBurger";
import { getCurrentUser } from "../currentUser";

const NavigationBar = async () => {
  const fullUser = await getCurrentUser();

  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth()).padStart(2, "0");
  const year = now.getFullYear();
  const weekday = now.toLocaleDateString("en-EN", { weekday: "long" });
  return (
    <div className="w-full flex z-40 items-center p-5 justify-between bg-[#F8F8F8] fixed  top-0 h-20 shadow-sm text-neutral-950">
      <div className="flex gap-5.5">
        <NavBurger>
          <div className="flex gap-3.5 items-center text-xl font-bold ">
            <SiValorant
              size={60}
              className="bg-gray-700 p-1 rounded-full  border-1 border-white shadow-sm shadow-black"
            />
            <h1 className="">{fullUser.firstName}</h1>
          </div>
        </NavBurger>
        <div className="text-5xl logo-font">
          <span className="text-[var(--main-themecolor)] ">S</span>
          <span className="text-[var(--sub-themecolor)]">H</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium leading-none ">
          {weekday.charAt(0).toUpperCase() + weekday.slice(1)}
        </h2>
        <h2 className="text-[#3ABEFF] text-md">{`${day}/${month}/${year}`}</h2>
      </div>
    </div>
  );
};

export default NavigationBar;
