/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const ViewImages = ({ className, clothesPhotos, clothesName }) => {

  const DEFAULT_LARGE_IMAGE = clothesPhotos.find(({ isMain }) => isMain)?.image;
  const [largeImage, setLargeImage] = useState(DEFAULT_LARGE_IMAGE);

  const handleClick = (index) => {
    setLargeImage(clothesPhotos[index]?.image);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.itemLarge}>
        <img className={styles.itemLargeImg} src={largeImage} alt={clothesName} />
      </div>
      {clothesPhotos.length > 1 && (
        <div className={styles.itemSmallWrapper}>
          {clothesPhotos.map((item, index) => (
            <button key={index} className={styles.itemSmall} onClick={() => handleClick(index)}>
              <img className={styles.itemSmallImg} src={item?.image} alt={clothesName} />
            </button>
          ))}
        </div>
      )}
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
