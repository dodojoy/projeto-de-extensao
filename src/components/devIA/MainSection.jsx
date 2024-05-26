import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import IAIcon from "../icons/IAIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="Desenvolvedor de IA" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de desenvolvedor de IA" />
      </div>
      <IAIcon />
    </div>
  );
}
