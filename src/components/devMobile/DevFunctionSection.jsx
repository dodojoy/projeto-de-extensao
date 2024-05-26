import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "DESENVOLVEDOR MOBILE"} ?</h2>
                <p>{textCarrer = "O desenvolvedor mobile é um profissional especializado em criar aplicativos voltados a dispositivos móveis, tais como smartphones e tablets. Eles podem trabalhar em uma variedade de plataformas, como iOS e Android, utilizando linguagens de programação específicas, como Swift ou Objective-C para iOS e Java ou Kotlin para Android. O trabalho deste profissional envolve projetar a interface do usuário, implementar funcionalidades específicas e testar o aplicativo para garantir qualidade deste, bem como também pode buscar formas de otimizar o desempenho para diferentes dispositivos."}</p>
            </div>
        </div>
    )
};

