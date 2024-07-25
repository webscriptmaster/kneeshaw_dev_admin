"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import LoadingOverlay from "@/components/_layout/LoadingOverlay";
import useAuthStore from "@/zustand/Auth";
import useThemeStore from "@/zustand/Theme";

export default function RootTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const authStore = useAuthStore();
  const themeStore = useThemeStore();

  const hasHydrated = authStore.hasHydrated && themeStore.hasHydrated;

  useEffect(() => {
    theme.setTheme(themeStore.mode);
  }, [themeStore.mode]);

  return (
    <>
      {!hasHydrated && <LoadingOverlay loading />}

      {hasHydrated && children}
    </>
  );
}
