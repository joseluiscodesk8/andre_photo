import LazyImage from "./LazyImage";
import styles from "../../styles/index.module.scss";

const size = 20;

const Footer = () => {
  return (
    <footer className={styles.feet}>
      <section>
        <span>
          <LazyImage
            src="/insta.png"
            alt="icon"
            width={size}
            height={size}
            loading="lazy"
          />
          @_pauperrimo
        </span>
        <span>
          <LazyImage
            src="/letter.png"
            alt="icon"
            width={size}
            height={size}
            loading="lazy"
          />
          andres18860@gmail.com
        </span>
        <span>
          <LazyImage
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
