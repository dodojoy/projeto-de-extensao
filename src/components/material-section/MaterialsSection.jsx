import { useState } from 'react';
import styles from "@/styles/Material.module.css";

export default function Details({ summary, children }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div className={styles.MaterialSection}>
      <div className={styles.Section}>
        <summary className={`${styles.Summary} ${detailsOpen ? styles.OpenSummary : ''}`} onClick={toggleDetails}>
          {summary}
        </summary>
        {detailsOpen && <div className={styles.ConteudoMateriais}>{children}</div>}
        <button className={`${styles.Button} ${detailsOpen ? styles.Rotated : ''}`} onClick={toggleDetails}>
          <img src="/assets/vector.svg" alt="vetor" />
        </button>
      </div>
    </div>
  );
}
