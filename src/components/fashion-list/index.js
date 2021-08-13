import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Container from '@components/container';
import FashionCard from '@components/fashion-card';

const FashionList = ({ fashionData, collections }) => {

  return (
    <div>
      <section className={styles.bgBotSection}>
        <img src="/images/metaverse/bgbot.png" className={styles.back} />
        <img src="/images/metaverse/glitch.png" className={styles.glitch} />
      </section>

      
      <section className={styles.fashionListSection}>
        <img src="/images/metaverse/webtitle.png" className={styles.webtitle} />
        {fashionData.map((item,index) => (
        <Container>
          <div className={styles.cardWrapper}>
            <FashionCard
              item={item}
              leftImage={(index%2 == 0)?true:false}
              products={collections}
              rarity={'Semi-Rare'}
            />
          </div>
        </Container>
        ))}
        <img src="/images/metaverse/glitch.png" className={styles.glitch} />
      </section>
      

      <section className={styles.viewAllSkinsSection}>
        <img src="/images/metaverse/bgbot.png" className={styles.back} />
      </section>
    </div>
  );
};

export default FashionList;
