import { useRef, useEffect } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Header from "@/components/homepage/Header";
import CarrersSection from "@/components/homepage/CarrersSection";
import MainSection from "@/components/homepage/MainSection";
import About from "@/components/homepage/About";
import Footer from "@/components/homepage/Footer";




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const careersRef = useRef(null);
  const aboutRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [router.asPath]);

  return (
    <>
      <Header aboutRef={aboutRef} careersRef={careersRef} />
      <main className={`${inter.className}`}>
        <MainSection careersRef={careersRef} />
        <div style={{ width: "100%" }} id="careers" ref={careersRef}>
          <CarrersSection />
        </div>
        <div style={{ width: "100%" }} id="about" ref={aboutRef}>
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
