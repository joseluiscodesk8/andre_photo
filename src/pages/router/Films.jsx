import { useRef, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { useMenuContext } from "@/context/MenuContext";
import Image from "next/image";
import videos from "../modelos/videos";
import styles from "../../styles/index.module.scss";
import 'swiper/css';
import 'swiper/css/effect-creative';

const Films = () => {
  const { menuOpen } = useMenuContext();

  return (
    <>
      <section
        className={`${styles.Videos} ${menuOpen ? styles.VideosOpacity : ""}`}
      >
        <main>
          <h1>All My Films</h1>

          <picture>
            <Image
              src="https://static.wixstatic.com/media/fac730_eef0f62c152c419f81608ac0ce550909~mv2.jpg/v1/fill/w_763,h_343,al_b,q_80,enc_auto/fac730_eef0f62c152c419f81608ac0ce550909~mv2.jpg"
              alt="img"
              width={150}
              height={100}
            />
          </picture>

          <section>
            <Swiper
             grabCursor={true}
             effect={'creative'}
             creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-120%', 0, -500],
              },
              next: {
                shadow: true,
                translate: ['120%', 0, -500],
              },
            }}
             modules={[EffectCreative]}
             className="mySwiper"
            >
            {videos.map((url, index) => (
             <SwiperSlide key={index}>
               <section>
                <iframe
                  src={url.url}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h2>{url.tittle}</h2>
                <span></span>
              </section>
             </SwiperSlide>
            ))}
            </Swiper>
          </section>
        </main>
      </section>
    </>
  );
};

export default Films;
