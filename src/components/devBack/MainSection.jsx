import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import BackIcon from "../icons/BackIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="Desenvolvedor back-end" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de desenvolvedor back-end" />
      </div>
      <BackIcon />
    </div>
  );
}
