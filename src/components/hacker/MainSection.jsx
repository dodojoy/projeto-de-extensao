import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import HackerIcon from "../icons/HackerIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="hacker ético" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de hacker ético" />
      </div>
      <HackerIcon />
    </div>
  );
}
