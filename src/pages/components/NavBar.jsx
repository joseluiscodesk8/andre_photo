import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/index.module.scss";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(0);

  return (
    <>
      <nav className={styles.menuPhoto}>

        <section>
          <picture>
            <Image
              src="/camara.png"
              alt="icon"
              width={50}
              height={50}
              property
            />
          </picture>

          <picture onClick={() => setMenuOpen(!menuOpen)}>
            <Image
              src="/camara.png"
              alt="icon"
              width={50}
              height={50}
              property
            />
          </picture>
        </section>

        <ul>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>Home</li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>Photos</li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>Films</li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>About</li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
