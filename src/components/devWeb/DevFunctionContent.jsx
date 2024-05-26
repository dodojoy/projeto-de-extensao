import styles from "@/styles/DevFunction.module.css"

export default function DevFunctionContent ({carrer, textCarrer}){
    return (
        <div className={styles.DevFuntionSection}>
            <div className={styles.DevFuntionContainer}>
                <h2>QUAL É A FUNÇÃO DO {carrer = "DESENVOLVEDOR WEB"} ?</h2>
                <p>{textCarrer = "Desenvolvedores web são os profissionais encarregados de criar e manter sites e aplicações web. Eles trabalham com uma variedade de tecnologias, como HTML, CSS e JavaScript, para desenvolver a interface do usuário e implementar funcionalidades interativas. Desenvolvedores web podem se especializar em diferentes áreas, como desenvolvimento front-end, que se concentra na parte visual e interativa de um site, ou desenvolvimento back-end, que lida com a lógica de negócios e o armazenamento de dados."}</p>
            </div>
        </div>
    )
};
