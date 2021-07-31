import React from 'react';
import InfoCard from '@components/info-card';
import Link from 'next/link';
import PriceCard from '@components/price-card';
import styles from './styles.module.scss';

const CollectionInfoCard = ({ collection }) => {
  return (
    <div className={styles.wrapper}>
      <InfoCard
        borderColor="#fcee18"
        boxShadow="rgba(252, 238, 24, 0.5)"
        mainColor="rgba(148, 140, 71, 0.47)"
      >
        <div className={styles.cardBodyWrapper}>
          <Link href={`/marketplace/rarity/${collection.id}`}>
            <a className={styles.link}>
              view collection
              <img src="./images/metaverse/yellow-right-arrow.png" />
            </a>
          </Link>
          <div className={styles.pricesWrapper}>
            <PriceCard mode={1} mainText={`${collection.sold} $MONA`} subText="total sold" />
            <PriceCard mode={1} mainText="$22447.97" subText="dollar equivalent" />
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default CollectionInfoCard;
