import LazyLoad from 'react-lazyload';
import React from 'react';
import styles from './styles.module.scss';

const FashionImageCard = ({ videoUrl }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {videoUrl.includes('mp4') ? (
          <div className={styles.bodyWrapper}>
            <LazyLoad>
              <video autoPlay muted loop className={styles.video}>
                <source src={videoUrl} type="video/mp4" />
              </video>
            </LazyLoad>
          </div>
        ) : (
          <img src={videoUrl} className={styles.image} />
        )}
      </div>
    </>
  );
};

export default FashionImageCard;
