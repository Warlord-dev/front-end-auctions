import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ViewImages from '@components/view-images';
import { EXCLUSIVE_RARITY, COMMON_RARITY, SEMI_RARE_RARITY } from '@constants/global.constants';
import styles from './styles.module.scss';

const LeftBox = ({
  clothesId,
  clothesPhotos,
  clothesName,
  activeTab,
  setActiveTab,
  currentCounts,
}) => {
  const TABS = [EXCLUSIVE_RARITY, SEMI_RARE_RARITY, COMMON_RARITY];
  // Check if it's Auction4 - Hard Code
  const isAuction4 = clothesId >= 42;

  return (
    <div className={cn(styles.leftBox, 'animate__animated animate__fadeIn')}>
      <div className={styles.tabs}>
        {TABS.map((item, index) => (
          <div key={item} className={styles.tabContainer}>
            <button
              onClick={() => !isAuction4 && setActiveTab(index)}
              className={cn(styles.tab, {
                [styles.active]: activeTab === index,
              })}
              disabled={currentCounts[index].total === 0}
            >
              {item}
            </button>
            {index > 0 && currentCounts[index].total - currentCounts[index].sold > 0 && (
              <span className={styles.countTag}>
                <span className={styles.bannerText}>
                  {currentCounts[index].sold + 1} OF {currentCounts[index].total}
                </span>
                <span className={styles.gap} />
              </span>
            )}
            {currentCounts[index].total - currentCounts[index].sold === 0 && (
              <span className={styles.countTag}>
                <span className={styles.bannerText}>
                  {currentCounts[index].total === 0 || (index !== 0 && isAuction4)
                    ? 'NOT AVAIlABLE'
                    : 'SOLD OUT'}
                </span>
                <span className={styles.gap} />
              </span>
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
