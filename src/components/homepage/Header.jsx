import { useState } from "react";
import MenuHeader from "./MenuHeader";
import styles from "@/styles/Header.module.css";
import containerStyles from "@/styles/Container.module.css";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.header} ${containerStyles.container}`}>
        {!menuIsOpen && (
          <>
            <img src="/assets/logo.svg" alt="logo icon" />
            <img
              src="/assets/menuHamburguer.svg"
              alt="menu icon"
              onClick={handleMenu}
            />
          </>
        )}
      </div>
      {menuIsOpen && <MenuHeader handleMenu={handleMenu} />}
    </header>
  );
}
