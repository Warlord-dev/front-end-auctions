import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BigNumber from 'bignumber.js';
import PropTypes from 'prop-types';
import cn from 'classnames';
import kebabCase from 'lodash.kebabcase';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getGarmentsById } from '@selectors/garment.selectors';
import { useAPY } from '@hooks/apy.hooks';
import { getAccount } from '@selectors/user.selectors';
import { convertToEth } from '@helpers/price.helpers';
import Button from '@components/buttons/button';
import { openBuynowModal, openConnectMetamaskModal } from '@actions/modals.actions';
import { getExchangeRateETH } from '@selectors/global.selectors';
import { COMMON_RARITY, SEMI_RARE_RARITY } from '@constants/global.constants';
import AuctionInformation from './auction-information';
import DesignInformation from './design-information';
import MaterialList from './material-list';
import styles from './styles.module.scss';

const SHOW_FIRST_TAB = 0;
const SHOW_SECOND_TAB = 1;

const RightBox = ({
  clothesId,
  currentClothesInfo,
  currentDesignersInfo,
  youReceiveText,
  activeTab,
  currentCounts,
  currentCollections,
}) => {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const garment = useSelector(getGarmentsById(clothesId));

  const [semiRare, common] = useMemo(() => {
    if (!currentCollections) return [{ children: [] }, { children: [] }];

    const tSemiRare = currentCollections.find(
      (collection) => collection.rarity === SEMI_RARE_RARITY
    );
    const tCommon = currentCollections.find((collection) => collection.rarity === COMMON_RARITY);
    return [
      tSemiRare ? tSemiRare.garments[0] : { children: [] },
      tCommon ? tCommon.garments[0] : { children: [] },
    ];
  }, [currentCollections]);

  const VALUE_NFT = useMemo(() => {
    if (activeTab === 0) {
      return garment && garment.children.length > 0
        ? `(${garment.children.length} NFT${garment.children.length > 1 ? 's' : ''})`
        : '';
    }
    if (activeTab === 1) {
      return semiRare.children.length > 0
        ? `(${semiRare.children.length} NFT${semiRare.children.length > 1 ? 's' : ''})`
        : '';
    }
    return common.children.length > 0
      ? `(${common.children.length} NFT${common.children.length > 1 ? 's' : ''})`
      : '';
  }, [activeTab, semiRare, common]);

  const exchangeRateETH = useSelector(getExchangeRateETH);

  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateETH;
    return (Math.trunc(priceUsd * 100) / 100).toLocaleString('en');
  };

  const estimateAPY = useAPY(currentCounts[activeTab].basePrice);

  const TABS = [
    activeTab === 0 ? 'Auction Information' : 'Design Information',
    `Material Composition ${VALUE_NFT}`,
  ];
  const [activeItem, setActiveItem] = useState(SHOW_FIRST_TAB);

  const renderAuctionInfo = () => {
    if (activeItem === SHOW_FIRST_TAB)
      return <AuctionInformation garment={garment} />;
    if (activeItem === SHOW_SECOND_TAB) {
      return (
        <MaterialList clothesId={clothesId} valueChildNfts={currentClothesInfo?.valueChildNfts} />
      );
    }
    return null;
  };

  const renderCollectionInfo = () => {
    if (activeItem === SHOW_FIRST_TAB)
      return (
        <DesignInformation currentClothesInfo={currentClothesInfo} estimateAPY={estimateAPY} />
      );
    if (activeItem === SHOW_SECOND_TAB) {
      return (
        <MaterialList
          clothesId={clothesId}
          activeTab={activeTab}
          semiRare={semiRare}
          common={common}
          valueChildNfts={currentClothesInfo?.valueChildNfts}
        />
      );
    }
    return null;
  };

  const handleClickBuy = () => {
    if (account) {
      dispatch(
        openBuynowModal({
          id: currentCounts[activeTab].collectionId,
          priceEth: currentCounts[activeTab].basePrice,
        })
      );
    } else {
      dispatch(openConnectMetamaskModal());
    }
  };

  return (
    <div className={cn('animate__animated animate__fadeIn', styles.fullWidth)}>
      <h2 className={styles.title}>{currentClothesInfo?.clothesName}</h2>
      <SmallPhotoWithText
        className={styles.smallPhotoWithText}
        id={currentDesignersInfo ? kebabCase(currentDesignersInfo.designerName) : ''}
        photo={currentDesignersInfo?.designerPhoto}
        name={currentDesignersInfo?.designerName}
        photoIsLink
      />
      {activeTab === 0 && (
        <>
          <p className={styles.description}>{currentClothesInfo?.description}</p>
          {currentClothesInfo?.youReceive && (
            <p className={styles.youReceiveText}>
              {parseInt(clothesId, 10) > 43 ? 'What you receive' : youReceiveText}
            </p>
          )}
          <p className={styles.youReceive}>{currentClothesInfo?.youReceive}</p>
        </>
      )}
      {activeTab > 0 && (
        <>
          <p className={styles.priceWrapper}>
            <span className={styles.priceEth}>
              {convertToEth(currentCounts[activeTab].basePrice)} Ξ
            </span>
            <span className={styles.priceUsd}>
              (${getPriceUsd(convertToEth(currentCounts[activeTab].basePrice))})
            </span>
          </p>
          <p className={styles.countInfo}>
            {currentCounts[activeTab].sold + 1 > currentCounts[activeTab].total
              ? currentCounts[activeTab].total
              : currentCounts[activeTab].sold + 1}{' '}
            of {currentCounts[activeTab].total}
          </p>
          <Button
            onClick={() => handleClickBuy()}
            className={styles.button}
            background="black"
            isDisabled={currentCounts[activeTab].sold === currentCounts[activeTab].total}
          >
            <span className={styles.buttonText}>
              {currentCounts[activeTab].sold === currentCounts[activeTab].total
                ? 'Sold Out'
                : 'Buy Now'}
            </span>
            {currentCounts[activeTab].sold !== currentCounts[activeTab].total && (
              <span className={styles.buttonGray}>(Pay in ETH or $MONA)</span>
            )}
          </Button>
        </>
      )}
      <div className={styles.tabs}>
        {TABS.map((item, index) => (
          <button
            onClick={() => setActiveItem(index)}
            className={cn(styles.tab, { [styles.active]: activeItem === index })}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      {activeTab === 0 && renderAuctionInfo()}
      {activeTab > 0 && renderCollectionInfo()}
    </div>
  );
};

RightBox.propTypes = {
  currentClothesInfo: PropTypes.object,
  currentDesignersInfo: PropTypes.object,
  youReceiveText: PropTypes.string,
  clothesId: PropTypes.string.isRequired,
  currentCounts: PropTypes.array.isRequired,
  currentCollections: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

RightBox.defaultProps = {
  currentClothesInfo: null,
  currentDesignersInfo: null,
  youReceiveText: 'You will receive',
};

export default RightBox;
