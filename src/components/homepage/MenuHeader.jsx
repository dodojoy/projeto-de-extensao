import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MenuHeader({ handleMenu, careersRef, aboutRef }) {
  const router = useRouter();

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (ref, section) => {
    if (router.pathname === "/") {
      scrollToRef(ref);
    } else {
      window.location.href = `/#${section}`;
    }
    if (handleMenu) {
      handleMenu();
    }
  };

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const section = router.asPath.split("#")[1];
      if (section === "careers") {
        scrollToRef(careersRef);
      } else if (section === "about") {
        scrollToRef(aboutRef);
      }
    }
  }, [router.asPath, careersRef, aboutRef]);

  return (
    <div className={styles.menuOpen}>
      <img
        src="/assets/closeIcon.svg"
        alt="close icon"
        onClick={handleMenu}
        className={styles.closeBtn}
      />
      <ul className={styles.ul}>
        <li>
          <a href="/" className={styles.link}>
            home
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            onClick={() => handleNavigation(careersRef, "careers")}
          >
            carreiras
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            onClick={() => handleNavigation(aboutRef, "about")}
          >
            sobre
          </a>
        </li>
      </ul>
    </div>
  );
}
