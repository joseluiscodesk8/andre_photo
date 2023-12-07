import Image from "next/image";
import styles from "../../styles/index.module.scss";

const size = 20;

const Footer = () => {
  return (
    <footer className={styles.feet}>
      <section>
        <span>
          <i>
            <Image src="/insta.png" alt="icon" width={size} height={size} />
          </i>
          @_pauperrimo
        </span>
        <span>
          <i>
            <Image src="/letter.png" alt="icon" width={size} height={size} />
          </i>
          andres18860@gmail.com
        </span>
        <span>
          <i>
            <Image src="/cell.png" alt="icon" width={size} height={size} />
          </i>
          +50761062712
        </span>
      </section>
    </footer>
  );
};

export default Footer;
