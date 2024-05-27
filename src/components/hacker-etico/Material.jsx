import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function Material() {
  return (
    <div>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">
          <a href="https://cursoseducaweb.com.br/curso-de-inteligencia-de-ameacas-ciberneticas" target="_blank">
            <img src="assets/banners/logo - educaweb.svg" alt="Banner" />
          </a>
          <p>Curso de Inteligência de Ameaças Cibernéticas Online</p>
          <a href="https://www.ev.org.br/trilhas-de-conhecimento/seguranca-da-informacao" target="_blank">
            <img src="assets/banners/logo - fundação bradesco.svg" alt="Banner" />
          </a>
          <p>Curso de Segurança da Informação</p>
          <a href="https://www.eucapacito.com.br/cursos/cybersecurity-essentials/" target="_blank">
            <img src="assets/banners/logo - eu capacito.svg" alt="Banner" />
          </a>
          <p>Segurança Digital – Cybersecurity Essentials</p>
          <a href="https://www.eucapacito.com.br/cursos/cybersecurity-essentials/" target="_blank">
            <img src="assets/banners/logo - coursera.svg" alt="Banner" />
          </a>
          <p>Criptografia I</p>
        </Details>
        <Details summary="Materiais pagos">
          <a href="https://solyd.com.br/cursos/pentest-do-zero-ao-profissional-v2024/" target="_blank">
            <img src="assets/banners/logo - solyd.svg" alt="Banner" />
          </a>
          <p>Formação Pentest do zero ao profissional Sycp</p>
          <a href="https://desecsecurity.com/curso/novo-pentest-profissional" target="_blank">
            <img src="assets/banners/logo - desec security.svg" alt="Banner" />
          </a>
          <p>Formação Pentest Profissional </p>
        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </div>
  );
}
