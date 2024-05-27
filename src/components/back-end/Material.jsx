import Details from "../material-section/MaterialsSection";
import Titulo from '../titulos/Titulo';
import styles from '@/styles/Material.module.css';

export default function MaterialBackEnd() {
  return (
    <div>
      <div className={styles.Titulo}>
        <Titulo titulo="Materiais" />
      </div>
      <div>
        <Details summary="Materiais gratuitos">
          <a href="https://youtu.be/kj1owVJWqSw?feature=shared" target="_blank">
            <img src="assets/banners/logo-dartbackend.svg" />
          </a>
          <p>Curso Backend</p>
          
          <a href="https://cursos.timtec.com.br/course/backend/intro" target="_blank">
            <img src="assets/banners/logo - instituto tim.svg" alt="Banner" />
          </a>
          <p>Desenvolvimento de Backend</p>

          <a href="https://betrybe.com/cursos/logica-de-programacao?utm_term=curso%20programa%C3%A7%C3%A3o%20online&utm_campaign=%5BAJ%5D%5BCurso%5DInteligencia-Artificial-na-pratica&utm_source=adwords&utm_medium=ppc&hsa_acc=1466424558&hsa_cam=21242695868&hsa_grp=161718719437&hsa_ad=697945787982&hsa_src=g&hsa_tgt=kwd-317090363675&hsa_kw=curso%20programa%C3%A7%C3%A3o%20online&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpS5Nwcmb2NY0wDJzl2kYGaWj_cDRbeVptzp9VEZeIJsdwcpwix_j_oaAhFsEALw_wcB" target="_blank">
            <img src="assets/banners/logo-trybe.svg" alt="Banner"/>
          </a>
          <p>Lógica de Programação</p>

          <a href="https://www.cursoemvideo.com/curso/java-poo/" target="_blank">
            <img src="assets/banners/logo - javapoo.svg" alt="Banner"/>
          </a>
          <p>Curso de Java POO</p>
          
        </Details>
        <Details summary="Materiais pagos">
          <a href="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=2021PM25" target="_blank">
            <img src="/assets/banners/logo-back.svg" />
          </a>
          <p>Curso de JavaScript e TypeScript do básico ao avançado JS/TS</p>

          <a href="https://www.udemy.com/course/desenvolvedor-back-end-com-c/?couponCode=2021PM25" target="_blank">
            <img src="assets/banners/logo-c.svg" alt="Banner" />
          </a>
          <p>Desenvolvedor Back-End com C#</p>

        </Details>
        <Details summary="Materiais extras">
          <p>Conteúdo dos materiais extras</p>
        </Details>
      </div>
    </div>
  );
}
