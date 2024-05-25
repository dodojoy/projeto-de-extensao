import { useEffect, useState } from "react";
import MenuHeader from "./MenuHeader";
import styles from "@/styles/Header.module.css";
import containerStyles from "@/styles/Container.module.css";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    // Função para atualizar o estado isDesktop com base no tamanho da janela
    const updateMedia = () => {
      setIsDesktop(window.innerWidth > 768); // Você pode ajustar o valor do breakpoint conforme necessário
    };

    // Adicionar listener para o evento resize
    window.addEventListener("resize", updateMedia);

    // Chamar a função de atualização uma vez ao carregar o componente
    updateMedia();

    // Remover o listener ao desmontar o componente
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <header className={`${styles.header}`}>
       <div className={`${styles.header} ${containerStyles.container}`}>
        <img src="/assets/logo.svg" alt="logo icon" />
        {!isDesktop && (
          <img
            src="/assets/menuHamburguer.svg"
            alt="menu icon"
            onClick={handleMenu}
          />
        )}
        {isDesktop && (
          <nav>
            <ul className={styles.desktopMenu}>
              <li>home</li>
              <li>carreiras</li>
              <li>sobre</li>
            </ul>
          </nav>
        )}
      </div>
      {menuIsOpen && !isDesktop && <MenuHeader handleMenu={handleMenu} />}
    </header>
  );
}
