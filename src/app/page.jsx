import styles from "./styles/index.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.andres}>
        <h1>My Work</h1>
        <p>PATINANDO TODOS LOS MARDITOS DIAS</p>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/ZCdWpndXhLg"
          title="portafolio"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </main>
    </>
  );
}
