import { openBuynowModal, openConnectMetamaskModal } from '@actions/modals.actions';
import NewButton from '@components/buttons/newbutton';
import { getAccount } from '@selectors/user.selectors';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRarityId, reviseUrl } from '@utils/helpers';
import styles from './styles.module.scss';

const ImageCard = ({ libon = 0, data, showDesigner = false, showButton = true }) => {
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
      router.push(`/product/${data.id}/${getRarityId(data.rarity)}`)
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
        {showDesigner ? (
          <div className={styles.designerWrapper}> 
            <img src="./images/Lorena-Bellow.jpeg" className={styles.photo} />
            <div className={styles.name}>{data?.garment.name} </div>
          </div>
        ) : null}
        <div className={styles.bodyWrapper}>
          {libon ? <img src={libons[libon - 1]} className={styles.libon} /> : null}
          {data ? (
            <LazyLoad>
              <video key={data.id} autoPlay muted loop className={styles.video}>
                <source src={reviseUrl(data.garment ? data.garment.animation : data.animation)} type="video/mp4" />
              </video>
            </LazyLoad>
          ) : null}
          {showButton && <div className={styles.buyNow}>
            <NewButton
              text={data?.rarity === 'Exclusive' ? 'Place A Bid' : 'Buy Now'}
              onClick={onBuyNow}
            />
          </div>}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
