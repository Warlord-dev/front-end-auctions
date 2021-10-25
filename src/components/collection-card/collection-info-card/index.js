import React from 'react';
import InfoCard from '@components/info-card';
import Link from 'next/link';
import PriceCard from '@components/price-card';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getExchangeRateETH, getMonaPerEth } from '@selectors/global.selectors';

const CollectionInfoCard = ({ collection }) => {
  const monaPerEth = useSelector(getMonaPerEth);
  const exchangeRate = useSelector(getExchangeRateETH);

  return (
    <div className={styles.wrapper}>
      <InfoCard>
        <div className={styles.cardBodyWrapper}>
          <Link href={`/marketplace/all/${collection.id}`}>
            <a className={styles.link}>
              view collection
              <img src="./images/metaverse/right-arrow-pink.png" />
            </a>
          </Link>
          {/* {collection?.id !== '15' ? ( */}
          <div className={styles.pricesWrapper}>
            <PriceCard
              mode={0}
              mainText={`${parseFloat(collection.sold).toFixed(2)} $MONA`}
              subText="total sold"
            />
            <PriceCard
              mode={0}
              mainText={`$${(parseFloat(monaPerEth) * exchangeRate * collection.sold).toFixed(2)}`}
              subText="dollar equivalent"
            />
          </div>
          {/* ) : (
            <div className={styles.lookText}>LOOK Hackathon</div>
          )} */}
        </div>
      </InfoCard>
    </div>
  );
};

export default CollectionInfoCard;
