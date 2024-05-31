import MaterialManutencao from "@/components/manutencao-de-hardware/Material";

import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/manutencao-de-hardware/MainSection";
import DevFunctionSection from "@/components/manutencao-de-hardware/DevFunctionContent";

export default function Manutencao() {
  return <div>Manutenção de Hardware</div>;

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
