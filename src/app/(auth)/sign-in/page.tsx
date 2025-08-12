import SignUpForm from "@/auth/nextjs/components/SignUpForm";
import {
  CardContent,
  Card,
  CardTitle,
  CardPic,
  CardForm,
} from "../../../../components/Card";
import SignInForm from "@/auth/nextjs/components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[var(--main-themecolor)]">
      <Card>
        <CardContent>
          <CardTitle>Sign in</CardTitle>
          <CardForm>
            <SignInForm />
          </CardForm>
        </CardContent>
        <CardPic>
          <img className="w-100.5 ml-10" src="signin.svg" alt="a picture" />
        </CardPic>
      </Card>
    </div>
  );
};

export default SignIn;
