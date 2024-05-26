import MainSection from "@/components/devJogos/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devJogos/DevFunctionSection";

export default function Jogos() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
      </main>
      <Footer />
    </>
  );
}
