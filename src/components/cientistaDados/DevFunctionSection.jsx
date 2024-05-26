import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "CIENTISTA DE DADOS"} ?</h2>
                <p>{textCarrer = "Um cientista de dados é um profissional especializado na análise e interpretação de grandes conjuntos de dados para identificar tendências, padrões e insights valiosos que podem ser utilizados para orientar decisões estratégicas e resolver problemas complexos em uma variedade de setores e áreas de negócio."}</p>
            </div>
        </div>
    )
};

