import styles from "@/styles/Header.module.css";
import Link from "next/link";
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
          <Link href="/" className={styles.link} onClick={handleMenu}>
            home
          </Link>
        </li>
        <li>
          <Link href="/#careers" className={styles.link} onClick={() => handleNavigation(careersRef, "careers")}>
            carreiras
          </Link>
        </li>
        <li>
          <Link href="/#about" className={styles.link} onClick={() => handleNavigation(aboutRef, "about")}>
            sobre
          </Link>
        </li>
      </ul>
    </div>
  );
}
