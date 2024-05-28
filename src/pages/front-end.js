import MaterialFrontEnd from "@/components/devFront/Material";

import MainSection from "@/components/devFront/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devFront/DevFunctionContent";

export default function FrontEnd() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <MaterialFrontEnd />
      </main>
      <Footer />
    </>
  );
}
