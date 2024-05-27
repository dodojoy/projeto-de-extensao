import MaterialIa from "@/components/desenvolvedor-ia.jsx/Material";

import MainSection from "@/components/devIA/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devIA/DevFunctionContent";

export default function IA() {

  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <MaterialIa/>
      </main>
      <Footer />
    </>
  );
}
