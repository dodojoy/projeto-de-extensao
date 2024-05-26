import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "DESENVOLVEDOR BACK-END"} ?</h2>
                <p>{textCarrer = "O desenvolvedor back-end é o profissional responsável por criar e manter a parte do sistema - ou aplicação - que lida com a lógica de negócio, o processamento de dados bem como com a interação junto aos bancos de dados e servidores. Em resumo, um desenvolvedor back-end é alguém que se concentra na parte do sistema que funciona “nos bastidores”, ou seja, que não é visível aos usuários finais."}</p>
            </div>
        </div>
    )
};
