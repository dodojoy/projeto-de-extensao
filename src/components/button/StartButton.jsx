import React from 'react';
import styles from "@/styles/MainSection.module.css";

export default function StartButton() {
  function handleStartClick() {
   
    const element = document.getElementById('DESENVOLVEDOR BACK-END');

    element.scrollIntoView({ behavior: 'smooth' });
  
    element.classList.add(styles.animate);
  }

  return (
    <button className={styles.StartButton} onClick={handleStartClick}>Iniciar</button>
  );
}
