import styles from "@/styles/MainSection.module.css";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import ManutencaoIcon from "../icons/ManutencaoIcon";

export default function MainSection() {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="manutenção de hardware" />
        <Subtitulo subtitulo="Conheça mais sobre a carreira de manutenção de computadores" />
      </div>
      <ManutencaoIcon />
    </div>
  );
}
