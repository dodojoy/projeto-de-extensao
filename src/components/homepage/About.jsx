import styles from "@/styles/About.module.css"

export default function About() {
    return (
        <div className={styles.About}>
            <div className={styles.textContainer}>
                <h2>Sobre</h2>
                <p>Em 2024, na cidade de Paulo Afonso, uma equipe de estudantes que cursavam o terceiro período de sistemas de informação no Centro Universitário do Rio São Francisco (UniRios) resolveu se unir em prol de um projeto, um guia de carreira para estudantes  do ramo de Tecnologia. Foi assim que surgiu a "Alan Turing Desenvolvedores Associados" (ATDA) - um grupo de pesquisa não oficial - que planeja, prototipa e produz sites como projetos pessoais.</p>
                <p>Nosso guia de carreira na área de tecnologia tem como principal objetivo ser um ponto de partida para aqueles que desejam ingressar ou progredir em suas carreiras no mundo da tecnologia, capacitando os visitantes a explorar diferentes opções de carreira, desenvolver habilidades relevantes e encontrar seu caminho em uma indústria que está na vanguarda da inovação.</p>
            </div>
        </div>
    )
}