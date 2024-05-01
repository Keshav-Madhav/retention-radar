import React from 'react'
import GraphGrid from './GraphGrid'

type Props = {
  data: churnData
}

const GraphSection = ({ data }: Props) => {
  return (
    <div className="h-[100dvh] w-full dark:bg-gray-950 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      
      <GraphGrid data={data}/>
    </div>
  )
}

export default GraphSection