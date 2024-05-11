import styles from "@/styles/Header.module.css";

export default function MenuHeader({handleMenu}) {
  return (
    <>
      <div className={styles.menuOpen}>
        <img
          src="/assets/closeIcon.svg"
          alt="close icon"
          onClick={handleMenu}

          className={styles.closeBtn}
        />
        <ul className={styles.ul}>
          <li>home</li>
          <li>carreiras</li>
          <li>sobre</li>
        </ul>
      </div>
    </>
  );
}
