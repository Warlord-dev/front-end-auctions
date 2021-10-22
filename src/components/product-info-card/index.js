import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import InfoCard from '@components/info-card';
import ImageCard from '@components/image-card';
import PriceCard from '@components/price-card';
import NewButton from '@components/buttons/newbutton';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getRarityId } from '@utils/helpers';
import { getExchangeRateETH, getMonaPerEth } from '@selectors/global.selectors';
import { useRouter } from 'next/router';

const ProductInfoCard = ({
  product,
  price,
  showCollectionName = false,
  showRarity = false,
  isAuction = false,
  sold,
}) => {
  const router = useRouter();
  const monaPerEth = useSelector(getMonaPerEth);
  const exchangeRate = useSelector(getExchangeRateETH);
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    if (product?.endTime && product.rarity === 'Exclusive') {
      getTimeFormat();
      setInterval(() => {
        getTimeFormat();
      }, 60000);
    }
  }, [product]);

  const getPrice = () => {
    return `${(price / 10 ** 18).toFixed(2)} MONA ($${(
      (parseFloat(monaPerEth) * exchangeRate * price) /
      10 ** 18
    ).toFixed(2)})`;
  };

  const getTimeFormat = () => {
    const timeStamp = Date.now();
    if (timeStamp > product.endTime * 1000) {
      return;
    } else {
      const offset = product.endTime * 1000 - timeStamp;
      const days = parseInt(offset / 86400000);
      const hours = parseInt((offset % 86400000) / 3600000);
      const minutes = parseInt((offset % 3600000) / 60000);
      setTime(`${`00${days}`.slice(-2)}:${`00${hours}`.slice(-2)}:${`00${minutes}`.slice(-2)}`);
    }
  };

  return (
    <div className={styles.productInfoCardwrapper}>
      <div className={styles.imageWrapper}>
        <ImageCard
          data={product}
          showDesigner
          showCollectionName={showCollectionName}
          showRarity={showRarity}
          showButton={false}
          isAuction={isAuction}
          withLink
        />
      </div>
      <div className={styles.infoCardWrapper}>
        <InfoCard borderColor="#9c28ff" boxShadow="rgba(197, 32, 129, 0.5)">
          {isAuction ? (
            <>
              <div className={styles.infoWrapper}>
                <PriceCard mainText={time} />
                <PriceCard mainText={getPrice()} />
              </div>
              <div className={styles.buttonWrapper}>
                <Link
                  href={`/product/${product?.id}/${getRarityId(product?.rarity)}/${
                    isAuction ? 1 : 0
                  }`}
                >
                  <a>
                    <NewButton disable={sold} text={sold ? 'Sold' : 'Place a Bid'} />
                  </a>
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.infoWrapper}>
              <PriceCard mainText={getPrice()} />
              <Link
                href={`/product/${product?.id}/${getRarityId(product?.rarity)}/${
                  isAuction ? 1 : 0
                }`}
              >
                <a>
                  <NewButton disable={sold} text={sold ? 'Sold out' : 'Buy Now'} />
                </a>
              </Link>
            </div>
          )}
        </InfoCard>
      </div>
    </div>
  );
};

export default ProductInfoCard;
