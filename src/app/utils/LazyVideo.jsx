// LazyVideo.js
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyVideo = ({ url, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`lazy-video ${loaded ? 'loaded' : ''}`}>
      {loaded && (
        <section>
          <iframe
            src={url}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <h2>{title}</h2>
          <span></span>
        </section>
      )}
    </div>
  );
};

export default LazyVideo;
