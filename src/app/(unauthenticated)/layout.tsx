"use client";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import LoadingOverlay from "@/components/_layout/LoadingOverlay";
import useAuthStore from "@/zustand/Auth";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const authStore = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized && authStore.user?._id) {
      router.push("/");
    }
  }, [initialized]);

  if (!initialized) return <LoadingOverlay loading />;

  if (initialized && !authStore.user?._id) return children;

  return <LoadingOverlay loading />;
}
