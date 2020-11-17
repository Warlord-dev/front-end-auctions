/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import BigNumber from 'bignumber.js';
import Button from '@components/buttons/button';
import TextButton from '@components/buttons/text-button';
import Timer from '@components/timer';
import {
  openRaiseModal, openWithdrawModal, openPlaceBidModal, openConnectMetamaskModal,
} from '@actions/modals.actions';
import { HISTORY_BID_PLACED_EVENT, HISTORY_BID_WITHDRAWN_EVENT } from '@constants/history.constants';
import { convertToEth } from '@helpers/price.helpers';
import { getAuctionById } from '@selectors/auction.selectors';
import { getHistoryByTokenId } from '@selectors/history.selectors';
import { getAccount } from '@selectors/user.selectors';
import { getExchangeRateETH, getMinBidIncrement, getBidWithdrawalLockTime } from '@selectors/global.selectors';

import styles from './styles.module.scss';

const ImportantProductInformation = ({
  clothesId, estimateApyText, buttonTextPlace, buttonTextRaise,
  buttonTextWithdraw, expirationDateText, styleTypeBlock, hintText,
}) => {

  const dispatch = useDispatch();
  const account = useSelector(getAccount);

  const auction = useSelector(getAuctionById(clothesId));
  const history = useSelector(getHistoryByTokenId(clothesId));
  const exchangeRateETH = useSelector(getExchangeRateETH);
  const minBidIncrement = useSelector(getMinBidIncrement);
  const bidWithdrawalLockTime = useSelector(getBidWithdrawalLockTime);
  const [isShowHint, setIsShowHint] = useState(false);


  if (!auction) {
    return null;
  }

  const priceEth = convertToEth(auction.topBid);
  const minBid = new BigNumber(priceEth).plus(new BigNumber(minBidIncrement));
  const expirationDate = auction.endTime * 1000;
  const estimateApy = (0).toFixed(2); // TODO::

  const sortedHistory = history.filter((item) => account
  && item.bidder
   && item.bidder.id.toLowerCase() === account.toLowerCase() && [HISTORY_BID_WITHDRAWN_EVENT, HISTORY_BID_PLACED_EVENT]
    .includes(item.eventName))
    .sort((a, b) => b.timestamp - a.timestamp);

  let isMakeBid = false;
  let canShowWithdrawBtn = false;
  let withdrawValue = 0;

  if (sortedHistory.length) {

    const lastEvent = sortedHistory[0];

    if (lastEvent.eventName === HISTORY_BID_PLACED_EVENT) {

      isMakeBid = true;

      const timeDiff = Date.now() - lastEvent.timestamp * 1000;

      if (timeDiff > 0 && timeDiff / 1000 >= bidWithdrawalLockTime) {
        canShowWithdrawBtn = true;
      }

      withdrawValue = lastEvent.value;

    }

  }

  const handleClickPlaceBid = () => {
    if (account) {
      dispatch(openPlaceBidModal({ id: clothesId, priceEth }));
    } else {
      dispatch(openConnectMetamaskModal());
    }
  };

  const handleClickRaiseBid = () => {
    dispatch(openRaiseModal({ id: clothesId, priceEth, withdrawValue: convertToEth(withdrawValue) }));
  };

  const handleClickWithdrawBid = () => {
    dispatch(openWithdrawModal({ id: clothesId, withdrawValue: convertToEth(withdrawValue) }));
  };

  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateETH;
    return (Math.trunc(priceUsd * 100) / 100).toLocaleString('en');
  };

  return (
    <div className={cn({
      [styles.smallWhite]: styleTypeBlock === 'smallWhite',
      [styles.largeTransparent]: styleTypeBlock === 'largeTransparent',
    })}
    >
      <div className={styles.leftWrapper}>
        <p className={styles.priceWrapper}>
          <span className={styles.priceEth}>{priceEth} E</span>
          <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
        </p>
        {/* <p className={styles.estimateWrapper}>
          <span className={styles.estimateApy}>{estimateApy}%</span>
          <span className={styles.estimateApyTextWrapper}>
            <a href="" className={styles.estimateApyText}>{estimateApyText}</a>
            <span
              onMouseEnter={() => setIsShowHint(true)}
              onMouseLeave={() => setIsShowHint(false)}
              className={styles.questionMark}
            >
              ?
            </span>
          </span>
          {isShowHint && <span className={styles.hint}>{hintText}</span>}
        </p> */}
      </div>
      <div className={styles.footerBoxRight}>
        <Timer className={styles.timer} expirationDate={expirationDate} />
        <p className={styles.expirationDateText}>{expirationDateText}</p>
        {isMakeBid ? (
          <Button onClick={() => handleClickRaiseBid()} className={styles.button} background="black">
            <span className={styles.buttonText}>{buttonTextRaise}</span>
            {styleTypeBlock === 'largeTransparent' && (
              <span className={styles.buttonGray}>(need min {minBid.toString(10)}E to compete)</span>
            )}
          </Button>
        ) : (
          <Button onClick={() => handleClickPlaceBid()} className={styles.button} background="black">
            <span className={styles.buttonText}>{buttonTextPlace}</span>
            {styleTypeBlock === 'largeTransparent' && (
              <span className={styles.buttonGray}>(need min {minBid.toString(10)}E to compete)</span>
            )}
          </Button>
        )}
        {canShowWithdrawBtn && (
          <div className={styles.wrapperButtonWithdraw}>
            <TextButton onClick={() => handleClickWithdrawBid()}>
              {buttonTextWithdraw}
            </TextButton>
          </div>
        )}
      </div>
    </div>
  );
};


ImportantProductInformation.propTypes = {
  clothesId: PropTypes.string.isRequired,
  estimateApyText: PropTypes.string,
  buttonTextPlace: PropTypes.string,
  buttonTextRaise: PropTypes.string,
  buttonTextWithdraw: PropTypes.string,
  expirationDateText: PropTypes.string,
  styleTypeBlock: PropTypes.oneOf(['smallWhite', 'largeTransparent']),
  hintText: PropTypes.string,
};

ImportantProductInformation.defaultProps = {
  estimateApyText: 'Estimate APY',
  buttonTextPlace: 'Place a Bid',
  buttonTextRaise: 'Raise a Bid',
  buttonTextWithdraw: 'Withdraw a Bid',
  expirationDateText: 'Time left',
  styleTypeBlock: 'smallWhite',
  hintText: `APY estimated based on the current total staked value across each of the $MONA 
  reward pools and current highest bid value of the NFT.`,
};


export default ImportantProductInformation;
