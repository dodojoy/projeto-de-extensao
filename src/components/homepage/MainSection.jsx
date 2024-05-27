import styles from "@/styles/MainSection.module.css";
import StartButton from "../button/StartButton";
import Titulo from "../titulos/Titulo";
import Subtitulo from "../titulos/Subtitulo";
import containerStyles from "@/styles/Container.module.css";

export default function MainSection({careersRef}) {
  return (
    <div className={styles.MainSection}>
      <div className={`${styles.textContainer}`}>
        <Titulo titulo="guia de carreira" />
        <Subtitulo subtitulo="Conheça as principais carreiras para atuar na área de tecnologia" />
      </div>
      <StartButton careersRef={careersRef} />
    </div>
  );
}
