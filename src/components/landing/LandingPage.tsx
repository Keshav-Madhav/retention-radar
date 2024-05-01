"use client";


import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradient } from "../ui/background-gradient";
import { Title } from "./Title";

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="h-[100dvh]">
      <AuroraBackground>
        <BackgroundBeams className="bg-transparent"/>
        
        <div className="absolute h-[80vh] w-full flex flex-col justify-around items-center">

          <div className="flex flex-col ">
            <Title />
          </div> 

          <div className="px-20 w-full text-start flex flex-wrap justify-around gap-4">
            <BackgroundGradient className=" rounded-[22px] max-w-lg p-2 sm:p-5 h-full bg-white dark:bg-gray-950 ">
              <p className="text-lg sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
                What is Retention Radar?
              </p>9
      
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              In the fast-paced world of financial services, staying ahead means understanding your customers like never before. At Retention Radar, we&apos;re dedicated to helping you predict and prevent customer churn with precision. Our cutting-edge web application combines advanced predictive modeling with rich customer data to empower you with insights and strategies for enhanced retention.
              </p>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] max-w-lg p-2 sm:p-5 h-full bg-white dark:bg-gray-950">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Churn Prediction Model:
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Leverage our powerful predictive model to foresee customer churn based on a comprehensive dataset.
              Intuitive Web Interface: Our user-friendly interface allows seamless input of customer details and provides instant churn predictions.
              </p>
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Rich Dataset:
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              Access a diverse array of customer attributes, including credit scores, demographics, account balance, and tenure with the organization.
              </p>
            </BackgroundGradient>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}

export default LandingPage