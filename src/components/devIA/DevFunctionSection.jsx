import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "DESENVOLVEDOR DE INTELIGÊNCIA ARTIFICIAL"} ?</h2>
                <p>{textCarrer = "Os desenvolvedores de IA trabalham em uma variedade de áreas, incluindo reconhecimento de padrões, processamento de linguagem natural, visão computacional e aprendizado de máquina. Eles coletam e analisam grandes conjuntos de dados, desenvolvem e treinam algoritmos de aprendizado de máquina e aprimoram continuamente os seus modelos para melhorar contínuamente sua precisão e desempenho."}</p>
            </div>
        </div>
    )
};

