import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialWeb() {
  return (
    <div>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">
          <a href="https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=132" target="_blank">
            <img src="assets/banners/logo - ifmg.svg" />
          </a>
          <p>Programação Web (Básico)</p>
          
          <a href="https://mais.ifmg.edu.br/maisifmg/enrol/index.php?id=139" target="_blank">
            <img src="assets/banners/logo - ifmg.svg" alt="Banner" />
          </a>
          <p>Programação Web (Avançado)</p>

          <a href="https://www.cursoemvideo.com/curso/html5-css3-modulo1/" target="_blank">
            <img src="assets/banners/logo - html css.svg" alt="Banner"/>
          </a>
          <p>Curso HTML5 e CSS3: módulo 1 de 5</p>

          <a href="https://potenciatech.com.br/play/curso/40727635" target="_blank">
            <img src="/assets/banners/logo - potencia tech.svg" alt="Banner"/>
          </a>
          <p>Desenvolvimento Web | Rocketseat</p>
          
        </Details>
        <Details summary="Materiais pagos">
          <a href="https://www.udemy.com/course/curso-desenvolvedor-web-completo/?couponCode=2021PM25" target="_blank">
            <img src="/assets/banners/logo - curso udemy.svg" />
          </a>
          <p>Curso Desenvolvedor Web Completo + 10 de projetos.</p>

          <a href="https://www.udemy.com/course/curso-desenvolvedor-web-full-stack-jr-completo/?couponCode=2021PM25" target="_blank">
            <img src="/assets/banners/logo - udemy.svg" alt="Banner" />
          </a>
          <p>Curso Desenvolvedor Web Full Stack para iniciantes</p>

        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </div>
  );
}
