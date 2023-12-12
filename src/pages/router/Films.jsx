import { useContext } from "react";
import { useMenuContext } from "@/context/MenuContext";
import Image from "next/image";
import videos from "../modelos/videos";
import styles from "../../styles/index.module.scss";

const Films = () => {
  const { menuOpen } = useMenuContext();

  return (
    <>
      <section
        className={`${styles.Videos} ${menuOpen ? styles.VideosOpacity : ""}`}
      >
        <main>
          <h1>All My Films</h1>

          <picture>
            <Image
              src="https://static.wixstatic.com/media/fac730_eef0f62c152c419f81608ac0ce550909~mv2.jpg/v1/fill/w_763,h_343,al_b,q_80,enc_auto/fac730_eef0f62c152c419f81608ac0ce550909~mv2.jpg"
              alt="img"
              width={150}
              height={100}
            />
          </picture>

          <section>
            {videos.map((url, index) => (
              <div key={index}>
                <iframe
                  src={url.url}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h2>{url.tittle}</h2>
              </div>
            ))}
          </section>
        </main>
      </section>
    </>
  );
};

export default Films;
