import Head from "next/head";
import styles from "../styles/index.module.scss";
import { useMenuContext } from "../context/MenuContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { menuOpen } = useMenuContext();

  return (
    <>
      <Head>
        <title>Andresninop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.andres} ${menuOpen ? styles.layoutOpen : ""}`}>
        <h1>My Work</h1>
        <p>cada imagen es una narrativa visual que va más allá de las palabras, congelando instantes fugaces en el tiempo. Este arte permite explorar la belleza en los detalles cotidianos, revelar historias únicas y transmitir emociones profundas a través de composiciones visuales. la sensibilidad artística para ver el mundo de manera única y compartir esa perspectiva con los demás. </p>
        <section>
          <iframe
            src="https://www.youtube.com/embed/ZCdWpndXhLg"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </main>
    </>
  );
}
