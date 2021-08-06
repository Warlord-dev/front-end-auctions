import React from 'react';
import InfoCard from '@components/info-card';
import Link from 'next/link';
import PriceCard from '@components/price-card';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getExchangeRateETH, getMonaPerEth } from '@selectors/global.selectors';

const CollectionInfoCard = ({ collection, isBundle = false }) => {
  const monaPerEth = useSelector(getMonaPerEth);
  const exchangeRate = useSelector(getExchangeRateETH);

  return (
    <div className={styles.wrapper}>
      <InfoCard
        borderColor="#fcee18"
        boxShadow="rgba(252, 238, 24, 0.5)"
        mainColor="rgba(148, 140, 71, 0.47)"
      >
        <div className={styles.cardBodyWrapper}>
          <Link href={!isBundle ? `/marketplace/rarity/${collection.id}` : `/product/${collection.productId}/3`}>
            <a className={styles.link}>
              view collection
              <img src="./images/metaverse/yellow-right-arrow.png" />
            </a>
          </Link>
          <div className={styles.pricesWrapper}>
            <PriceCard mode={1} mainText={`${collection.sold} $MONA`} subText="total sold" />
            <PriceCard mode={1} mainText={`$${(parseFloat(monaPerEth) * exchangeRate * collection.sold).toFixed(2)}`} subText="dollar equivalent" />
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default CollectionInfoCard;
