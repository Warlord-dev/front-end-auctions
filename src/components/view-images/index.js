/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ReactImageMagnify from 'react-image-magnify';
import { create2KURL, createPreviewURL } from '@services/imgix.service';
import styles from './styles.module.scss';

const ViewImages = ({ className, clothesPhotos, clothesName }) => {

  const DEFAULT_LARGE_IMAGE = clothesPhotos.find(({ isMain }) => isMain)?.image;
  const [largeImage, setLargeImage] = useState(DEFAULT_LARGE_IMAGE);
  const [isShowGif, setIsShowGif] = useState(false);

  const handleClick = (item, index) => {
    if (item.isGif) {
      setIsShowGif(true);
    } else {
      setLargeImage(clothesPhotos[index]?.image);
      setIsShowGif(false);
    }
  };


  useEffect(() => {
    setLargeImage(clothesPhotos.find(({ isMain }) => isMain)?.image);
  }, [clothesPhotos]);


  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.itemLarge}>
        {isShowGif ? (
          <a href={largeImage} target="_blank" rel="noreferrer" className={styles.largeImgWrapper}>
            <img className={styles.itemLargeImg} src={create2KURL(largeImage)} alt={clothesName} />
          </a>
        ) : largeImage && (
          <a href={largeImage} target="_blank" rel="noreferrer" className={styles.largeImgWrapper}>
            <ReactImageMagnify
              className={styles.itemLargeImg}
              LargeImageClassName={styles.itemLargeImgZoom}
              {...{
                smallImage: {
                  isFluidWidth: true,
                  src: create2KURL(largeImage),
                },
                largeImage: {
                  src: create2KURL(largeImage),
                  width: 1176,
                  height: 1176,
                },
              }}
            />
          </a>
        )}
      </div>
      <div>
        {clothesPhotos.length > 1 && (
          <div className={styles.itemSmallWrapper}>
            {clothesPhotos.map((item, index) => (
              <button key={index} className={styles.itemSmall} onClick={() => handleClick(item, index)}>
                {item && item.preview ? (
                  <img
                    className={styles.itemSmallImg}
                    src={createPreviewURL(item?.preview)}
                    alt={clothesName}
                  />
                ) : null }
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
};

ViewImages.defaultProps = {
  className: '',
  clothesPhotos: [],
  clothesName: '',
};

export default ViewImages;
