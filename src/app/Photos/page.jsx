'use client'

import { useContext, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import modelos from "./modelos/Modelos";
import { useMenuContext } from "../../context/MenuContext";
import styles from "../styles/index.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";

const Photos = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (menuOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className={`${styles.Photos} ${menuOpen ? styles.Opacity : ""}`}>
        <motion.section
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className={styles.tittle}>Photos Briefcase</h1>
          <main>
            <section>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                spaceBetween={15}
                slidesPerView={1}
              >
                {modelos.map((url, index) => (
                  <SwiperSlide key={index}>
                    <picture>
                      <Image
                        src={url}
                        alt="image"
                        width={350}
                        height={400}
                        loading="lazy"
                      />
                    </picture>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </main>
        </motion.section>
      </section>
    </>
  );
};

export default Photos;