import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import EngenheiroIcon from "../icons/EngenheiroIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="engenheiro de software" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de engenheiro de software" />
      </div>
      <EngenheiroIcon />
    </div>
  );
}
