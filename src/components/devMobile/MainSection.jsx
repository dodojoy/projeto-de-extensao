import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import MobileIcon from "../icons/MobileDev";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="Desenvolvedor mobile" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de desenvolvedor mobile" />
      </div>
      <MobileIcon />
    </div>
  );
}
