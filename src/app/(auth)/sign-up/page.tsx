import SignUpForm from "@/auth/nextjs/components/SignUpForm";
import {
  CardContent,
  Card,
  CardTitle,
  CardPic,
  CardForm,
} from "../../../../components/Card";

const SignUp = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[var(--main-themecolor)]">
      <Card>
        <CardPic>
          <img className="w-88.5 p-4 mr-30" src="auth4.svg" alt="a picture" />
        </CardPic>
        <CardContent>
          <CardTitle>Sign up</CardTitle>
          <CardForm>
            <SignUpForm />
          </CardForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
