import { useEffect, useState } from "react";
import MenuHeader from "./MenuHeader";
import styles from "@/styles/Header.module.css";
import containerStyles from "@/styles/Container.module.css";
import { useRouter } from "next/router";

export default function Header({ careersRef, aboutRef }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (section) => {
    if (router.pathname === "/") {
      if (section === "home") {
        // Redirecionar para a página inicial
        router.push("/");
      } else if (section === "careers" && careersRef && careersRef.current) {
        // Rolagem suave até a seção de carreiras
        scrollToRef(careersRef);
      } else if (section === "about" && aboutRef && aboutRef.current) {
        // Rolagem suave até a seção "Sobre"
        scrollToRef(aboutRef);
      }
    } else {
      window.location.href = `/#${section}`;
    }

    // Fechar o menu se estiver aberto
    if (menuIsOpen) {
      handleMenu();
    }
  };

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", updateMedia);

    updateMedia();

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.header} ${containerStyles.container}`}>
        <img src="/assets/logo.svg" alt="logo icon" onClick={() => router.push("/")} />
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
              <li onClick={() => router.push("/")}>home</li>
              <li onClick={() => handleNavigation("careers")}>carreiras</li>
              <li onClick={() => handleNavigation("about")}>sobre</li>
            </ul>
          </nav>
        )}
      </div>
      {menuIsOpen && !isDesktop && <MenuHeader handleMenu={handleMenu} aboutRef={aboutRef} careersRef={careersRef} />}
    </header>
  );
}
