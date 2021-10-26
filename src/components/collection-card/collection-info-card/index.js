import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import InfoCard from '@components/info-card';
import PriceCard from '@components/price-card';

import { getExchangeRateETH, getMonaPerEth } from '@selectors/global.selectors';

import styles from './styles.module.scss';

const CollectionInfoCard = ({ collection }) => {
  const monaPerEth = useSelector(getMonaPerEth);
  const exchangeRate = useSelector(getExchangeRateETH);

  const getPrice = () => {
    return (
      <>
        {parseFloat(collection.sold).toFixed(2)} $MONA
        <span>
          {` `}(${(parseFloat(monaPerEth) * exchangeRate * collection.sold).toFixed(2)})
        </span>
      </>
    )
  }

  return (
    <div className={styles.wrapper}>
      <InfoCard>
        <div className={styles.cardBodyWrapper}>
          <Link href={`/marketplace/all/${collection.id}`}>
            <a className={styles.link}>
              <img src='/images/metaverse/gray_button2.png' />
              <span>view collection</span>
            </a>
          </Link>
          {/* {collection?.id !== '15' ? ( */}
          <div className={styles.pricesWrapper}>
            <PriceCard
              mode={0}
              mainText={getPrice()}
              subText="total sold"
            />
            {/* <PriceCard
              mode={0}
              mainText={`$${(parseFloat(monaPerEth) * exchangeRate * collection.sold).toFixed(2)}`}
              subText="dollar equivalent"
            /> */}
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
