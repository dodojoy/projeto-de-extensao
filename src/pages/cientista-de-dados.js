import MaterialDados from "@/components/cientista-de-dados/Material";

import MainSection from "@/components/cientistaDados/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/cientistaDados/DevFunctionContent";

export default function Dados() {
  
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <MaterialDados/>
      </main>
      <Footer />
    </>
  );
}
