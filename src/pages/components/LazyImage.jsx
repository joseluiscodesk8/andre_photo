// LazyImage.js
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const LazyImage = ({ src, alt, width, height }) => {
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
    <picture ref={ref} className={`lazy-image ${loaded ? 'loaded' : ''}`}>
      {loaded && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
        />
      )}
    </picture>
  );
};

export default LazyImage;
