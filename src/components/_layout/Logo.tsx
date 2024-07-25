"use client";

import Link from "next/link";

import clsx from "clsx";

import useThemeStore from "@/zustand/Theme";
import { THEME_MODE } from "@/utils/constants";

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  const themeStore = useThemeStore();

  return (
    <Link href="/">
      <img
        className={clsx(
          "h-[48px] w-[108px] lg:h-[72px] lg:w-[162px]",
          className
        )}
        src={
          themeStore.mode === THEME_MODE.DARK
            ? "/logo/logo-white.png"
            : "/logo/logo-black.png"
        }
        alt="Logo"
      />
    </Link>
  );
}
