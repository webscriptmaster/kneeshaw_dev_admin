"use client";

import {
  LuBriefcase,
  LuDatabaseBackup,
  LuGamepad2,
  LuRadiation,
  LuRss,
  LuShieldQuestion,
  LuUsers
} from "react-icons/lu";

import { useEffect } from "react";

import { CgCommunity } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useDashboardStore from "@/zustand/Dashboard";

export default function Information() {
  const store = useDashboardStore();

  useEffect(() => {
    store.getStatisticsAction();
  }, []);

  return (
    <div className="grid flex-1 grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Users <LuUsers />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.user ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Jobs <LuBriefcase />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.job ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Games <LuGamepad2 />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.game ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Blogs <LuRss />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.blog ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Services <LuRadiation />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.service ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              FAQ <LuShieldQuestion />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.faq ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Community <CgCommunity />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.communityJoiner ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Feedback <VscFeedback />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.feedback ?? 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              Data Requests <LuDatabaseBackup />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-5xl">
            {store.dashboard?.count?.dataRequest ?? 0}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
