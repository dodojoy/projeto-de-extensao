import MaterialManutencao from "@/components/manutencao/Material";

import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/manutencao/MainSection";
import DevFunctionSection from "@/components/manutencao/DevFunctionContent";

export default function Manutencao() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <MaterialManutencao />
      </main>
      <Footer />
    </>
  );
}
