"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

import useThemeStore from "@/zustand/Theme";
import { THEME_MODE } from "@/utils/constants";

import Logo from "./Logo";

export default function NonAuthenticatedHeader() {
  const theme = useTheme();
  const themeStore = useThemeStore();

  const handleSwitchTheme = () => {
    theme.setTheme(
      themeStore.mode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK
    );
    themeStore.setMode(
      themeStore.mode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK
    );
  };

  return (
    <header className="flex items-center justify-between border-b px-[16px] py-[8px]">
      <Logo />

      <div className="flex flex-row items-center gap-[24px]">
        <div
          className="flex cursor-pointer gap-[12px] rounded-full bg-[#888888] p-[4px]"
          onClick={handleSwitchTheme}
        >
          <LuMoon
            className={clsx(
              "rounded-full p-1 text-[24px] text-[#EDF1F3]",
              themeStore.mode === THEME_MODE.DARK ? "bg-[#000000]" : ""
            )}
          />
          <LuSun
            className={clsx(
              "rounded-full p-1 text-[24px] text-[#000000]",
              themeStore.mode === THEME_MODE.LIGHT ? "bg-[#EDF1F3]" : ""
            )}
          />
        </div>
      </div>
    </header>
  );
}
