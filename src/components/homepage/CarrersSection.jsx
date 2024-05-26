import Cards from "@/components/global/Cards";
import styles from "@/styles/CarrersSection.module.css";
import containerStyles from "@/styles/Container.module.css";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function CarrersSection() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cardData = [
    {
      carrer: "DESENVOLVEDOR WEB",
      imgSrc: "/assets/logo-web.svg",
      alternative: "logo desenvolvedor web",
      pageUrl: "/desenvolvedor-web"
    },
    {
      carrer: "DESENVOLVEDOR MOBILE",
      imgSrc: "/assets/logo-mobile.svg",
      alternative: "logo desenvolvedor mobile",
      pageUrl: "/desenvolvedor-mobile"
    },
    {
      carrer: "CIENTISTA DE DADOS",
      imgSrc: "/assets/logo-data-science.svg",
      alternative: "logo cientista de dados",
      pageUrl: "/cientista-de-dados"
    },
    {
      carrer: "DESENVOLVEDOR FRONT-END",
      imgSrc: "/assets/logo-frontend.svg",
      alternative: "logo desenvolvedor front-end",
      pageUrl: "/front-end"
    },
    {
      carrer: "DESENVOLVEDOR BACK-END",
      imgSrc: "/assets/logo-backend.svg",
      alternative: "logo desenvolvedor back-end",
      pageUrl: "/back-end"
    },
    {
      carrer: "HACKER ÉTICO",
      imgSrc: "/assets/logo-ethical-hacker.svg",
      alternative: "logo hacker ético",
      pageUrl: "/hacker-etico"
    },
    {
      carrer: "ENGENHEIRO DE SOFTWARE",
      imgSrc: "/assets/logo-software-engineer.svg",
      alternative: "logo engenheiro de software",
      pageUrl: "/engenheiro-de-software"
    },
    {
      carrer: "DESENVOLVEDOR DE IA",
      imgSrc: "/assets/logo-AI-engineer.svg",
      alternative: "logo desenvolvedor de IA",
      pageUrl: "/desenvolvedor-ia"
    },
    {
      carrer: "MANUTENÇÃO DE HARDWARE",
      imgSrc: "/assets/logo-hardware-maintenance.svg",
      alternative: "logo manutenção de hardware",
      pageUrl: "/manutencao-de-hardware"
    },
    {
      carrer: "DESENVOLVEDOR DE JOGOS",
      imgSrc: "/assets/logo-games-developer.svg",
      alternative: "logo desenvolvedor de jogos",
      pageUrl: "/desenvolvedor-de-jogos"
    },
  ];

  const handleOnClick = (pageUrl) => {
    if (isClient) {
      router.push(pageUrl);
    }
  };

  return (
    <section className={styles.containersection}>
      <div className={`${styles.containersection} ${containerStyles.container}`}>
        <div className={styles.titles}>
          <h2>CONHEÇA AS PRINCIPAIS CARREIRAS NA ÁREA</h2>
          <p className={styles.subtitle}>DESCUBRA QUAL CARREIRA COMBINA COM VOCÊ</p>
        </div>
        <div className={styles.cardContainer}>
          {cardData.map((card) => (
            <Cards
              key={card.carrer}
              image={card.imgSrc}
              carrer={card.carrer}
              alternative={card.alternative}
              onClick={() => handleOnClick(card.pageUrl)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
