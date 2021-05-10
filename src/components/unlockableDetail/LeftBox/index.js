import React, { useState } from 'react';
import styles from './styles.module.scss';

const LeftBox = ({ details }) => {
  const [activeImage, setActiveImage] = useState(0);
  const image = details.url;

  return (
    <div className={styles.wrapper}>
      <div className={styles.activeImageWrapper}>
        <video loop autoPlay muted className={styles.activeImage} src={image}>
        </video>
        {/* <img src={image} className={styles.activeImage} /> */}
      </div>
      <div className={styles.previewImageWrapper}>
        {/* {images.map((image, index) => (
          <img
            src={image.url}
            key={image.id}
            className={styles.previewImage}
            onClick={() => setActiveImage(index)}
          />
        ))} */}
      </div>
    </div>
  );
};

export default LeftBox;
