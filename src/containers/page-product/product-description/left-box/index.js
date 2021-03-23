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
  let item = TABS[activeTab];
  if (activeTab === 3) item = TABS[1];

  return (
    <div className={cn(styles.leftBox, 'animate__animated animate__fadeIn')}>
      <span className={styles.garmentTypeWrapper}>
        <span className={styles.bannerText}>{TABS[activeTab]}</span>
        <span className={styles.gap} />
      </span>
      <span className={styles.countTag}>
        <span className={styles.bannerText}>
          {currentCounts[activeTab].total - currentCounts[activeTab].sold > 0
            ? `${currentCounts[activeTab].sold + 1} OF ${currentCounts[activeTab].total}`
            : `${currentCounts[activeTab].total === 0 ? 'NOT AVAIlABLE' : 'SOLD OUT'}`}
        </span>
        <span className={styles.gap} />
      </span>
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
