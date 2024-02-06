import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.menuPhoto}>
        <section>
          <Image
            src="/logowhite1.png"
            alt="logo"
            width={100}
            height={80}
            loading="lazy"
          />

          <picture>
            <Image
              src="/camara2.png"
              alt="icon"
              width={50}
              height={50}
              loading="lazy"
            />
          </picture>
        </section>

        <ul>
          <li className={styles.menuOpen}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/router/Photos">Photos</Link>
          </li>
          <li>
            <Link href="/router/Films">Films</Link>
          </li>
          <li>
            <Link href="/router/About">About</Link>
          </li>
          <li>
            <Link href="/router/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
