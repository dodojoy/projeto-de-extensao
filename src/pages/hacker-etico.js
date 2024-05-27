import Material from "@/components/hacker-etico/Material";

import MainSection from "@/components/hacker/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/hacker/DevFunctionContent";

export default function Hacker() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <Material/>
      </main>
      <Footer />
    </>
  );
}
