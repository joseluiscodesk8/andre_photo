import { useState, useRef, useContext, useEffect } from "react";
import { useMenuContext } from "@/context/MenuContext";
import Image from "next/image";
import styles from "../../styles/index.module.scss";

const Contact = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (menuOpen) {
      toggleMenu();
    }
  }, []);

  return (
    <section
      className={`${styles.Contact} ${menuOpen ? styles.Opacity : ""}`}
    >
      <main>
      <picture>
        <Image
          src="https://static.wixstatic.com/media/fac730_9fa537eb9a3247e4a65cc2d31f1b71fb~mv2.jpg/v1/fill/w_1189,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fac730_9fa537eb9a3247e4a65cc2d31f1b71fb~mv2.jpg"
          alt="image"
          width={150}
          height={200}
        />
      </picture>
      <form>
        <section>
          <label>Nombre</label>
          <input type="text" />
        </section>

        <section>
          <label>Teléfono</label>
          <input type="numero" />
        </section>

        <section className={styles.comentario}>
          <label>Cuentame Si Amas La Fotografia ?</label>
          <input type="text-area" />
        </section>

        <button type="submit">enviar</button>
      </form>
      </main>
    </section>
  );
};

export default Contact;
