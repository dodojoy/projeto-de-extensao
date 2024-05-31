import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialGames() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div className={styles.detailsContainer}>
        <Details summary="Materiais gratuitos">

          <div  className={styles.card}>
            <a href="https://cursoseducaweb.com.br/curso-de-gameficacao-design-de-jogos-e-jogos-como-objetos-de" target="_blank">
              <img src="/assets/banners/logo - educaweb.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Gameficação e Design de jogos Online</p>
            </div>
          </div>

          <div  className={styles.card}>
            <a href="https://www.learncafe.com/cursos/analista-de-jogos" target="_blank">
              <img src="assets/banners/logo - learncafe.svg" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Analista de Jogos</p>
            </div>
          </div>

          <div  className={styles.card}>
            <a href="https://www.iped.com.br/informatica/curso/android-basico" target="_blank">
              <img src="/assets/banners/logo - iped.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso  de Desenvolvimento de Games para Android - Básico</p>
            </div>
          </div>

          <div  className={styles.card}>
            <a href="https://cursa.app/curso-desenvolvimento-de-games-online-e-gratuito" target="_blank">
              <img src="assets/banners/logo - cursa.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Games com Blender</p>
            </div>
          </div>
          
        </Details>
        <Details summary="Materiais pagos">

          <div  className={styles.card}>
            <a href="https://cursos.dankicode.com/curso-dev-games?ref=V10070698I" target="_blank">
              <img src="assets/banners/logo - danki code.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso Desenvolvimento de Games Completo</p>
            </div>
          </div>

          <div  className={styles.card}>
            <a href="https://www.udemy.com/course/desenvolvimento-de-jogos-2d-para-android-com-unity-5/" target="_blank">
              <img src="/assets/banners/logo - game udemy.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Jogos 2d Com Unity + C# Curso Completo</p>
            </div>
          </div>

        </Details>
      </div>
    </section>
  );
}