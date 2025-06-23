import SignUpForm from "@/auth/nextjs/components/SignUpForm";
import { CardContent, Card, CardTitle } from "../../../../components/Card";

const SignUp = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <CardTitle>Sign up</CardTitle>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
