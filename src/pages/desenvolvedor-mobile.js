import MainSection from "@/components/devMobile/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devMobile/DevFunctionContent";

export default function Mobile() {
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
