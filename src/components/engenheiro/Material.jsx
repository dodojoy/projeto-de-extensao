import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialEngSof() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div div className={styles.detailsContainer}>
        <Details summary="Materiais gratuitos">
          <div className={styles.card}>
            <a href="https://cursoseducaweb.com.br/curso-de-programacao-de-software-basico" target="_blank">
              <img src="assets/banners/logo - educaweb.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Programação de Software Básico Online</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.learncafe.com/cursos/gestao-de-projetos-em-ti" target="_blank">
              <img src="assets/banners/logo - learncafe.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Gestão de Projetos em TI</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.youtube.com/watch?v=VcOeM2AD8Yk&list=PLucm8g_ezqNqEHHm_4Q3z7T-IsKVuWh8C&pp=iAQB" target="_blank">
              <img src="assets/banners/logo - boson treinamentos.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Playlist Engenharia de Software Bóson Treinamentos</p>
            </div>
          </div>

        </Details>
        <Details summary="Materiais pagos">
          <div className={styles.card}>
            <a href="https://www.udemy.com/course/desenvolvimento-de-software/?couponCode=LETSLEARNNOWPP" target="_blank">
              <img src="assets/banners/logo - udemy.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Desenvolvimento e Engenharia de Software (2024)</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.udemy.com/course/analise-de-requisitos-de-software/?couponCode=LETSLEARNNOWPP" target="_blank">
              <img src="assets/banners/logo- udemy-laranja.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Análise e Levantamento de Requisitos de Software</p>
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
