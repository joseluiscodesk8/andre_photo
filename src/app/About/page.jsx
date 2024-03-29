'use client'

import { useRef, useContext, useEffect } from "react";
import LazyImage from "../utils/LazyImage";
import { useMenuContext } from "@/context/MenuContext";
import styles from "../styles/index.module.scss";
import { motion } from "framer-motion";

const About = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (menuOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`${styles.About} ${menuOpen ? styles.Opacity : ""}`}>
      <motion.section
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <main>
          <h1>I am Andres Niño.</h1>
          <picture>
            <LazyImage
              src="https://static.wixstatic.com/media/fac730_a956e050cfe643cca685344219170aa3~mv2.jpg/v1/crop/x_0,y_67,w_1200,h_664/fill/w_940,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/32430396_10156759793597923_9142966400782958592_n_edited.jpg"
              alt="image"
              width={150}
              height={200}
              loading="lazy"
            />
          </picture>
          <p>
            I am 35 years old and I live in Panama, I am a photographer and
            videographer who emerged from the skateboarding culture, with a
            variety of facets that can go from directing music videos to
            documentaries, portrait photography to weddings.
          </p>
        </main>
      </motion.section>
    </section>
  );
};

export default About;
