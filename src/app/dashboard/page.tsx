import { getCurrentUser } from "@/auth/nextjs/currentUser";
import { Card, CardTitle } from "../../../components/Card";
import LogoutButton from "@/auth/nextjs/components/LogoutButton";
import ProfileButton from "@/auth/nextjs/buttons/profileButton";
import ToggleRole from "../profile/ToggleRole";
const Dashboard = async () => {
  const fullUser = await getCurrentUser();
  return (
    <div className="p-3 ">
      <div className="flex justify-end mb-2.5 gap-2">
        <ProfileButton />
        <LogoutButton />
      </div>
      <h1 className="text-3xl">User: {fullUser?.id}</h1>
      <h2 className="text-2xl">Role: {fullUser?.role}</h2>
      <div className="flex mt-3">
        <ToggleRole />
      </div>
    </div>
  );
};

export default Dashboard;
