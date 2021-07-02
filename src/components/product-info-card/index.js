import React from 'react';
import InfoCard from '@components/info-card';
import ImageCard from '@components/image-card';
import PriceCard from '@components/price-card';
import NewButton from '@components/buttons/newbutton';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import { openBuynowModal, openConnectMetamaskModal } from '@actions/modals.actions';

const ProductInfoCard = ({ product }) => {
  const account = useSelector(getAccount);
  const dispatch = useDispatch();

  const onBuyNow = () => {
    if (account) {
      dispatch(
        openBuynowModal({
          id: product.id,
          priceEth: product.garment.primarySalePrice
        })
      );   
    } else {
      dispatch(openConnectMetamaskModal());
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <ImageCard data={product} showDesigner showButton={false} />
      </div>
      <div className={styles.infoCardWrapper}>
        <InfoCard
          borderColor="#9c28ff"
          boxShadow="rgba(197, 32, 129, 0.5)"
        >
          <div className={styles.infoWrapper}>
            <PriceCard mainText="00:00:00" subText="time left" />
            <PriceCard mainText="2.9 $mona ($1632.50)" subText="auction information" />
          </div>
          <div className={styles.buttonWrapper}>
            <NewButton
              text={'Buy Now'}
              onClick={onBuyNow}
            />
          </div>
        </InfoCard>
      </div>
    </div>
  );
};

export default ProductInfoCard;
