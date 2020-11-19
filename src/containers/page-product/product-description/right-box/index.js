import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getGarmentsById } from '@selectors/garment.selectors';
import AuctionInformation from './auction-information';
import MaterialList from './material-list';
import styles from './styles.module.scss';

const SHOW_FIRST_TAB = 0;
const SHOW_SECOND_TAB = 1;

const RightBox = ({
  clothesId, currentClothesInfo, youReceiveText,
}) => {
  const garment = useSelector(getGarmentsById(clothesId));
  const estimateApy = 0;
  const VALUE_NFT = garment && garment.children.length > 0 ? `(${garment.children.length} NFTs)` : '';
  const VALUE_APY = `~${estimateApy} APY`;

  const TABS = ['Auction Information', `Material Composition ${VALUE_NFT} ${VALUE_APY}`];
  const [activeItem, setActiveItem] = useState(SHOW_FIRST_TAB);

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className={styles.title}>{currentClothesInfo?.clothesName}</h2>
      <SmallPhotoWithText className={styles.smallPhotoWithText} />
      <p className={styles.description}>{currentClothesInfo?.description}</p>
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
          clothesId={clothesId}
          valueChildNfts={currentClothesInfo?.valueChildNfts}
        />
      )}
    </div>
  );
};

RightBox.propTypes = {
  currentClothesInfo: PropTypes.object,
  youReceiveText: PropTypes.string,
  clothesId: PropTypes.string.isRequired,
};

RightBox.defaultProps = {
  currentClothesInfo: null,
  youReceiveText: 'You will receive',
};

export default RightBox;
