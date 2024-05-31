import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/manutencao-de-hardware/MainSection";
import DevFunctionSection from "@/components/manutencao-de-hardware/DevFunctionContent";
import MaterialManutencao from "@/components/manutencao-de-hardware/Material";

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
