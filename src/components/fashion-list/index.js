import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Container from '@components/container';
import FashionCard from '@components/fashion-card';

const FashionList = ({ fashionData }) => {
  const videoUrls = [
    '/images/metaverse/product_detail1.mp4',
    '/images/metaverse/product_detail3.mp4',
    '/images/metaverse/product_detail6.png',
    '/images/metaverse/product_detail3.mp4',
    '/images/metaverse/product_detail4.mp4',
    '/images/metaverse/product_detail5.mp4',
  ];

  return (
    <div>
      <section className={styles.fashionListSection}>
        {fashionData.map((item, index) => (
          <Container key={index}>
            <div className={styles.cardWrapper}>
              <FashionCard
                item={item}
                image={videoUrls[index]}
                leftImage={index % 2 == 0 ? true : false}
                rarity={'Semi-Rare'}
              />
            </div>
          </Container>
        ))}
      </section>
    </div>
  );
};

export default FashionList;
