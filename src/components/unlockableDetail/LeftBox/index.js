import React, { useState } from 'react';
import styles from './styles.module.scss';

const LeftBox = ({ details }) => {
  const [activeImage, setActiveImage] = useState(0);
  const image = details.url;

  const isVideo = (url) => {
    const convertedUrl = url.toLowerCase();
    if (convertedUrl.includes('mp4') || convertedUrl.includes('mov')) return true;
    return false;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.activeImageWrapper}>
        {isVideo(details.url[activeImage]) ? (
          <video
            loop
            autoPlay
            className={styles.activeImage}
            src={details.url[activeImage]}
          ></video>
        ) : (
          <img src={details.url[activeImage]} className={styles.activeImage} />
        )}
      </div>
      <div className={styles.previewImageWrapper}>
        {details.url.map((image, index) => (
          <>
            {index !== activeImage && (
              <>
                {isVideo(image) ? (
                  <video
                    loop
                    autoPlay
                    muted
                    className={styles.previewImage}
                    src={image}
                    onClick={() => setActiveImage(index)}
                  ></video>
                ) : (
                  <img
                    src={image}
                    key={`image-${index}`}
                    className={styles.previewImage}
                    onClick={() => setActiveImage(index)}
                  />
                )}
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default LeftBox;
