import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/global/Container";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/homepage/MainSection";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <MainSection/>
      <main className={`${styles.main} ${inter.className}`}>
        <Container>
        </Container>
      </main>
    </>
  );
}
