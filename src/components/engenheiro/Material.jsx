import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialEngSof() {
  return (
    <>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">
          <a href="https://cursoseducaweb.com.br/curso-de-programacao-de-software-basico" target="_blank">
            <img src="assets/banners/logo - educaweb.svg" alt="Banner" />
          </a>
          <p>Curso de Programação de Software Básico Online</p>
          
          <a href="https://www.learncafe.com/cursos/gestao-de-projetos-em-ti" target="_blank">
            <img src="assets/banners/logo - learncafe.svg" alt="Banner" />
          </a>
          <p>Gestão de Projetos em TI</p>

          <a href="https://www.youtube.com/watch?v=VcOeM2AD8Yk&list=PLucm8g_ezqNqEHHm_4Q3z7T-IsKVuWh8C&pp=iAQB" target="_blank">
            <img src="assets/banners/logo - boson treinamentos.svg" />
          </a>
          <p>Playlist Engenharia de Software Bóson Treinamentos</p>
          
        </Details>
        <Details summary="Materiais pagos">
          <a href="https://www.udemy.com/course/desenvolvimento-de-software/?couponCode=LETSLEARNNOWPP" target="_blank">
            <img src="assets/banners/logo - udemy.svg" alt="Banner" />
          </a>
          <p>Desenvolvimento e Engenharia de Software (2024)</p>

          <a href="https://www.udemy.com/course/analise-de-requisitos-de-software/?couponCode=LETSLEARNNOWPP" target="_blank">
            <img src="assets/banners/logo- udemy-laranja.svg" alt="Banner" />
          </a>
          <p>Análise e Levantamento de Requisitos de Software</p>

        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </>
  );
}
