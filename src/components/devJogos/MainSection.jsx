import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import JogosIcon from "../icons/JogosIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="Desenvolvedor de jogos" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de desenvolvedor de jogos" />
      </div>
      <JogosIcon/>
    </div>
  );
}
