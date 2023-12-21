import { useState, useRef, useContext, useEffect } from "react";
import { useMenuContext } from "@/context/MenuContext";
import Image from "next/image";
import styles from "../../styles/index.module.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (menuOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={`${styles.Contact} ${menuOpen ? styles.Opacity : ""}`}
    >
      <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      >
      <main>
      <section>
      <picture>
        <Image
          src="https://static.wixstatic.com/media/fac730_9fa537eb9a3247e4a65cc2d31f1b71fb~mv2.jpg/v1/fill/w_1189,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fac730_9fa537eb9a3247e4a65cc2d31f1b71fb~mv2.jpg"
          alt="image"
          width={150}
          height={200}
        />
      </picture>
      </section>
      <section>
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
      </section>
      </main>
      </motion.section>
    </section>
  );
};

export default Contact;
