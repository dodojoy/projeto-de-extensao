import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "ENGENHEIRO DE SOFTWARE"} ?</h2>
                <p>{textCarrer = "Um engenheiro de software é um profissional altamente qualificado que se concentra no desenvolvimento de software, desde a concepção deste até a sua implementação e manutenção. Esses profissionais aplicam conhecimentos em ciência da computação e princípios de engenharia para criar sistemas e aplicativos que atendam às necessidades dos usuários e das empresas, isso envolve trabalhar em equipes multidisciplinares, utilizar uma variedade de linguagens de programação e ferramentas, bem como estar sempre atualizado com as tendências e avanços tecnológicos para garantir a entrega de soluções eficientes e de alta qualidade."}</p>
            </div>
        </div>
    )
};

