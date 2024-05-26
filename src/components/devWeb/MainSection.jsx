import styles from "@/styles/MainSection.module.css";
import WebIcon from "../icons/WebDev";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="Desenvolvedor web" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de desenvolvedor web
" />
      </div>
      <WebIcon />
    </div>
  );
}
