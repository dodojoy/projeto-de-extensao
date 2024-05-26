import { Inter } from "next/font/google";
import Header from "@/components/homepage/Header";

import CarrersSection from "@/components/homepage/CarrersSection";

import MainSection from "@/components/homepage/MainSection";
import About from "@/components/homepage/About";
import Footer from "@/components/homepage/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${inter.className}`}>
        <MainSection />
        <CarrersSection />
        <About />
      </main>
      <Footer />
    </>
  );
}
