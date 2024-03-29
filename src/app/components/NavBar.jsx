'use client'

import { useState } from "react";
import Link from "next/link";
import { useMenuContext } from "../../context/MenuContext";
import LazyImage from "../utils/LazyImage";
import styles from "../styles/index.module.scss";

const NavBar = () => {
  const { menuOpen, toggleMenu } = useMenuContext();
  return (
    <>
      <nav className={styles.menuPhoto}>
        <section>
          <LazyImage
            src="/logowhite1.png"
            alt="logo"
            width={100}
            height={80}
            loading="lazy"
          />

          <picture onClick={toggleMenu}>
            { menuOpen ? (
              <LazyImage
              src="/camara2.png"
              alt="icon"
              width={50}
              height={50}
              loading="lazy"
            />
            ) : (
              <LazyImage
              src="/camara.png"
              alt="icon"
              width={50}
              height={50}
              loading="lazy"
            />
            )}
          </picture>
        </section>

        <ul>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href="/">Home</Link>
          </li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href="/Photos">Photos</Link>
          </li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href="/Films">Films</Link>
          </li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href="/About">About</Link>
          </li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
