import MainSection from "@/components/devFront/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devFront/DevFunctionSection";


export default function FrontEnd() {
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
