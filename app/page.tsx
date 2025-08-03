import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import SideButtons from "@/components/left-sticky/StickyLeft";

export default function Home() {
  return (
    <main className="w-full ">
      <SideButtons />
      <Header />
      <HeroSection />
    </main>
  );
}
