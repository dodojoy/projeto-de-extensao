import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialIa() {
  return (
    <div>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">
          <a href="https://www.iped.com.br/informatica/curso/arduino" target="_blank">
            <img src="/assets/banners/logo - iped (1).svg" alt="Banner" />
          </a>
          <p>Curso Gratuito de Arduino</p>
          <a href="https://www.iped.com.br/informatica/curso/machine-learning" target="_blank">
            <img src="/assets/banners/logo - iped (1).svg" alt="Banner" />
          </a>
          <p>Curso de Machine Learning</p>
          <a href="https://www.iped.com.br/informatica/curso/deeplearning.ai-tensorflow" target="_blank">
            <img src="/assets/banners/logo - iped (1).svg" alt="Banner" />
          </a>
          <p>Curso de DeepLearning.AI no TensorFlow</p>

          <a href="https://www.learncafe.com/cursos/introducao-a-ia-conceitos-fundamentais" target="_blank">
            <img src="assets/banners/logo - learncafe.svg" alt="Banner" />
          </a>
          <p>Introdução à IA: Conceitos Fundamentais</p>
          
        </Details>
        <Details summary="Materiais pagos">
          <a href="https://www.udemy.com/course/machine-learning-e-data-science-com-python-y/?couponCode=ST2MT43024" target="_blank">
            <img src="assets/banners/logo - udemy IA.svg" alt="Banner" />
          </a>
          <p>Machine Learning e Data Science com Python de A a Z</p>

          <a href="https://www.udemy.com/course/inteligencia-artificial-machine-learning-guia-completo/?couponCode=ST2MT43024" target="_blank">
            <img src="/assets/banners/logo - udemy IA2.svg" alt="Banner" />
          </a>
          <p>Inteligência Artificial e Machine Learning: O Guia Completo</p>
        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </div>
  );
}
