import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "../ui/aurora-background";

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="h-[100dvh]">
      <AuroraBackground>
        <BackgroundBeams className="bg-transparent"/>
        
        <div className="absolute">
          <div className="text-white">
            heyyyyy
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}

export default LandingPage