import React, { useState } from 'react';
import BannerCard from '@components/banner-card';
import DescriptionCard from '@components/description-card';
import BannerButton from '@components/buttons/bannerbutton';
import styles from './styles.module.scss';
import { getRarityId } from '@utils/helpers';

const ProductCard = ({ products, rarity }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bodyWrapper}>
        <div className={styles.descriptionWrapper}>
          <img src="/images/metaverse/physical-fashion.png" className={styles.heroImage} />
          <BannerButton text='SHOP physical WEB3 FASHION'/>
        </div>
        <div className={styles.imageCardWrapper}>
          <img
            src="./images/metaverse/left-arrow-blue.png"
            onClick={() => {
              if (selected > 0) setSelected(selected - 1);
            }}
          />
          <div className={styles.imageInnerWrapper}>
            <BannerCard libon={getRarityId(rarity)} data={products[selected]} />
          </div>
          <img
            src="./images/metaverse/right-arrow-blue.png"
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
