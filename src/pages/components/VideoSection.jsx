// VideoSection.js
import { useEffect } from 'react';

const VideoSection = () => {
  useEffect(() => {
    // Puedes agregar lógica específica para esta sección si es necesario
  }, []);

  return (
    <section>
      <iframe
        src="https://www.youtube.com/embed/ZCdWpndXhLg"
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default VideoSection;
