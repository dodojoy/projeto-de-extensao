import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialFrontEnd() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div className={styles.detailsContainer}>
        <Details summary="Materiais gratuitos">
          <div className={styles.card}>
            <a href="https://recode.org.br/desenvolvimento-web-basico/" target="_blank">
              <img src="assets/banners/logo - recode.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Desenvolvimento web (básico)</p>
            </div>
            </div>
            
            <div className={styles.card}>
              <a href="https://recode.org.br/desenvolvimento-web-intermediario/" target="_blank">
                <img src="assets/banners/logo - recode.svg" alt="Banner" />
              </a>
              <div className={styles.cardTitle}>
                <p>Desenvolvimento web (Intermediário)</p>
              </div>
            </div>

          <div className={styles.card}>
            <a href="https://www.ev.org.br/cursos/crie-um-site-simples-usando-html-css-e-javascript" target="_blank">
              <img src="assets/banners/logo - fundação bradesco.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Crie um site simples usando HTML, CSS e JavaScript</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.youtube.com/watch?v=j_lSgjAODos&list=PLMy95_4XE08MRsQvaSQnHzyooNevGTNtS" target="_blank">
              <img src="/assets/banners/logo - youtube.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Front-end - Curso</p>
            </div>
          </div>
          
        </Details>
        <Details summary="Materiais pagos">
          <div className={styles.card}>
            <a href="https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/?couponCode=2021PM25" target="_blank">
              <img src="assets/banners/logo - Formação Front-end.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Formação Front-end - HTML, CSS, JavaScript, React e +</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/?couponCode=2021PM25" target="_blank">
              <img src="/assets/banners/logo - Curso Web Frontend.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso Web Frontend Fundamentos HTML CSS JS + de 10 Projetos</p>
            </div>
          </div>

        </Details>
      </div>
    </section>
  );
}
