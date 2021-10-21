import NewButton from '@components/buttons/newbutton';
import PriceCard from '@components/price-card';
import { reviseUrl } from '@utils/helpers';
import React, { useRef, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Button } from 'semantic-ui-react';
import styles from './styles.module.scss';

const SecondaryImageCard = ({ data, showButton = false, shwoSecondButton = false }) => {
  const [zoomMedia, setZoomMedia] = useState(false);
  const videoTagRef = useRef();
  const [hasAudio, setHasAudio] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  function getAudio(video) {
    return (
      video.mozHasAudio ||
      Boolean(video.webkitAudioDecodedByteCount) ||
      Boolean(video.audioTracks && video.audioTracks.length)
    );
  }

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

  const onSell = () => {};

  const onDelist = () => {};

  return (
    <div className={styles.wrapper}>
      {data ? (
        <div
          className={zoomMedia ? styles.zoomWrapper : styles.mediaWrapper}
          onClick={() => onClickZoomIn()}
        >
          {data?.garment?.animation || data?.animation ? (
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
                <source
                  src={reviseUrl(data?.garment?.animation || data?.animation)}
                  type="video/mp4"
                />
              </video>
            </LazyLoad>
          ) : data?.garment?.image || data?.image ? (
            <img src={reviseUrl(data?.garment?.image || data?.image)} className={styles.image} />
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
      {hasAudio && (data?.garment?.animation || data?.animation) && (
        <Button className={styles.muteButton} onClick={() => onClickMute()}>
          {videoMuted ? <img src="/images/audio-off.png" /> : <img src="/images/audio-on.png" />}
        </Button>
      )}
      <div className={styles.buttonsWrapper}>
        {showButton && (
          <div className={styles.buyNow}>
            <NewButton text="SELL" mode="1" onClick={onSell} />
          </div>
        )}
        {shwoSecondButton && (
          <div className={styles.secondButton}>
            <NewButton text="DELIST" mode="1" onClick={onDelist} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondaryImageCard;
