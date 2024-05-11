import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/global/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Container></Container>
      </main>
    </>
  );
}
