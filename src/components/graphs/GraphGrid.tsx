"use client";

import { useState } from "react";
import { WobbleCard } from "../ui/wobble-card";
import PieChart from "./PieChart";
import BarChart1 from "./BarChart1";
import BarChart2 from "./BarChart2";


type Props = {
  data: churnData
}

const GraphGrid = ({ data }: Props) => {
  const [type, setType] = useState('Credit');

  return (
    <div className="h-[85dvh] w-full flex items-center justify-center gap-6">
      <div className="h-[85dvh] ml-20 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-900 min-h-[400px] lg:min-h-[300px]"
          className="flex items-center justify-center p-4"
        >
          <BarChart1 churndata={data} />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800" className="flex items-center justify-center p-4">
          <PieChart churndata={data} />  
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-zinc-900 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]" className="flex items-center justify-center p-4">
          <BarChart2 churndata={data} type={type} />
        </WobbleCard>
      </div>

      <div className="flex flex-col gap-3 mt-[13rem]">
        <button 
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => setType('Credit')}
        >
          Credit Score
        </button>
        <button 
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => setType('Salary')}  
        >
          Salary
        </button>
        <button 
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => setType('Tenure')}  
        >
          Tenure
        </button>
      </div>
    </div>
  )
}

export default GraphGrid
