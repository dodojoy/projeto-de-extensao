import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/manutencao/MainSection";
import DevFunctionSection from "@/components/manutencao/DevFunctionSection";

export default function Manutencao() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection/>
      </main>
      <Footer />
    </>
  );
}
