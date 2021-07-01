import React, { useState } from 'react';
import ImageCard from '@components/image-card';
import DescriptionCard from '@components/description-card';
import styles from './styles.module.scss';

const ProductCard = ({ products, rarity }) => {
  const [selected, setSelected] = useState(0);
  const getLibonId = () => {
    if (rarity === 'Exclusive') {
      return 1;
    } else if (rarity === 'Semi-Rare') {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bodyWrapper}>
        <div className={styles.descriptionWrapper}>
          <DescriptionCard data={products[selected]} />
        </div>
        <div className={styles.imageCardWrapper}>
          <img
            src="./images/metaverse/left-arrow-pink.png"
            onClick={() => {
              if (selected > 0) setSelected(selected - 1);
            }}
          />
          <div className={styles.imageInnerWrapper}>
            <div className={styles.rarity}>{rarity.replace('-', ' ')}</div>
            <ImageCard libon={getLibonId()} data={products[selected]} />
          </div>
          <img
            src="./images/metaverse/right-arrow-pink.png"
            onClick={() => {
              if (selected < products.length - 1) setSelected(selected + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
