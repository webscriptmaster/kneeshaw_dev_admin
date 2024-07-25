"use client";

import { Puff } from "react-loader-spinner";

interface Props {
  loading: boolean;
}

export default function LoadingOverlay({ loading }: Props) {
  if (!loading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60"
      style={{ zIndex: 2000 }}
    >
      <Puff visible height="120" width="120" color="#AFD275" />
    </div>
  );
}
