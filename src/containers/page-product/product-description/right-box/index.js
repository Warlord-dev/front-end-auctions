import React, { useState, useMemo, useEffect } from 'react';
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
import {
  openBuynowModal,
  openConnectMetamaskModal,
  openConnectMaticModal,
  openBuyNowCoolDownModal,
  openBuyNowLimitModal,
} from '@actions/modals.actions';
import { getExchangeRateETH, getMonaPerEth, getChainId } from '@selectors/global.selectors';
import { COMMON_RARITY, SEMI_RARE_RARITY } from '@constants/global.constants';
import AuctionInformation from './auction-information';
import DesignInformation from './design-information';
import GameList from './game-list';
import styles from './styles.module.scss';
import apiService from '@services/api/api.service';

const SHOW_FIRST_TAB = 0;
const SHOW_SECOND_TAB = 1;

const RightBox = ({
  collectionId,
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
  const auction = useSelector(getAuctionById(garment?.id));
  const [ids, setIds] = useState([]);
  const [lastPurchasedTime, setLastPurchasedTime] = useState(0);
  const monaPerEth = useSelector(getMonaPerEth);
  const chainId = useSelector(getChainId);
  const modals = useSelector((state) => state.modals.toJS());
  const { isShowBuyNow } = modals;
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  const estimateAPY = useAPY(currentCounts.basePrice);

  const TABS = [activeTab === 0 ? 'Auction Information' : 'Design Information', 'In-game details'];
  const [activeItem, setActiveItem] = useState(SHOW_FIRST_TAB);

  const renderAuctionInfo = () => {
    if (activeItem === SHOW_FIRST_TAB) return <AuctionInformation garment={garment} />;
    if (activeItem === SHOW_SECOND_TAB) {
      return <GameList collectionId={collectionId} currentClothesInfo={currentClothesInfo} />;
    }
    return null;
  };

  const renderCollectionInfo = () => {
    if (activeItem === SHOW_FIRST_TAB)
      return (
        <DesignInformation
          collectionId={collectionId}
          currentClothesInfo={currentClothesInfo}
          estimateAPY={estimateAPY}
        />
      );
    if (activeItem === SHOW_SECOND_TAB) {
      return <GameList collectionId={collectionId} currentClothesInfo={currentClothesInfo} />;
    }
    return null;
  };

  useEffect(() => {
    const fetchPurchaseInfo = async () => {
      let histories = [];
      if (collectionId === '1') {
        const { digitalaxMarketplacePurchaseHistories } =
          await apiService.getMarketplacePurchaseHistory(account, parseInt(garment?.id));
        histories = digitalaxMarketplacePurchaseHistories;
      } else if (collectionId === '3' || collectionId === '4') {
        const { digitalaxMarketplaceV2PurchaseHistories } =
          await apiService.getMarketplacePurchaseHistoryV2(
            account,
            collectionId === '4' ? 100294 : parseInt(garment?.id),
          );
        histories = digitalaxMarketplaceV2PurchaseHistories;
      }

      let latest = lastPurchasedTime;
      for (let i = 0; i < histories.length; i += 1) {
        if (latest < histories[i].timestamp) {
          latest = histories[i].timestamp;
        }
      }
      setIds(histories);
      if (latest !== lastPurchasedTime) {
        setLastPurchasedTime(latest);
      }
    };

    if (!isShowBuyNow && account) {
      fetchPurchaseInfo();
    }
  }, [isShowBuyNow]);

  const checkLastPurchasedTime = (id) => {
    const now = new Date();
    return parseInt(lastPurchasedTime) + 60 < now.getTime() / 1000;
  };

  const handleClickBuy = () => {
    if (!checkLastPurchasedTime()) {
      dispatch(openBuyNowCoolDownModal());
      return;
    }
    if (ids.length >= 10) {
      dispatch(openBuyNowLimitModal());
      return;
    }
    if (!isMatic) {
      dispatch(openConnectMaticModal());
      return;
    }
    if (account) {
      dispatch(
        openBuynowModal({
          id: currentCounts.collectionId,
          priceEth: currentCounts.basePrice,
        }),
      );
    } else {
      dispatch(openConnectMetamaskModal());
    }
  };

  const expirationDate = auction ? auction.endTime * 1000 : 0;

  return (
    <div id="product-details" className={cn('animate__animated animate__fadeIn', styles.fullWidth)}>
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
          <div className={styles.timerWrapper}>
            <p className={styles.expirationDateText}>{expirationDateText}</p>
            <Timer className={styles.timer} expirationDate={expirationDate} />
          </div>
          <Button className={styles.buttonUtil} background="black" style={{ padding: 0 }}>
            <a
              href="https://espa.digitalax.xyz/"
              target="_blank"
              style={{ padding: '15px 16px', width: '100%' }}
            >
              WEAR IN GAME <br />
              <span className={styles.playESPA}>PLAY IN ESPA ESPORTS</span>
            </a>{' '}
          </Button>
        </div>
      )}
      {activeTab > 0 && (
        <>
          <p className={styles.priceWrapper}>
            <span className={styles.priceMono}>{currentCounts.basePrice / 10 ** 18} $MONA</span>
          </p>
          <p className={styles.countInfo}>
            {currentCounts.sold > currentCounts.total ? currentCounts.total : currentCounts.sold} of{' '}
            {currentCounts.total}
          </p>
          <div className={styles.buttons}>
            <Button
              onClick={() => handleClickBuy()}
              className={styles.button}
              background="black"
              isDisabled={currentCounts.sold === currentCounts.total}
            >
              <span className={styles.buttonText}>
                {currentCounts.sold === currentCounts.total ? 'Sold Out' : 'Buy Now'}
              </span>
              {currentCounts.sold !== currentCounts.total && (
                <span className={styles.buttonGray}>(Pay in ETH or $MONA)</span>
              )}
            </Button>
            {activeItem === SHOW_FIRST_TAB && (
              <Button className={styles.buttonUtil} background="black" style={{ padding: 0 }}>
                <a
                  href="https://espa.digitalax.xyz/"
                  target="_blank"
                  style={{ padding: '15px 16px', width: '100%' }}
                >
                  WEAR IN GAME <br />
                  <span className={styles.playESPA}>PLAY IN ESPA ESPORTS</span>
                </a>{' '}
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
