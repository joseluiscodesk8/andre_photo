import LazyImage from "./LazyImage";
import styles from "../../styles/index.module.scss";

const size = 20;

const Footer = () => {
  return (
    <footer className={styles.feet}>
      <section>
        <span>
          <i>
            <LazyImage src="/insta.png" alt="icon" width={size} height={size} />
          </i>
          @_pauperrimo
        </span>
        <span>
          <i>
            <LazyImage src="/letter.png" alt="icon" width={size} height={size} />
          </i>
          andres18860@gmail.com
        </span>
        <span>
          <i>
            <LazyImage src="/cell.png" alt="icon" width={size} height={size} />
          </i>
          +50761062712
        </span>
      </section>
    </footer>
  );
};

export default Footer;
