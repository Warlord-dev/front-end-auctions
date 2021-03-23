import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { utils as ethersUtils } from 'ethers';
import PropTypes from 'prop-types';
import cn from 'classnames';
import kebabCase from 'lodash.kebabcase';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getGarmentsById } from '@selectors/garment.selectors';
import { useAPY } from '@hooks/apy.hooks';
import { getAccount } from '@selectors/user.selectors';
import { getAuctionById } from '@selectors/auction.selectors';
import Button from '@components/buttons/button';
import Timer from '@components/timer';
import { openBuynowModal, openConnectMetamaskModal } from '@actions/modals.actions';
import { getExchangeRateETH, getMonaPerEth } from '@selectors/global.selectors';
import { COMMON_RARITY, SEMI_RARE_RARITY } from '@constants/global.constants';
import AuctionInformation from './auction-information';
import DesignInformation from './design-information';
import GameList from './game-list';
import styles from './styles.module.scss';

const SHOW_FIRST_TAB = 0;
const SHOW_SECOND_TAB = 1;

const RightBox = ({
  clothesId,
  currentClothesInfo,
  currentDesignersInfo,
  activeTab,
  currentCounts,
  currentCollections,
  expirationDateText,
}) => {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const garment = useSelector(getGarmentsById(clothesId));
  const auction = useSelector(getAuctionById(garment.id));
  const monaPerEth = useSelector(getMonaPerEth);

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

  const exchangeRateETH = useSelector(getExchangeRateETH);

  const estimateAPY = useAPY(currentCounts[activeTab].basePrice);

  const TABS = [activeTab === 0 ? 'Auction Information' : 'Design Information', 'In-game details'];
  const [activeItem, setActiveItem] = useState(SHOW_FIRST_TAB);

  const renderAuctionInfo = () => {
    if (activeItem === SHOW_FIRST_TAB) return <AuctionInformation garment={garment} />;
    if (activeItem === SHOW_SECOND_TAB) {
      return <GameList currentClothesInfo={currentClothesInfo} />;
    }
    return null;
  };

  const renderCollectionInfo = () => {
    if (activeItem === SHOW_FIRST_TAB)
      return (
        <DesignInformation currentClothesInfo={currentClothesInfo} estimateAPY={estimateAPY} />
      );
    if (activeItem === SHOW_SECOND_TAB) {
      return <GameList currentClothesInfo={currentClothesInfo} />;
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

  const expirationDate = auction ? auction.endTime * 1000 : 0;

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
        <div className={styles.garmentInformation}>
          <p className={styles.description}>{currentClothesInfo?.description}</p>
          {activeItem === SHOW_SECOND_TAB && (
            <div className={styles.timerWrapper}>
              <p className={styles.expirationDateText}>{expirationDateText}</p>
              <Timer className={styles.timer} expirationDate={expirationDate} />
            </div>
          )}
          <Button className={styles.buttonUtil} background="black">
            <a href="https://espa.digitalax.xyz/">WEAR IN GAME</a>
            <span className={styles.playESPA}>PLAY IN ESPA ESPORTS</span>
          </Button>
        </div>
      )}
      {activeTab > 0 && (
        <>
          <p className={styles.priceWrapper}>
            <span className={styles.priceMono}>
              {Math.round(
                (parseFloat(ethersUtils.formatEther(currentCounts[activeTab].basePrice)) /
                  parseFloat(monaPerEth)) *
                  100
              ) / 100}{' '}
              $MONA
            </span>
          </p>
          <p className={styles.countInfo}>
            {currentCounts[activeTab].sold + 1 > currentCounts[activeTab].total
              ? currentCounts[activeTab].total
              : currentCounts[activeTab].sold + 1}{' '}
            of {currentCounts[activeTab].total}
          </p>
          <div className={styles.buttons}>
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
            {activeItem === SHOW_FIRST_TAB && (
              <Button className={styles.buttonUtil} background="black">
                <a href="https://espa.digitalax.xyz/">WEAR IN GAME</a>{' '}
                <span className={styles.playESPA}>PLAY IN ESPA ESPORTS</span>
              </Button>
            )}
          </div>
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
  expirationDateText: PropTypes.string,
};

RightBox.defaultProps = {
  currentClothesInfo: null,
  currentDesignersInfo: null,
  youReceiveText: 'You will receive',
  expirationDateText: 'Time left',
};

export default RightBox;
