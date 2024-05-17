import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/global/Container";
import Header from "@/components/homepage/Header";

import CarrersSection from "@/components/homepage/CarrersSection";

import MainSection from "@/components/homepage/MainSection";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <MainSection />
        <CarrersSection />
        <Container>
        </Container>
      </main>
    </>
  );
}
