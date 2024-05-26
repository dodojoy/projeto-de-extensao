import MainSection from "@/components/cientistaDados/MainSection";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DevFunctionSection from "@/components/cientistaDados/DevFunctionSection";

export default function Dados() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DevFunctionSection carrer="CIENTISTA DE DADOS" textCarrer="UM CIENTISTA DE DADOS É UM PROFISSIONAL ESPECIALIZADO NA ANÁLISE E INTERPRETAÇÃO DE GRANDES CONJUNTOS DE DADOS. TAL PROFISSIONAL É MUITO REQUISITADO NO MERCADO E ANALISA GRANDES CONJUNTOS DE DADOS VISANDO IDENTIFICAR TENDÊNCIAS, PADRÕES E INSIGHTS VALIOSOS QUE PODEM SER UTILIZADOS PARA ORIENTAR DECISÕES ESTRATÉGICAS E RESOLVER PROBLEMAS COMPLEXOS EM UMA VARIEDADE DE SETORES E ÁREAS DE NEGÓCIO.

"/>
      </main>
      <Footer />
    </>
  );
}
