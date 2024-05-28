import Details from "../material-section/MaterialsSection";
import Titulo from "../titulos/Titulo";
import styles from "@/styles/Material.module.css";

export default function MaterialWeb() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div
        className={styles.detailsContainer}
      >
        <Details summary="Materiais gratuitos">
          <div className={styles.card}>
            <a
              href="https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=132"
              target="_blank"
            >
              <img src="assets/banners/logo - ifmg.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Programação Web (Básico)</p>
            </div>
          </div>

          <div className={styles.card}>
            <a
              href="https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=139"
              target="_blank"
            >
              <img src="assets/banners/logo - ifmg.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Programação Web (Avançado)</p>
            </div>
          </div>

          <div className={styles.card}>
            <a
              href="https://www.cursoemvideo.com/curso/html5-css3-modulo1/"
              target="_blank"
            >
              <img src="assets/banners/logo - html css.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso HTML5 e CSS3: módulo 1 de 5</p>
            </div>
          </div>

          <div className={styles.card}>
            <a
              href="https://potenciatech.com.br/play/curso/40727635"
              target="_blank"
            >
              <img
                src="/assets/banners/logo - potencia tech.svg"
                alt="Banner"
              />
            </a>
            <div className={styles.cardTitle}>
              <p>Desenvolvimento Web | Rocketseat</p>
            </div>
          </div>
        </Details>
        <Details summary="Materiais pagos">
          <div className={styles.card}>
            <a
              href="https://www.udemy.com/course/curso-desenvolvedor-web-completo/?couponCode=2021PM25"
              target="_blank"
            >
              <img src="/assets/banners/logo - curso udemy.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso Desenvolvedor Web Completo + 10 de projetos</p>
            </div>
          </div>

          <div className={styles.card}>
            <a
              href="https://www.udemy.com/course/curso-desenvolvedor-web-full-stack-jr-completo/?couponCode=2021PM25"
              target="_blank"
            >
              <img src="/assets/banners/logo - udemy.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso Desenvolvedor Web Full Stack para iniciantes</p>
            </div>
          </div>
        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </section>
  );
}
