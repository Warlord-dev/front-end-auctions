import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SmallPhotoWithText from '@components/small-photo-with-text';
import AuctionInformation from './auction-information';
import MaterialList from './material-list';
import styles from './styles.module.scss';

const SHOW_FIRST_TAB = 0;
const SHOW_SECOND_TAB = 1;

const RightBox = ({
  currentClothesInfo, currentDesignersInfo, youReceiveText, currentMaterial,
}) => {

  const VALUE_NFT = currentMaterial.length > 0 ? `(${currentMaterial.length} NFTs)` : '';
  const VALUE_APY = currentClothesInfo?.estimateApy ? `~${currentClothesInfo?.estimateApy} APY` : '';

  const TABS = ['Auction Information', `Material Composition ${VALUE_NFT} ${VALUE_APY}`];
  const [activeItem, setActiveItem] = useState(SHOW_FIRST_TAB);

  return (
    <div>
      <h2 className={styles.title}>{currentClothesInfo?.clothesName}</h2>
      <SmallPhotoWithText className={styles.smallPhotoWithText} {...currentDesignersInfo} />
      <p className={styles.description}>{currentDesignersInfo?.descriptionDesigner}</p>
      {currentClothesInfo?.youReceive && <p className={styles.youReceiveText}>{youReceiveText}</p>}
      <p className={styles.youReceive}>{currentClothesInfo?.youReceive}</p>
      <div className={styles.tabs}>
        {TABS.map((item, index) => (
          <button
            onClick={() => setActiveItem(index)}
            className={cn(styles.tab, { [styles.active]: activeItem === index })}
            key={item}
          >{item}
          </button>
        ))}
      </div>
      {activeItem === SHOW_FIRST_TAB && <AuctionInformation {...currentClothesInfo} /> }
      {activeItem === SHOW_SECOND_TAB && (
        <MaterialList
          currentMaterial={currentMaterial}
          valueChildNfts={currentClothesInfo.valueChildNfts}
        />
      )}
    </div>
  );
};


RightBox.propTypes = {
  currentClothesInfo: PropTypes.object.isRequired,
  currentDesignersInfo: PropTypes.object.isRequired,
  youReceiveText: PropTypes.string,
  currentMaterial: PropTypes.array,
};

RightBox.defaultProps = {
  youReceiveText: 'You will receive',
  currentMaterial: null,
};

export default RightBox;
