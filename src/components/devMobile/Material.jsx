import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialDevMob() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div className={styles.detailsContainer}>
        <Details summary="Materiais gratuitos">
          
          <div className={styles.card}>
            <a href="https://www.primecursos.com.br/flutter-basico/" target="_blank">
              <img src="assets/banners/logo - prime cursos.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Flutter Básico</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <a href="https://www.iped.com.
            br/informatica/curso/desenvolvimento-de-app-android" target="_blank">
              <img src="assets/banners/logo - iped.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso Gratuito de Desenvolvimento de App Android</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <a href="https://cursa.app/
            curso-desenvolvimento-de-aplicativos-online-e-gratuito" target="_blank">
              <img src="assets/banners/logo - cursa.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>React Native Básico</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <a href="https://cursa.app
            /curso-desenvolvimento-de-aplicativos-online-e-gratuito" target="_blank">
              <img src="assets/banners/logo - cursa.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Flutter e Dart no desenvolvimento de Apps</p>
            </div>
          </div>
        </Details>
        
        <Details summary="Materiais pagos">
          
          <div className={styles.card}>
            <a href="https://www.udemy.com/course/crusoreactnative/?couponCode=2021PM25" target="_blank">
              <img src="/assets/banners/logo - react.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>React Native Criando aplicativos do zero ao avançado</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <a href="https://sujeitoprogramador.com/fabricadeaplicativo
            s/" target="_blank">
              <img src="/assets/banners/logo - sujeito programador.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Formação Fabrica de Aplicativos</p>
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
