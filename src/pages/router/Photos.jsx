import Image from "next/image";
import modelos from "../modelos/Modelos";
import styles from "../../styles/index.module.scss";

const Photos = () => {
  return (
    <>
      <section className={styles.photos}>
        {modelos.map((url, index) => (
          <picture key={index}>
            <Image src={url} alt={`Image ${index}`} width={350} height={400} />
          </picture>
        ))}
      </section>
    </>
  );
};

export default Photos;
