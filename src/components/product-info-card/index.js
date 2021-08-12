import React, { useEffect, useState } from 'react';
import InfoCard from '@components/info-card';
import ImageCard from '@components/image-card';
import PriceCard from '@components/price-card';
import NewButton from '@components/buttons/newbutton';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getRarityId } from '@utils/helpers';
import { getExchangeRateETH, getMonaPerEth } from '@selectors/global.selectors';
import { useRouter } from 'next/router';

const ProductInfoCard = ({ product, price, showCollectionName = false, showRarity = false, }) => {
  const router = useRouter();
  const monaPerEth = useSelector(getMonaPerEth);
  const exchangeRate = useSelector(getExchangeRateETH);
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    if (product?.endTime && product.rarity === 'Exclusive') {
      setInterval(() => {
        getTimeFormat();
      }, 60000);
    }
  }, [product]);

  const onBuyNow = () => {
    router.push(`/product/${product?.id}/${getRarityId(product?.rarity)}`)
  };

  const getPrice = () => {
    return `${price / 10 ** 18} MONA ($${(parseFloat(monaPerEth) * exchangeRate * price / 10 ** 18).toFixed(2)})`
  }

  const getTimeFormat = () => {
    const timeStamp = Date.now();
    if (timeStamp > product.endTime * 1000) {
      return ;
    } else {
      const offset = - (product.endTime * 1000 - timeStamp);
      const days = parseInt(offset / 86400000);
      const hours = parseInt((offset % 86400000) / 3600000);
      const minutes = parseInt((offset % 3600000) / 60000);
      setTime(`${`00${days}`.slice(-2)}:${`00${hours}`.slice(-2)}:${`00${minutes}`.slice(-2)}`);
      setHours(`00${hours}`.slice(-2));
      setMinutes(`00${minutes}`.slice(-2));
    }
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <ImageCard data={product} 
          showDesigner 
          showCollectionName={showCollectionName} 
          showRarity={showRarity}
          showButton={false} />
      </div>
      <div className={styles.infoCardWrapper}>
        <InfoCard borderColor="#9c28ff" boxShadow="rgba(197, 32, 129, 0.5)">
          {getRarityId(product?.rarity) === 1 ? (
            <>
              <div className={styles.infoWrapper}>
                <PriceCard mainText={time} />
                <PriceCard mainText={getPrice()} />
              </div>
              <div className={styles.buttonWrapper}>
                <NewButton text={'Place a Bid'} onClick={onBuyNow} />
              </div>
            </>
          ) : (
            <div className={styles.infoWrapper}>
              <PriceCard mainText={getPrice()} />
              <NewButton text={'Buy Now'} onClick={onBuyNow} />
            </div>
          )}
        </InfoCard>
      </div>
    </div>
  );
};

export default ProductInfoCard;
