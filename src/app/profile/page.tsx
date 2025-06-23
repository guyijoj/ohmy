import { getCurrentUser } from "@/auth/nextjs/currentUser";
import {
  Card,
  CardContent,
  CardItem,
  CardTitle,
} from "../../../components/Card";

const Profile = async () => {
  const userInfo = await getCurrentUser();
  return (
    <div className="p-3 flex justify-center items-center h-screen">
      <Card>
        <CardTitle>Profile</CardTitle>
        <CardItem>
          <p>Username: {userInfo.name} </p>
          <p>UserId: {userInfo.id} </p>
          <p>Email: {userInfo.email} </p>
          <p>Role: {userInfo.role}</p>
        </CardItem>
      </Card>
    </div>
  );
};

export default Profile;
