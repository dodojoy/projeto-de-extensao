import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/homepage/Header";

import CarrersSection from "@/components/homepage/CarrersSection";

import MainSection from "@/components/homepage/MainSection";
import About from "@/components/homepage/About";
import Footer from "@/components/homepage/Footer";
import DevFunctionContent from "@/components/global/DevFunctionContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <MainSection />
        <CarrersSection />
        <About />
        <DevFunctionContent carrer="CIENTISTA DE DADOS" textCarrer="UM CIENTISTA DE DADOS É UM PROFISSIONAL ESPECIALIZADO NA ANÁLISE E INTERPRETAÇÃO DE GRANDES CONJUNTOS DE DADOS PARA IDENTIFICAR TENDÊNCIAS, PADRÕES E INSIGHTS VALIOSOS QUE PODEM SER UTILIZADOS PARA ORIENTAR DECISÕES ESTRATÉGICAS E RESOLVER PROBLEMAS COMPLEXOS EM UMA VARIEDADE DE SETORES E ÁREAS DE NEGÓCIO." />
      </main>
      <Footer />
    </>
  );
}
