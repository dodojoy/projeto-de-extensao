import MainSection from "@/components/devWeb/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devWeb/DevFunctionSection";

export default function Web() {
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
