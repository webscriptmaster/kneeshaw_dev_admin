"use client";

import { InfinitySpin } from "react-loader-spinner";

export default function UnderConstruction() {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
      <h2 className="text-[32px] font-[700] text-[#AFD275]">
        Under Construction
      </h2>

      <InfinitySpin width="200" color="#AFD275" />
    </div>
  );
}
