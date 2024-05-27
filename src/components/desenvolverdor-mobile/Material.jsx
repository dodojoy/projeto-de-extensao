import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialDevMob() {
  return (
    <div>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">
          <a href="https://www.primecursos.com.br/flutter-basico/" target="_blank">
            <img src="assets/banners/logo - prime cursos.svg" alt="Banner" />
          </a>
          <p>Curso de Flutter Básico</p>
          <a href="https://www.iped.com.br/informatica/curso/desenvolvimento-de-app-android" target="_blank">
            <img src="assets/banners/logo - iped.svg" alt="Banner" />
          </a>
          <p>Curso Gratuito de Desenvolvimento de App Android</p>
          <a href="https://cursa.app/curso-desenvolvimento-de-aplicativos-online-e-gratuito" target="_blank">
            <img src="assets/banners/logo - cursa.svg" alt="Banner" />
          </a>
          <p>React Native Básico</p>
          <a href="https://cursa.app/curso-desenvolvimento-de-aplicativos-online-e-gratuito" target="_blank">
            <img src="assets/banners/logo - cursa.svg" alt="Banner" />
          </a>
          <p>Flutter e Dart no desenvolvimento de Apps</p>
        </Details>
        <Details summary="Materiais pagos">
          <a href="https://www.udemy.com/course/crusoreactnative/?couponCode=2021PM25" target="_blank">
            <img src="/assets/banners/logo - react.svg" alt="Banner" />
          </a>
          <p>React Native Criando aplicativos do zero ao avançado</p>
          <a href="https://sujeitoprogramador.com/fabricadeaplicativos/" target="_blank">
            <img src="/assets/banners/logo - sujeito programador.svg" alt="Banner" />
          </a>
          <p>Formação Fabrica de Aplicativos</p>
        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </div>
  );
}
