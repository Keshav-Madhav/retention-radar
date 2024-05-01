"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";


type Props = {}

const GraphGrid = (props: Props) => {
  return (
    <div className="h-[80dvh] mr-10 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-900 min-h-[400px] lg:min-h-[300px]"
        className=""
      >
        <div></div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800">
        <div></div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-zinc-900 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
        <div></div>
      </WobbleCard>
    </div>
  )
}

export default GraphGrid
