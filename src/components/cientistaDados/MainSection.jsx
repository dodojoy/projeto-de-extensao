import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import DadosIcon from "../icons/DadosIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="cientista de dados" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de cientista de dados" />
      </div>
      <DadosIcon />
    </div>
  );
}
