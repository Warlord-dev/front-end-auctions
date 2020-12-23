import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ViewImages from '@components/view-images';
import styles from './styles.module.scss';

const LeftBox = ({
  clothesId,
  clothesPhotos,
  clothesName,
  activeTab,
  setActiveTab,
  currentCounts,
}) => {
  const TABS = ['Exclusive', 'Semi-rare', 'Common'];

  return (
    <div className={cn(styles.leftBox, 'animate__animated animate__fadeIn')}>
      <div className={styles.tabs}>
        {TABS.map((item, index) => (
          <div key={item} className={styles.tabContainer}>
            <button
              onClick={() => setActiveTab(index)}
              className={cn(styles.tab, {
                [styles.active]: activeTab === index,
              })}
              disabled={index > 0}
            >
              {item}
            </button>
            {index > 0 && currentCounts[index].current > 0 && (
              <span className={styles.countTag}>Coming Soon</span>
            )}
            {currentCounts[index].current === 0 && (
              <span className={styles.countTag}>SOLD OUT</span>
            )}
          </div>
        ))}
      </div>
      <ViewImages
        clothesId={clothesId}
        clothesPhotos={clothesPhotos}
        clothesName={clothesName}
        isSoldOut={currentCounts[activeTab].current === 0}
      />
    </div>
  );
};

LeftBox.propTypes = {
  clothesPhotos: PropTypes.array,
  clothesName: PropTypes.string,
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func,
  currentCounts: PropTypes.array,
  clothesId: PropTypes.string,
};

LeftBox.defaultProps = {
  clothesPhotos: [],
  clothesName: '',
  activeTab: 0,
  setActiveTab: () => {},
  currentCounts: [],
  clothesId: '1',
};

export default memo(LeftBox);
