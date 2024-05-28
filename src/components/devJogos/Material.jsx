import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialGames() {
  return (
    <div>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">

          <a href="https://cursoseducaweb.com.br/curso-de-gameficacao-design-de-jogos-e-jogos-como-objetos-de" target="_blank">
            <img src="/assets/banners/logo - educaweb.svg" alt="Banner" />
          </a>
          <p>Curso de Gameficação e Design de jogos Online</p>

          <a href="https://www.learncafe.com/cursos/analista-de-jogos" target="_blank">
            <img src="assets/banners/logo - learncafe.svg" />
          </a>
          <p>Curso de Analista de Jogos</p>

          <a href="https://www.iped.com.br/informatica/curso/android-basico" target="_blank">
            <img src="/assets/banners/logo - iped.svg" alt="Banner" />
          </a>
          <p>Curso  de Desenvolvimento de Games para Android - Básico</p>

          <a href="https://cursa.app/curso-desenvolvimento-de-games-online-e-gratuito" target="_blank">
            <img src="assets/banners/logo - cursa.svg" alt="Banner" />
          </a>
          <p>Games com Blender</p>
          
        </Details>
        <Details summary="Materiais pagos">

          <a href="https://cursos.dankicode.com/curso-dev-games?ref=V10070698I" target="_blank">
            <img src="assets/banners/logo - danki code.svg" alt="Banner" />
          </a>
          <p>Curso Desenvolvimento de Games Completo</p>

          <a href="https://www.udemy.com/course/desenvolvimento-de-jogos-2d-para-android-com-unity-5/" target="_blank">
            <img src="/assets/banners/logo - game udemy.svg" alt="Banner" />
          </a>
          <p>Jogos 2d Com Unity + C# Curso Completo</p>

        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </div>
  );
}