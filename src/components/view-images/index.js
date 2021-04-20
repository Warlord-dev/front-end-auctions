/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ReactImageMagnify from 'react-image-magnify';
import {
  createGifURL,
  create2KURL,
  createPreviewURL,
} from '@services/imgix.service';
import styles from './styles.module.scss';

const ViewImages = ({
  className,
  clothesPhotos,
  clothesName,
  clothesId,
}) => {
  const DEFAULT_LARGE_IMAGE = clothesPhotos.find(({ isMain }) => isMain);
  const [largeImage, setLargeImage] = useState(DEFAULT_LARGE_IMAGE);
  const [isShowGif, setIsShowGif] = useState(DEFAULT_LARGE_IMAGE ? DEFAULT_LARGE_IMAGE.isGif : false);

  const handleClick = (item, index) => {
    setLargeImage(clothesPhotos[index]);
    setIsShowGif(!!item.isGif);
  };

  useEffect(() => {
    const main = clothesPhotos.find(({ isMain }) => isMain);
    setLargeImage(main);
    setIsShowGif(main ? main.isGif : false);
  }, [clothesPhotos]);

  if (parseInt(clothesId, 10) >= 20 && parseInt(clothesId, 10) <= 28) {
    return (
      <div className={cn(styles.wrapper, className)}>
        <div className={styles.itemLarge}>
          <video autoPlay muted loop playsInline className={styles.largeImgWrapper}>
            <source src={`/video/${clothesId}.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.itemLarge}>
        {largeImage && isShowGif ? (
          <a
            href={largeImage.image}
            target="_blank"
            rel="noreferrer"
            className={styles.largeImgWrapper}
          >
            <img
              className={styles.itemLargeImg}
              src={createGifURL(largeImage.image)}
              alt={clothesName}
            />
          </a>
        ) : (
          largeImage && (!largeImage.isVideo
            ? (
              <a
                href={largeImage.image}
                target="_blank"
                rel="noreferrer"
                className={styles.largeImgWrapper}
              >
                <ReactImageMagnify
                  className={styles.itemLargeImg}
                  LargeImageClassName={styles.itemLargeImgZoom}
                  {...{
                    smallImage: {
                      src: create2KURL(largeImage.image),
                    },
                    largeImage: {
                      src: create2KURL(largeImage.image),
                      width: 588
                    },
                    shouldUsePositiveSpaceLens: true,
                  }}
                />
              </a>
            ) : (
              <video autoPlay muted loop playsInline className={styles.largeImgWrapper} key={largeImage.video}>
                <source src={largeImage.video} type="video/mp4" />
              </video>
            )
          )
        )}
      </div>
      <div>
        {clothesPhotos.length > 1 && (
          <div className={styles.itemSmallWrapper}>
            {clothesPhotos.map((item, index) => (
              <button
                key={index}
                className={styles.itemSmall}
                onClick={() => handleClick(item, index)}
              >
                {item && item.preview ? (
                  <img
                    className={styles.itemSmallImg}
                    src={createPreviewURL(item?.preview)}
                    alt={clothesName}
                  />
                ) : null}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ViewImages.propTypes = {
  className: PropTypes.string,
  clothesPhotos: PropTypes.array,
  clothesName: PropTypes.string,
  clothesId: PropTypes.string,
};

ViewImages.defaultProps = {
  className: '',
  clothesPhotos: [],
  clothesName: '',
  clothesId: '',
};

export default ViewImages;
