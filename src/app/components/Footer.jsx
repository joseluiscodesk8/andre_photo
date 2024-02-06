import Image from "next/image";
import styles from "../styles/index.module.scss";

const size = 20;

const Footer = () => {
  return (
    <footer className={styles.feet}>
      <section>
        <span>
          <Image
            src="/insta.png"
            alt="icon"
            width={size}
            height={size}
            loading="lazy"
          />
          @_pauperrimo
        </span>
        <span>
          <Image
            src="/letter.png"
            alt="icon"
            width={size}
            height={size}
            loading="lazy"
          />
          andres18860@gmail.com
        </span>
        <span>
          <Image
            src="/cell.png"
            alt="icon"
            width={size}
            height={size}
            loading="lazy"
          />
          +50761062712
        </span>
      </section>
    </footer>
  );
};

export default Footer;
