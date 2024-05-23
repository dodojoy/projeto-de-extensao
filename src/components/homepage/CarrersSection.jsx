import Cards from "@/components/global/Cards";
import styles from "@/styles/CarrersSection.module.css";

export default function CarrersSection() {
  const cardData = [
    {
      carrer: "DESENVOLVEDOR WEB",
      imgSrc: "/assets/logo-web.svg",
      alternative: "logo desenvolvedor web",
    },
    {
      carrer: "DESENVOLVEDOR MOBILE",
      imgSrc: "/assets/logo-mobile.svg",
      alternative: "logo desenvolvedor mobile",
    },
    {
      carrer: "CIENTISTA DE DADOS",
      imgSrc: "/assets/logo-data-science.svg",
      alternative: "logo cientista de dados",
    },
    {
      carrer: "DESENVOLVEDOR FRONT-END",
      imgSrc: "/assets/logo-frontend.svg",
      alternative: "logo desenvolvedor front-end",
    },
    {
      carrer: "DESENVOLVEDOR BACK-END",
      imgSrc: "/assets/logo-backend.svg",
      alternative: "logo desenvolvedor back-end",
    },
    {
      carrer: "HACKER ÉTICO",
      imgSrc: "/assets/logo-ethical-hacker.svg",
      alternative: "logo hacker ético",
    },
    {
      carrer: "ENGENHEIRO DE SOFTWARE",
      imgSrc: "/assets/logo-software-engineer.svg",
      alternative: "logo engenheiro de software",
    },
    {
      carrer: "DESENVOLVEDOR DE IA",
      imgSrc: "/assets/logo-AI-engineer.svg",
      alternative: "logo desenvolvedor de IA",
    },
    {
      carrer: "MANUTENÇÃO DE HARDWARE",
      imgSrc: "/assets/logo-hardware-maintenance.svg",
      alternative: "logo manutenção de hardware",
    },
    {
      carrer: "DESENVOLVEDOR DE JOGOS",
      imgSrc: "/assets/logo-games-developer.svg",
      alternative: "logo desenvolvedor de jogos",
    },
  ];

  return (
    <section className={styles.containersection}>
        
      <div className={styles.titles}>
        <h2>CONHEÇA AS PRINCIPAIS CARREIRAS NA ÁREA</h2>
        <p>DESCUBRA QUAL CARREIRA COMBINA COM VOCÊ</p>
      </div>
      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <Cards
            image={card.imgSrc}
            carrer={card.carrer}
            alternative={card.alternative}
          />
        ))}
      </div>
      
    </section>
  );
}
