import React, { useState } from 'react';
import FashionImageCard from '@components/fashion-image-card';
import DescriptionCard from '@components/description-card';
import BannerButton from '@components/buttons/bannerbutton';
import styles from './styles.module.scss';
import { getRarityId } from '@utils/helpers';

const ProductCard = ({ products, rarity, leftImage, item }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.wrapper}>
      {leftImage &&
      <div className={styles.bodyWrapper}>
        <div className={styles.imageCardWrapper}>

          <div className={styles.imageInnerWrapper}>
            <FashionImageCard blue={false} libon={getRarityId(rarity)} data={products[selected]} />
          </div>
          
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.body}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>
                {item.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      {!leftImage &&
      <div className={styles.bodyWrapper2}>
        
        <div className={styles.descriptionWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.body}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
        </div>
        <div className={styles.imageCardWrapper}>

          <div className={styles.imageInnerWrapper}>
            <FashionImageCard blue={false} libon={getRarityId(rarity)} data={products[selected]} />
          </div>
          
        </div>
      </div>
      }
    </div>
  );
};

export default ProductCard;
