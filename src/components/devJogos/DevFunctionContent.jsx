import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "DESENVOLVEDOR DE JOGOS"} ?</h2>
                <p>{textCarrer = "Desenvolvedores de jogos são os profissionais encarregados de criar jogos eletrônicos para uma variedade de plataformas, incluindo computadores, consoles e dispositivos móveis. Eles colaboram em equipes multidisciplinares, utilizando uma gama de tecnologias e ferramentas para conceber, desenvolver e lançar jogos. Suas responsabilidades abrangem desde o design de gameplay até a implementação de mecânicas de jogo, resolução de bugs e otimização de desempenho, enquanto estão sempre atentos às tendências da indústria e às preferências dos jogadores para garantir a criação de jogos envolventes e de alta qualidade."}</p>
            </div>
        </div>
    )
};
