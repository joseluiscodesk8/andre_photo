'use client'

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { useMenuContext } from '@/context/MenuContext';
import Image from 'next/image';
import styles from '../styles/index.module.scss';
import LazyVideo from '../utils/LazyVideo';
import videos from './videos/videos';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { motion } from 'framer-motion';

const Films = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (menuOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className={`${styles.Videos} ${menuOpen ? styles.Opacity : ''}`}>
        <motion.section
          initial={{  opacity: 0 }}
          animate={{opacity: 1 }}
          exit={{  opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <main>
            <h1>All My Films</h1>

            <picture>
              <Image
                src="https://static.wixstatic.com/media/fac730_eef0f62c152c419f81608ac0ce550909~mv2.jpg/v1/fill/w_763,h_343,al_b,q_80,enc_auto/fac730_eef0f62c152c419f81608ac0ce550909~mv2.jpg"
                alt="img"
                width={150}
                height={100}
                loading="lazy"
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
                    <LazyVideo url={url.url} title={url.title} />
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

export default Films;
