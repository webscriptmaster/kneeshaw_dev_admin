"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { CgCommunity } from "react-icons/cg";
import {
  LuBriefcase,
  LuChevronDown,
  LuChevronRight,
  LuCookie,
  LuDatabaseBackup,
  LuGamepad2,
  LuLayoutDashboard,
  LuRadiation,
  LuRss,
  LuShieldQuestion,
  LuUsers
} from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

import Logo from "./Logo";

export default function FixedSidebar() {
  const pathName = usePathname();

  const [openGameMenu, setOpenGameMenu] = useState(false);
  const [openJobMenu, setOpenJobMenu] = useState(false);
  const [openBlogMenu, setOpenBlogMenu] = useState(false);

  useEffect(() => {
    if (pathName.includes("/game") && !openGameMenu) {
      setOpenGameMenu(true);
    }

    if (pathName.includes("/job") && !openJobMenu) {
      setOpenJobMenu(true);
    }

    if (pathName.includes("/blog") && !openBlogMenu) {
      setOpenBlogMenu(true);
    }
  }, [pathName]);

  return (
    <aside className="font-lbv hidden h-[100vh] w-[240px] min-w-[240px] flex-col gap-[24px] border-r p-[16px] lg:flex">
      <div className="mb-[32px] flex justify-center">
        <Logo />
      </div>

      <Link
        href="/"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName === "/" ? "text-[#AFD275]" : ""
        )}
      >
        <LuLayoutDashboard /> Dashboard
      </Link>

      <Link
        href="/user/list"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/user/list") || pathName.includes("/user/edit")
            ? "text-[#AFD275]"
            : ""
        )}
      >
        <LuUsers /> User
      </Link>

      <Collapsible open={openGameMenu} onOpenChange={setOpenGameMenu}>
        <CollapsibleTrigger className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <LuGamepad2 />
            <span
              className={clsx(
                pathName.includes("/game") ? "text-[#AFD275]" : ""
              )}
            >
              Game
            </span>
          </div>
          {!openGameMenu && <LuChevronRight />}
          {openGameMenu && <LuChevronDown />}
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-4 px-7">
          <Link
            className={clsx(
              "mt-4",
              pathName.includes("/game/list") ||
                pathName.includes("/game/create") ||
                pathName.includes("/game/edit")
                ? "text-[#AFD275]"
                : ""
            )}
            href="/game/list"
          >
            Game List
          </Link>

          <Link
            className={clsx(
              pathName.includes("/game/category") ? "text-[#AFD275]" : ""
            )}
            href="/game/category"
          >
            Category
          </Link>

          <Link
            className={clsx(
              pathName.includes("/game/platform") ? "text-[#AFD275]" : ""
            )}
            href="/game/platform"
          >
            Platform
          </Link>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openJobMenu} onOpenChange={setOpenJobMenu}>
        <CollapsibleTrigger className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <LuBriefcase />
            <span
              className={clsx(
                pathName.includes("/job") ? "text-[#AFD275]" : ""
              )}
            >
              Job
            </span>
          </div>
          {!openJobMenu && <LuChevronRight />}
          {openJobMenu && <LuChevronDown />}
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-4 px-7">
          <Link
            className={clsx(
              "mt-4",
              pathName.includes("/job/list") ? "text-[#AFD275]" : ""
            )}
            href="/job/list"
          >
            Job List
          </Link>
          <Link
            className={clsx(
              pathName.includes("/job/skill") ? "text-[#AFD275]" : ""
            )}
            href="/job/skill"
          >
            Skill
          </Link>
          <Link
            className={clsx(
              pathName.includes("/job/database") ? "text-[#AFD275]" : ""
            )}
            href="/job/database"
          >
            Database
          </Link>
          <Link
            className={clsx(
              pathName.includes("/job/godot") ? "text-[#AFD275]" : ""
            )}
            href="/job/godot"
          >
            Godot
          </Link>
          <Link
            className={clsx(
              pathName.includes("/job/scope") ? "text-[#AFD275]" : ""
            )}
            href="/job/scope"
          >
            Scope
          </Link>
          <Link
            className={clsx(
              pathName.includes("/job/period") ? "text-[#AFD275]" : ""
            )}
            href="/job/period"
          >
            Period
          </Link>
          <Link
            className={clsx(
              pathName.includes("/job/experience") ? "text-[#AFD275]" : ""
            )}
            href="/job/experience"
          >
            Experience
          </Link>
          <Link
            className={clsx(
              pathName.includes("/job/budget") ? "text-[#AFD275]" : ""
            )}
            href="/job/budget"
          >
            Budget
          </Link>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openBlogMenu} onOpenChange={setOpenBlogMenu}>
        <CollapsibleTrigger className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <LuRss />
            <span
              className={clsx(
                pathName.includes("/blog") ? "text-[#AFD275]" : ""
              )}
            >
              Blog
            </span>
          </div>
          {!openBlogMenu && <LuChevronRight />}
          {openBlogMenu && <LuChevronDown />}
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-4 px-7">
          <Link
            className={clsx(
              "mt-4",
              pathName.includes("/blog/list") ||
                pathName.includes("/blog/create") ||
                pathName.includes("/blog/edit")
                ? "text-[#AFD275]"
                : ""
            )}
            href="/blog/list"
          >
            Blog List
          </Link>

          <Link
            className={clsx(
              pathName.includes("/blog/category") ? "text-[#AFD275]" : ""
            )}
            href="/blog/category"
          >
            Category
          </Link>
        </CollapsibleContent>
      </Collapsible>

      <Link
        href="/service"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/service") ? "text-[#AFD275]" : ""
        )}
      >
        <LuRadiation /> Service
      </Link>

      <Link
        href="/faq"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/faq") ? "text-[#AFD275]" : ""
        )}
      >
        <LuShieldQuestion /> FAQ
      </Link>

      <Link
        href="/team"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/team") ? "text-[#AFD275]" : ""
        )}
      >
        <RiTeamLine /> Team
      </Link>

      <Link
        href="/community"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/community") ? "text-[#AFD275]" : ""
        )}
      >
        <CgCommunity /> Community
      </Link>

      <Link
        href="/feedback"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/feedback") ? "text-[#AFD275]" : ""
        )}
      >
        <VscFeedback /> Feedback
      </Link>

      <Link
        href="/request"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/request") ? "text-[#AFD275]" : ""
        )}
      >
        <LuDatabaseBackup /> Data Request
      </Link>

      <Link
        href="/cookie"
        className={clsx(
          "flex items-center gap-[12px]",
          pathName.includes("/cookie") ? "text-[#AFD275]" : ""
        )}
      >
        <LuCookie /> Cookie Consent
      </Link>
    </aside>
  );
}
