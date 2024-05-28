import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function Material() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div className={styles.detailsContainer}>
        <Details summary="Materiais gratuitos">

          <div className={styles.card}>
            <a href="https://cursoseducaweb.com.br/curso-de-inteligencia-de-ameacas-ciberneticas" target="_blank">
              <img src="assets/banners/logo - educaweb.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Inteligência de Ameaças Cibernéticas Online</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.ev.org.br/trilhas-de-conhecimento/seguranca-da-informacao" target="_blank">
              <img src="assets/banners/logo - fundação bradesco.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Segurança da Informação</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.eucapacito.com.br/cursos/cybersecurity-essentials/" target="_blank">
              <img src="assets/banners/logo - eu capacito.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Segurança Digital – Cybersecurity Essentials</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.eucapacito.com.br/cursos/cybersecurity-essentials/" target="_blank">
              <img src="assets/banners/logo - coursera.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Criptografia I</p>
            </div>
          </div>

        </Details>

        <Details summary="Materiais pagos">
          <div className={styles.card}>
            <a href="https://solyd.com.br/cursos/pentest-do-zero-ao-profissional-v2024/" target="_blank">
              <img src="assets/banners/logo - solyd.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Formação Pentest do zero ao profissional Sycp</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://desecsecurity.com/curso/novo-pentest-profissional" target="_blank">
              <img src="assets/banners/logo - desec security.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Formação Pentest Profissional </p>
            </div>
          </div>

        </Details>

        <Details summary="Materiais extras">
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <p>Conteúdo dos materiais extras</p>
            </div>
          </div>
        </Details>
      </div>
    </section>
  );
}
