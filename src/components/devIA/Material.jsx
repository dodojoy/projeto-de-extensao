import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialIa() {
  return (
    <section className={styles.materialContainer}>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div className={styles.detailsContainer}>
        <Details summary="Materiais gratuitos">
          <div className={styles.card}>
            <a href="https://www.iped.com.br/informatica/curso/arduino" target="_blank">
              <img src="/assets/banners/logo - iped (1).svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso Gratuito de Arduino</p>
            </div>
          </div>
          <div className={styles.card}>
            <a href="https://www.iped.com.br/informatica/curso/machine-learning" target="_blank">
              <img src="/assets/banners/logo - iped (1).svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de Machine Learning</p>
            </div>
          </div>
          <div className={styles.card}>
            <a href="https://www.iped.com.br/informatica/curso/deeplearning.ai-tensorflow" target="_blank">
              <img src="/assets/banners/logo - iped (1).svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Curso de DeepLearning.AI no TensorFlow</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.learncafe.com/cursos/introducao-a-ia-conceitos-fundamentais" target="_blank">
              <img src="assets/banners/logo - learncafe.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Introdução à IA: Conceitos Fundamentais</p>
            </div>
          </div>
          
        </Details>
        <Details summary="Materiais pagos">
          <div className={styles.card}>
            <a href="https://www.udemy.com/course/machine-learning-e-data-science-com-python-y/?couponCode=ST2MT43024" target="_blank">
              <img src="assets/banners/logo - udemy IA.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Machine Learning e Data Science com Python de A a Z</p>
            </div>
          </div>

          <div className={styles.card}>
            <a href="https://www.udemy.com/course/inteligencia-artificial-machine-learning-guia-completo/?couponCode=ST2MT43024" target="_blank">
              <img src="/assets/banners/logo - udemy IA2.svg" alt="Banner" />
            </a>
            <div className={styles.cardTitle}>
              <p>Inteligência Artificial e Machine Learning: O Guia Completo</p>
            </div>
          </div>
        </Details>
      </div>
    </section>
  );
}
