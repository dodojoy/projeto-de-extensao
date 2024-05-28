import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialDados() {
  return (
    <div>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">

          <a href="https://www.youtube.com/watch?v=bEs1OKnuSaA&list=PLpdAy0tYrnKwNCx_mgLdF2kCtWq7Mcx-P&pp=iAQB" target="_blank">
            <img src="assets/banners/logo - cientistadados.svg" alt="Banner" />
          </a>
          <p>Curso Básico de Ciência de Dados</p>

          <a href="https://www.youtube.com/watch?v=F94GPs-5fRM&list=PLpdAy0tYrnKwh54zFrSVyI54RMiUB2-it&pp=iAQB" target="_blank">
            <img src="/assets/banners/logo - ciência de dados.svg" alt="Banner" />
          </a>
          <p>Curso de Ciência de Dados</p>

          <a href="https://www.cursoemvideo.com/curso/mysql/" target="_blank">
            <img src="/assets/banners/logo - mysql.svg" alt="Banner" />
          </a>
          <p>Curso de MySQL</p>

          <a href="https://www.datascienceacademy.com.br/cursosgratuitos" target="_blank">
            <img src="assets/banners/logo - dsa.svg" alt="Banner" />
          </a>
          <p>Fundamentos de Engenharia de Dados</p>
          
        </Details>
        <Details summary="Materiais pagos">

          <a href="https://www.datascienceacademy.com.br/bundle/formacao-cientista-de-dados-4" target="_blank">
            <img src="assets/banners/logo - dsa.svg" alt="Banner" />
          </a>
          <p>Formação Cientista de Dados 4.0</p>

          <a href="https://asimov.academy/trilha-data-science-e-machine-learning/" target="_blank">
            <img src="/assets/banners/logo - asimov.svg" alt="Banner" />
          </a>
          <p>Trilha Data Science & Machine Learning</p>

        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </div>
  );
}