import { useContext, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import modelos from "../modelos/Modelos";
import { useMenuContext } from "../../context/MenuContext";
import styles from "../../styles/index.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";

const Photos = () => {
  const { menuOpen } = useMenuContext();

  return (
    <>
      <section className={`${styles.Photos} ${menuOpen ? styles.Opacity : ""}`}>
      <h1 className={styles.tittle}>Photos Briefcase</h1>
      <main>
        <section>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            spaceBetween={15} // Espacio entre las tarjetas
            slidesPerView={1} // Número de tarjetas visibles
          >
            {modelos.map((url, index) => (
              <SwiperSlide key={index}>
                <picture>
                  <Image
                    src={url}
                    alt={`Slide ${index + 1}`}
                    width={250}
                    height={350}
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
      </section>
    </>
  );
};

export default Photos;
