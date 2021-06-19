import React from 'react';
import ImageCard from '@components/image-card';
import DescriptionCard from '@components/description-card';
import styles from './styles.module.scss';

const ProductCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bodyWrapper}>
        <div className={styles.descriptionWrapper}>
          <DescriptionCard />
        </div>
        <div className={styles.imageCardWrapper}>
          <img src="./images/metaverse/left-arrow-pink.png" />
          <div className={styles.imageInnerWrapper}>
            <div className={styles.rarity}>semi rare</div>
            <ImageCard libon={1} />
          </div>
          <img src="./images/metaverse/right-arrow-pink.png" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
