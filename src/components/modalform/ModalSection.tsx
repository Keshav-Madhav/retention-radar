"use client"
import { Boxes } from "../ui/background-boxes"
import { Vortex } from "../ui/vortex"
import { ModalForm } from "./ModalForm"

type Props = {}

const ModalSection = (props: Props) => {
  return (
    <div className="relative h-[100dvh] overflow-hidden">
      
      <div className="z-20 w-full h-full flex items-center justify-center text-white">
        <div className="relative max-w-xl w-full h-[85dvh] overflow-hidden flex items-center justify-center">
          <Vortex className="absolute bg-transparent"/>
          <ModalForm />
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full bg-gray-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes className="z-0"/>
    </div>
  )
}

export default ModalSection
