import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "TÉCNICO EM MANUTENÇÃO DE HARDWARE"} ?</h2>
                <p>{textCarrer = "Um técnico de hardware é alguém que, profissionalmente: executa configurações de sistemas operacionais, realiza limpezas e trocas de peças defeituosas em computadores, bem como realiza a conservação de tais equipamentos. Este profissional também realiza testes preventivos operacionais e de segurança nas redes de computadores. Um responsável pela parte de hardware também realiza atendimentos de manutenção, faz emissão de relatórios técnicos de visitas a servidores e laudos de atendimento de manutenção."}</p>
            </div>
        </div>
    )
};

