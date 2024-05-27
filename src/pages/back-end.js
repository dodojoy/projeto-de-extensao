import MaterialBackEnd from "@/components/back-end/Material";

import MainSection from "@/components/devBack/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devBack/DevFunctionContent";

export default function BackEnd() {
  
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <MaterialBackEnd/>
      </main>
      <Footer />
    </>
  );
}
