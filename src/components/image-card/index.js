import {
  openBuynowModal,
  openConnectMetamaskModal,
  openPlaceBidModal,
  openSwitchNetworkModal,
} from '@actions/modals.actions';
import NewButton from '@components/buttons/newbutton';
import { getAccount } from '@selectors/user.selectors';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRarityId, reviseUrl } from '@utils/helpers';
import styles from './styles.module.scss';
import { getChainId } from '@selectors/global.selectors';
import Button from '@components/buttons/button'

const ImageCard = ({
  libon = 0,
  data,
  showDesigner = false,
  showCollectionName = false,
  showRarity = false,
  showButton = true,
  imgUrl = null,
  price,
  disable = false,
}) => {
  const router = useRouter();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const dispatch = useDispatch();
  const [zoomMedia, setZoomMedia] = useState(false);

  const onBuyNow = () => {
    if (!router.asPath.includes('product')) {
      router.push(`/product/${data.id}/${getRarityId(data.rarity)}`).then(() => window.scrollTo(0, 0));
    } else {
      if (account) {
        if (chainId === '0x89') {
          if (libon !== 1) {
            dispatch(
              openBuynowModal({
                id: data.id,
                priceEth: price,
              }),
            );
          } else {
            dispatch(
              openPlaceBidModal({
                id: data.id,
                priceEth: price,
              }),
            );
          }
        } else {
          dispatch(openSwitchNetworkModal());
        }
      } else {
        dispatch(openConnectMetamaskModal());
      }
    }
  };

  const onClickZoomOut = () => {
    console.log('zoom run!')
    setZoomMedia(true)
  }

  const onClickZoomIn = () => {
    setZoomMedia(false)
  }

  return (
    <>
      <div className={styles.wrapper}>
        {showCollectionName ? (
          <div className={styles.collectionName}>
            {data?.garment ? data.garment.name : data.name}
          </div>
        ): null}
        {showDesigner ? (
          <div className={styles.designerWrapper}>
            <img src={data?.designer?.image} className={styles.photo} />
            <div className={styles.name}>{data?.designer?.name} </div>
          </div>
        ) : null}
        <div className={styles.bodyWrapper}>
          {showRarity ? <div className={styles.rarity}> {data?.rarity || data?.garment?.rarity} </div> : null}
          {data ? (
            <div 
              className={zoomMedia ? styles.zoomWrapper : styles.mediaWrapper}
              onClick={() => onClickZoomIn()}
            >
            {
              data.garment?.animation?.length || data.animation?.length
              ? (
                  <LazyLoad>
                    <video key={data.id} autoPlay muted loop className={styles.video}>
                      <source
                        src={reviseUrl(data.garment ? data.garment.animation : data.animation)}
                        type="video/mp4"
                      />
                    </video>
                  </LazyLoad>
                ) 
              : <img src={data.garment ? data.garment.image : data.image} className={styles.image} />
            }
            </div>
          ) : null}
          {
          showButton && 
            <Button
              className={styles.zoomButton}
              onClick={() => onClickZoomOut()}
            >
              <img src='/images/zoom_btn.png' />
            </Button>
          }
          {imgUrl ? <img src={reviseUrl(imgUrl)} className={styles.image} /> : null}
          {showButton && (
            <div className={styles.buyNow}>
              <NewButton
                text={data?.rarity === 'Exclusive' || libon === 1 ? 'Place A Bid' : 'Buy Now'}
                onClick={onBuyNow}
                disable={disable}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
