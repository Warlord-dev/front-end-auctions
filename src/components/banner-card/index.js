import LazyLoad from 'react-lazyload';
import React from 'react';
import { reviseUrl } from '@utils/helpers';
import styles from './styles.module.scss';

const ImageCard = ({ data, showDesigner = false, imgUrl = null, blue = true }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {showDesigner ? (
          <div className={styles.designerWrapper}> 
            <img src="./images/Lorena-Bellow.jpeg" className={styles.photo} />
            <div className={styles.name}>{data?.garment.name} </div>
          </div>
        ) : null}
        <div className={(blue)?styles.bodyWrapper:styles.bodyWrapperPink}>
          <div className={styles.mediaWrapper}>
            {data ? (
              <LazyLoad>
                <video key={data.id} autoPlay muted loop className={styles.video}>
                  <source src={reviseUrl(data.garment ? data.garment.animation : data.animation)} type="video/mp4" />
                </video>
              </LazyLoad>
            ) : null}
            {imgUrl ? <img src={reviseUrl(imgUrl)} className={styles.image} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
