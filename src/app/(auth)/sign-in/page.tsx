import SignUpForm from "@/auth/nextjs/components/SignUpForm";
import { CardContent, Card, CardTitle } from "../../../../components/Card";
import SignInForm from "@/auth/nextjs/components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <CardTitle>Sign in</CardTitle>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
