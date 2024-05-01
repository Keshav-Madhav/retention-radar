import GraphSection from "@/components/graphs/GraphSection";
import LandingPage from "@/components/landing/LandingPage";
import ModalSection from "@/components/modalform/ModalSection";
import { formattedChurnData } from "@/utils/formattedChurnData";

const page = async () => {
  const data = await formattedChurnData();

  return (
    <div className="bg-gray-950 w-full h-[300dvh] flex flex-col">
      <LandingPage />

      <GraphSection data={data}/>

      <ModalSection />
    </div>
  );
}

export default page;
