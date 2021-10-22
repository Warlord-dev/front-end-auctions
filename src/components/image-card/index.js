import {
  openBuynowModal,
  openConnectMetamaskModal,
  openPlaceBidModal,
  openPurchaseSuccessModal,
  openSwitchNetworkModal,
} from '@actions/modals.actions';
import NewButton from '@components/buttons/newbutton';
import Link from 'next/link';
import { getAccount } from '@selectors/user.selectors';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRarityId, reviseUrl } from '@utils/helpers';
import styles from './styles.module.scss';
import { getChainId } from '@selectors/global.selectors';
import Button from '@components/buttons/button';

const ImageCard = ({
  data,
  showDesigner = false,
  showCollectionName = false,
  showRarity = false,
  showButton = true,
  imgUrl = null,
  price,
  disable = false,
  withLink = false,
  isAuction = false,
  v1 = false,
}) => {
  const router = useRouter();
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const { asPath } = router;
  const dispatch = useDispatch();
  const [zoomMedia, setZoomMedia] = useState(false);
  const videoTagRef = useRef();
  const [hasAudio, setHasAudio] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [mainImageType, setMainImageType] = useState(0);

  function getAudio(video) {
    return (
      video.mozHasAudio ||
      Boolean(video.webkitAudioDecodedByteCount) ||
      Boolean(video.audioTracks && video.audioTracks.length)
    );
  }

  useEffect(() => {
    setMainImage(
      data?.garment?.animation || data?.animation || data?.garment?.image || data?.image,
    );
    if (data?.garment?.animation || data?.animation) setMainImageType(1);
    else if (data?.garment?.image || data?.image) setMainImageType(2);
  }, [data]);

  const onBuyNow = () => {
    if (!router.asPath.includes('product')) {
      router
        .push(
          `/product/${v1 ? `v1-${data?.id}` : data?.id}/${getRarityId(data.rarity)}/${
            isAuction ? 1 : 0
          }`,
        )
        .then(() => window.scrollTo(0, 0));
    } else {
      if (account) {
        if (chainId === '0x89') {
          if (!isAuction) {
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
    setZoomMedia(true);
  };

  const onClickZoomIn = () => {
    setZoomMedia(false);
  };

  const onClickMute = () => {
    videoTagRef.current.pause();
    setVideoMuted(!videoMuted);
    videoTagRef.current.play();
  };

  useEffect(() => {
    if (mainImageType === 1 && videoTagRef.current) {
      videoTagRef.current.load();
    }
  }, [mainImageType, mainImage]);

  const renderImage = () => {
    return (
      <div className={styles.bodyWrapper}>
        {showRarity ? (
          <div className={styles.rarity}> {data?.rarity || data?.garment?.rarity} </div>
        ) : null}
        {data ? (
          <div
            className={zoomMedia ? styles.zoomWrapper : styles.mediaWrapper}
            onClick={() => onClickZoomIn()}
          >
            {mainImageType === 1 ? (
              <LazyLoad>
                {/* <video key={data.id} autoPlay muted={!asPath.includes('product')} loop className={styles.video} */}
                <video
                  key={data.id}
                  autoPlay
                  muted={videoMuted}
                  loop
                  className={styles.video}
                  ref={videoTagRef}
                  preload={'auto'}
                  onLoadedData={() => {
                    if (!asPath.includes('product')) return;
                    // console.log('videoTagRef: ', videoTagRef.current)
                    var video = videoTagRef.current;
                    // console.log('video: ', video)
                    if (getAudio(video)) {
                      // console.log('video has audio')
                      setHasAudio(true);
                    } else {
                      setHasAudio(false);
                      // console.log(`video doesn't have audio`)
                    }
                  }}
                >
                  <source src={reviseUrl(mainImage)} type="video/mp4" />
                </video>
              </LazyLoad>
            ) : mainImageType === 2 ? (
              <img src={mainImage} className={styles.image} />
            ) : null}
            {hasAudio && zoomMedia && (
              <Button
                className={styles.muteButton}
                onClick={(e) => {
                  e.stopPropagation();
                  onClickMute();
                }}
              >
                {videoMuted ? (
                  <img src="/images/audio-off.png" />
                ) : (
                  <img src="/images/audio-on.png" />
                )}
              </Button>
            )}
          </div>
        ) : null}
        <Button className={styles.zoomButton} onClick={() => onClickZoomOut()}>
          <img src="/images/zoom_btn.png" />
        </Button>
        {hasAudio && mainImageType === 1 && (
          <Button className={styles.muteButton} onClick={() => onClickMute()}>
            {videoMuted ? <img src="/images/audio-off.png" /> : <img src="/images/audio-on.png" />}
          </Button>
        )}
        {imgUrl ? <img src={reviseUrl(imgUrl)} className={styles.image} /> : null}
        {showButton && (
          <div className={styles.buyNow}>
            <NewButton
              text={disable ? 'Sold Out' : isAuction ? 'Place A Bid' : 'Buy Now'}
              onClick={onBuyNow}
              disable={disable}
            />
          </div>
        )}
        {!!data?.additionalSources?.length && (
          <div className={styles.additionalImages}>
            {[
              ...data?.additionalSources,
              {
                type: data?.garment?.animation || data?.animation ? 'animation' : 'image',
                url:
                  data?.garment?.animation ||
                  data?.animation ||
                  data?.garment?.image ||
                  data?.image,
              },
            ]
              .filter((item) => item.url !== mainImage)
              .map((item) => {
                if (item.type === 'image') {
                  return (
                    <img
                      src={reviseUrl(item.url)}
                      key={item.url}
                      onClick={() => {
                        setMainImage(item.url);
                        setMainImageType(2);
                      }}
                    />
                  );
                } else if (item.type === 'animation') {
                  return (
                    <video
                      muted
                      autoPlay
                      loop
                      key={item.url}
                      onClick={() => {
                        setMainImage(item.url);
                        setMainImageType(1);
                      }}
                    >
                      <source src={reviseUrl(item.url)} />
                    </video>
                  );
                }
              })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={styles.imageCardWrapper}>
        {showCollectionName ? (
          <div className={styles.collectionName}>
            {data?.garment ? data.garment.name : data.name}
          </div>
        ) : null}
        {showDesigner ? (
          <a
            href={`https://designers.digitalax.xyz/designers/${data?.designer?.name}`}
            target="_blank"
            className={styles.designerLink}
          >
            <div className={styles.designerWrapper}>
              <img src={data?.designer?.image} className={styles.photo} />
              <div className={styles.name}>{data?.designer?.name} </div>
            </div>
          </a>
        ) : null}
        {withLink ? (
          <Link href={`/product/${data?.id}/${getRarityId(data?.rarity)}/${isAuction ? 1 : 0}`}>
            <a>{renderImage()}</a>
          </Link>
        ) : (
          renderImage()
        )}
      </div>
    </>
  );
};

export default ImageCard;
