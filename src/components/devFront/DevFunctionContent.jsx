import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "DESENVOLVEDOR FRONT-END"} ?</h2>
                <p>{textCarrer = "Desenvolvedores front-end são os profissionais responsáveis por fazer com que os sites e aplicativos tenham uma boa aparência. Senhores da estética e da usabilidade, eles pegam designs e os transformam em código usando HTML, CSS e JavaScript, tudo isso com o objetivo de tornar a experiência do usuário incrível. Tais profissionais podem se concentrar em frameworks como React ou Angular ao longo de sua carreira, mantendo-se atualizados com as novas tecnologias."}</p>
            </div>
        </div>
    )
};
