import { useContext, useState } from "react";
import Image from "next/image";
import modelos from "../modelos/Modelos";
import { useMenuContext } from "../../context/MenuContext";
import styles from "../../styles/index.module.scss";

const Photos = () => {

  const { menuOpen } = useMenuContext();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % modelos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + modelos.length) % modelos.length
    );
  };

  const translateValue = -currentIndex * 100;

  return (
    <>
      <main className={`${styles.Photos} ${menuOpen ? styles.PhotosOpacity : ""}`}>
      <section className={styles.slider}>
        <button className={styles.prevBtn} onClick={prevSlide}>
          &lt;
        </button>
        <div
          className={styles.slideWrapper}
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {modelos.map((url, index) => (
            <picture
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <Image
                src={url}
                alt={`Slide ${index + 1}`}
                width={50}
                height={50}
              />
            </picture>
          ))}
        </div>
        <button className={styles.nextBtn} onClick={nextSlide}>
          &gt;
        </button>
      </section>
      </main>
    </>
  );
};

export default Photos;
