import Cards from "@/components/global/Cards";
import logoweb from "../../../public/assets/logo-web.svg"
import logomobile from "../../../public/assets/logo-mobile.svg";
import logodata from "../../../public/assets/logo-data-science.svg";
import logofrontend from "../../../public/assets/logo-frontend.svg";
import logobackend from "../../../public/assets/logo-backend.svg";
import logoehacker from "../../../public/assets/logo-ethical-hacker.svg";
import logosoftwareeng from "../../../public/assets/logo-software-engineer.svg";
import logoaidev from "../../../public/assets/logo-AI-engineer.svg";
import logohardware from "../../../public/assets/logo-hardware-maintenance.svg";
import logosogamesdev from "../../../public/assets/logo-games-developer.svg";
import styles from "@/styles/CarrersSection.module.css";

export default function CarrersSection (){
    return (
            <section className ={styles.containersection}>
                <div className={styles.titles}>
                    <h1>CONHEÇA AS PRINCIPAIS CARREIRAS NA ÁREA</h1>
                    <h2>DESCUBRA QUAL CARREIRA COMBINA COM VOCÊ</h2>
                </div>
                <div className={styles.item1}>
                    <Cards image={logoweb} alternative="Logo desenvolvedor web" carrer="DESENVOLVEDOR WEB"/>
                </div>
                <div className={styles.item2}>
                    <Cards image={logomobile} alternative="Logo desenvolvedor mobile" carrer="DESENVOLVEDOR MOBILE"/>
                </div>
                <div className={styles.item3}>
                    <Cards image={logodata} alternative="Logo cientista de dados" carrer="CIENTISTA DE DADOS"/>
                </div>
                <div className={styles.item4}>
                    <Cards image={logofrontend} alternative="Logo desenvolvedor front-end" carrer="DESENVOLVEDOR FRONT-END"/>
                </div>
                <div className={styles.item5}>
                    <Cards image={logobackend} alternative="Logo desenvolvedor back-end" carrer="DESENVOLVEDOR BACK-END"/>
                </div>
                <div className={styles.item6}>
                    <Cards image={logoehacker} alternative="Logo hacker ético" carrer="HACKER ÉTICO"/>
                </div>
                <div className={styles.item7}>
                    <Cards image={logosoftwareeng} alternative="Logo engenheiro de softaware" carrer="ENGENHEIRO DE SOFTWARE"/>
                </div>
                <div className={styles.item8}>
                    <Cards image={logoaidev} alternative="Logo desenvolvedor de IA" carrer="DESENVOLVEDOR DE IA"/>
                </div>
                <div className={styles.item9}>
                    <Cards image={logohardware} alternative="Logo manutenção de hardware" carrer="MANUTENÇÃO DE HARDWARE"/>
                </div>
                <div className={styles.item10}>
                    <Cards image={logosogamesdev} alternative="Logo desenvolvedor de jogos" carrer="DESENVOLVEDOR DE JOGOS"/>
                </div>
            </section>
    )
}