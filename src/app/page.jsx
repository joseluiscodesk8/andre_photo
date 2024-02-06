'use client'
import { useContext, useEffect } from "react";
import { useMenuContext } from "../context/MenuContext";
import styles from "./styles/index.module.scss";

export default function Home() {

  const { menuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (menuOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className={`${styles.andres} ${menuOpen ? styles.Opacity : ""}`}>
        <h1>My Work</h1>
        <p>PATINANDO TODOS LOS MARDITOS DIAS</p>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/ZCdWpndXhLg"
          title="portafolio"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </main>
    </>
  );
}
