import React from 'react';
import styles from "@/styles/MainSection.module.css";

export default function StartButton({ careersRef }) {
  function handleStartClick() {
    if (careersRef && careersRef.current) {
      careersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <button className={styles.StartButton} onClick={handleStartClick}>Iniciar</button>
  );
}
