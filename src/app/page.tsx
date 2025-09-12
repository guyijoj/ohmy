import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-3">
      <div className="flex gap-2.5 h-15 items-center">
        <Link className="auth-button " href="/sign-in">
          Sign up
        </Link>
        <Link className="auth-button" href="/sign-up">
          Sign in
        </Link>
      </div>
    </div>
  );
}
