import MaterialGames from "@/components/desenvolvedor-de-jogos/Material";

import MainSection from "@/components/devJogos/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devJogos/DevFunctionContent";

export default function Jogos() {

  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <MaterialGames/>
      </main>
      <Footer />
    </>
  );
}
