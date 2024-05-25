import { useState } from "react";
import MenuHeader from "./MenuHeader";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  
  return (
    <header className={styles.header}>
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
      {menuIsOpen && <MenuHeader handleMenu={handleMenu} />}
    </header>
  );
}
