import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-ceter justify-center">
      <SignIn />
    </main>
  );
}
