/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const ViewImages = ({ className, clothesPhotos, clothesName }) => {

  const DEFAULT_LARGE_IMAGE = clothesPhotos.find(({ isMain }) => isMain)?.image;
  const VIDEO = clothesPhotos.find(({ isVideo }) => isVideo)?.video;
  const [largeImage, setLargeImage] = useState(DEFAULT_LARGE_IMAGE);
  const [isShowVideoBlock, setIsShowVideoBlock] = useState(false);


  const handleClick = (item, index) => {
    if (item.isVideo) {
      setIsShowVideoBlock(true);
    } else {
      setLargeImage(clothesPhotos[index]?.image);
      setIsShowVideoBlock(false);
    }
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.itemLarge}>
        {isShowVideoBlock ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video controls className={styles.video} autoPlay>
            <source src={VIDEO} type="video/mp4" />
          </video>
        ) : (
          <a href={largeImage} target="_blank" rel="noreferrer">
            <img className={styles.itemLargeImg} src={largeImage} alt={clothesName} />
          </a>
        )}
      </div>
      <div>
        {clothesPhotos.length > 1 && (
          <div className={styles.itemSmallWrapper}>
            {clothesPhotos.map((item, index) => (
              <button key={index} className={styles.itemSmall} onClick={() => handleClick(item, index)}>
                <img className={styles.itemSmallImg} src={item?.image} alt={clothesName} />
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
