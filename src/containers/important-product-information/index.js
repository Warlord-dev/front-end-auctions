import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@components/buttons/button';
import TextButton from '@components/buttons/text-button';
import Timer from '@components/timer';
import { openModal } from '@actions/modals.actions';
import { setValueInUserReducer } from '@actions/user.actions';
import { getSumFloatNumber } from '@helpers/prise.helpers';
import { STEP } from '@constants/price-constants';
import styles from './styles.module.scss';

const ImportantProductInformation = ({
  clothesId, priceEth, estimateApyText, estimateApy, buttonTextPlace, buttonTextRaise,
  buttonTextWithdraw, expirationDate, expirationDateText, styleTypeBlock,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.toJS());
  const exchangeRateE = useSelector((state) => state.global.toJS().exchangeRateETH);
  const { isSignIn, bids } = user;
  const isMakeBid = bids.some((item) => item.clothesId === clothesId);


  const handleClickPlaceBid = () => {
    dispatch(setValueInUserReducer('activeProductInModal', { priceEth, clothesId }));

    if (isSignIn) {
      dispatch(openModal('isShowModalPlaceBid', 'hideScroll'));
    } else {
      dispatch(openModal('isShowModalConnectMetamask', 'hideScroll'));
    }
  };

  const handleClickRaiseBid = () => {
    dispatch(setValueInUserReducer('activeProductInModal', { priceEth, clothesId }));
    dispatch(openModal('isShowModalRaiseBid', 'hideScroll'));
  };

  const handleClickWithdrawBid = () => {
    dispatch(setValueInUserReducer('activeProductInModal', { priceEth, clothesId }));
    dispatch(openModal('isShowModalWithdrawBid', 'hideScroll'));
  };


  const getPriceUsd = (valueEth) => {
    const priceUsd = valueEth * exchangeRateE;
    return (Math.trunc(priceUsd * 100) / 100).toLocaleString('en');
  };

  return (
    <div className={cn({
      [styles.smallWhite]: styleTypeBlock === 'smallWhite',
      [styles.largeTransparent]: styleTypeBlock === 'largeTransparent',
    })}
    >
      <div>
        <p className={styles.priceWrapper}>
          <span className={styles.priceEth}>{priceEth} E</span>
          <span className={styles.priceUsd}>(${getPriceUsd(priceEth)})</span>
        </p>
        <p className={styles.estimateWrapper}>
          <span className={styles.estimateApy}>{estimateApy}%</span>
          <span className={styles.estimateApyTextWrapper}>
            <a href="" className={styles.estimateApyText}>{estimateApyText}</a>
            <span className={styles.questionMark}>?</span>
          </span>
        </p>
      </div>
      <div className={styles.footerBoxRight}>
        <Timer className={styles.timer} expirationDate={expirationDate} />
        <p className={styles.expirationDateText}>{expirationDateText}</p>
        {isMakeBid ? (
          <Button onClick={() => handleClickRaiseBid()} className={styles.button} background="black">
            <span className={styles.buttonText}>{buttonTextRaise}</span>
            {styleTypeBlock === 'largeTransparent' && (
              <span className={styles.buttonGray}>(need min {getSumFloatNumber(priceEth, STEP)} to compete)</span>
            )}
          </Button>
        ) : (
          <Button onClick={() => handleClickPlaceBid()} className={styles.button} background="black">
            <span className={styles.buttonText}>{buttonTextPlace}</span>
            {styleTypeBlock === 'largeTransparent' && (
              <span className={styles.buttonGray}>(need min {getSumFloatNumber(priceEth, STEP)} to compete)</span>
            )}
          </Button>
        )}
        {isMakeBid && (
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
  clothesId: PropTypes.string,
  priceEth: PropTypes.number,
  estimateApyText: PropTypes.string,
  estimateApy: PropTypes.number,
  buttonTextPlace: PropTypes.string,
  buttonTextRaise: PropTypes.string,
  buttonTextWithdraw: PropTypes.string,
  expirationDate: PropTypes.string,
  expirationDateText: PropTypes.string,
  styleTypeBlock: PropTypes.oneOf(['smallWhite', 'largeTransparent']),
};

ImportantProductInformation.defaultProps = {
  clothesId: '',
  priceEth: null,
  estimateApyText: 'Estimate APY',
  estimateApy: null,
  buttonTextPlace: 'Place a Bid',
  buttonTextRaise: 'Raise a Bid',
  buttonTextWithdraw: 'Withdraw a Bid',
  expirationDate: '',
  expirationDateText: 'Time left',
  styleTypeBlock: 'smallWhite',
};


export default ImportantProductInformation;
