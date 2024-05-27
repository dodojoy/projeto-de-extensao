import MainSection from "@/components/engenheiro/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/engenheiro/DevFunctionContent";

export default function Engenheiro() {
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
