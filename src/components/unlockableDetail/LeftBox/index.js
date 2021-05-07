import React, { useState } from 'react';
import styles from './styles.module.scss';

const LeftBox = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.activeImageWrapper}>
        <img src={images[activeImage].url} className={styles.activeImage} />
      </div>
      <div className={styles.previewImageWrapper}>
        {images.map((image, index) => (
          <img
            src={image.url}
            key={image.id}
            className={styles.previewImage}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftBox;
