import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "HACKER ÉTICO"} ?</h2>
                <p>{textCarrer = "Um hacker ético tem como objetivo melhorar a segurança de um sistema, identificando e tratando as vulnerabilidades presentes neste que podem ser exploradas por hackers mal-intencionados. Sua função se baseia em testar colocar à prova a segurança do sistema, simulando ataques. O serviço desses profissionais é fundamental na prevenção de futuros ataques, pois é a partir da identificação de possíveis vulnerabilidades - realizada por estes profissinais - que se pode reduzir drasticamente as chances de invasão a um sistema."}</p>
            </div>
        </div>
    )
};
