import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";

import FrontIcon from "../icons/FrontIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="Desenvolvedor front-end" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de desenvolvedor front-end" />
      </div>
      <FrontIcon />
    </div>
  );
}
