import React, { useState } from 'react';
import BigNumber from 'bignumber.js';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import kebabCase from 'lodash.kebabcase';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getGarmentsById } from '@selectors/garment.selectors';
import { useAPY } from '@hooks/apy.hooks';
import AuctionInformation from './auction-information';
import MaterialList from './material-list';
import styles from './styles.module.scss';


const SHOW_FIRST_TAB = 0;
const SHOW_SECOND_TAB = 1;

const RightBox = ({
  clothesId, currentClothesInfo, currentDesignersInfo, youReceiveText,
}) => {
  const garment = useSelector(getGarmentsById(clothesId));
  const VALUE_NFT = garment && garment.children.length > 0 ? `(${garment.children.length} NFTs)` : '';

  const amount = garment ? garment.children
    .reduce((acc, item) => (item.amount ? acc.plus(item.amount) : acc), new BigNumber(0)).toString(10) : 0;
  const estimateApy = useAPY(amount);

  const VALUE_APY = `~ ${estimateApy} APY`;

  const TABS = ['Auction Information', `Material Composition ${VALUE_NFT} ${VALUE_APY}`];
  const [activeItem, setActiveItem] = useState(SHOW_FIRST_TAB);

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className={styles.title}>{currentClothesInfo?.clothesName}</h2>
      <SmallPhotoWithText
        className={styles.smallPhotoWithText}
        id={currentDesignersInfo ? kebabCase(currentDesignersInfo.designerName) : ''}
        photo={currentDesignersInfo?.designerPhoto}
        name={currentDesignersInfo?.designerName}
        photoIsLink
      />
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
  currentDesignersInfo: PropTypes.object,
  youReceiveText: PropTypes.string,
  clothesId: PropTypes.string.isRequired,
};

RightBox.defaultProps = {
  currentClothesInfo: null,
  currentDesignersInfo: null,
  youReceiveText: 'You will receive',
};

export default RightBox;
