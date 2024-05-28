import MaterialWeb from "@/components/devWeb/Material";

import MainSection from "@/components/devWeb/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/devWeb/DevFunctionContent";

export default function Web() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection />
        <MaterialWeb />
      </main>
      <Footer />
    </>
  );
}
