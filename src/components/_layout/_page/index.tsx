"use client";

import AuthenticatedHeader from "../AuthenticatedHeader";
import FixedSidebar from "../FixedSidebar";

export default function PageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <FixedSidebar />

      <section className="flex w-full flex-1 flex-col lg:w-[calc(100%-240px)]">
        <AuthenticatedHeader />

        <div className="flex max-h-[calc(100vh-65px)] flex-1 flex-col overflow-auto p-[16px] lg:p-[32px]">
          {children}
        </div>
      </section>
    </main>
  );
}
