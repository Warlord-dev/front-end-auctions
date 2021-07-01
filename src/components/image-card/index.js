import { openBuynowModal, openConnectMetamaskModal } from '@actions/modals.actions';
import NewButton from '@components/buttons/newbutton';
import { getAccount } from '@selectors/user.selectors';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviseUrl } from '@utils/helpers';
import styles from './styles.module.scss';

const ImageCard = ({ libon = 0, data, showName = false }) => {
  const router = useRouter();
  const account = useSelector(getAccount);
  const dispatch = useDispatch();
  const libons = [
    './images/metaverse/exc-libon.png',
    './images/metaverse/semi-libon.png',
    './images/metaverse/common-libon.png',
  ];

  const onBuyNow = () => {
    if (!router.asPath.includes('product')) {
      router.push(`/product/${data.id}/${libon}`)
    } else {
      if (account) {
        dispatch(
          openBuynowModal({
            id: data.id,
            priceEth: data.garment.primarySalePrice
          })
        )
      } else {
        dispatch(openConnectMetamaskModal());
      }
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        {showName ? <div className={styles.name}> {data?.garment.name} </div> : null}
        <div className={styles.bodyWrapper}>
          {libon ? <img src={libons[libon - 1]} className={styles.libon} /> : null}
          {data ? (
            <video key={data.id} autoPlay muted loop className={styles.video}>
              <source src={reviseUrl(data.garment ? data.garment.animation : data.animation)} type="video/mp4" />
            </video>
          ) : null}
          <div className={styles.buyNow}>
            <NewButton
              text={data?.rarity === 'Exclusive' ? 'Place A Bid' : 'Buy Now'}
              onClick={onBuyNow}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
