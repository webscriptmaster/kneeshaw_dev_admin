"use client";

import NonAuthenticatedHeader from "@/components/_layout/NonAuthenticatedHeader";

import SignInForm from "./SignInForm";

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col">
      <NonAuthenticatedHeader />
      <SignInForm />
    </main>
  );
}
