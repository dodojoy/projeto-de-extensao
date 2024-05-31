import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialManutencao() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div className={styles.detailsContainer}>
        <Details summary="Materiais gratuitos">

          <div className={styles.card}>
            <a href="https://www.youtube.com/watch?v=TEFqMM4yr4E&list=PLucm8g_ezqNrA8bbPdbsfgms_STyJgpX_&pp=iAQB" target="_blank">
              <img src="/assets/banners/logo - boson treinamentos.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Hardware</p>
            </div>
          </div>

            <div className={styles.card}>
              <a href="https://www.youtube.com/playlist?list=PLAp37wMSBouCBS51KUcd_yNBOzSd4Rby4  " target="_blank">
                <img src="/assets/banners/logo - curso manutenção.svg" alt="Banner" />
              </a>
              <div className={styles.cardTitle}>
                <p>Curso de Montagem e Manutenção</p>
              </div>
            </div>

          <div className={styles.card}>
            <a href="https://www.youtube.com/playlist?list=PLrhGs9QBzk74jE4AZDprI7ZV9c2qQ7QIZ" target="_blank">
              <img src="/assets/banners/logo - curso manutenção 2.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>CURSO GRÁTIS MANUTENÇÃO DE COMPUTADORES</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.youtube.com/playlist?list=PLSXPpZCNu-ejEcox8r9MtLmcn_PHAVsIw" target="_blank">
              <img src="assets/banners/logo - curso-hardware.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Hardware Completo Grátis</p>
            </div>
          </div>
          
        </Details>
        <Details summary="Materiais pagos">

          <div className={styles.card}>
            <a href="https://www.udemy.com/course/manutencao-computadores/?couponCode=2021PM25#instructor-1" target="_blank">
              <img src="assets/banners/logo - udemy hardware 1.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Montagem e Manutenção de Computador do ZERO</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.udemy.com/course/manutencao-express/?couponCode=2021PM25" target="_blank">
              <img src="/assets/banners/logo - udemy hardware 2.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Manutenção Express - Formatação e Reparo de Computadores</p>
            </div>
          </div>

        </Details>
      </div>
    </section>
  );
}