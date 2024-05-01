import GraphSection from "@/components/graphs/GraphSection";
import LandingPage from "@/components/landing/LandingPage";

export default function Home() {
  return (
    <div className="bg-gray-950 w-full h-[300dvh] flex flex-col">
      <LandingPage />

      <GraphSection />
    </div>
  );
}
