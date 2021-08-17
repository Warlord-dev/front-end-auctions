import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import BigNumber from 'bignumber.js';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import InputWithArrows from '@components/input-with-arrows';
import { closePlaceBidModal } from '@actions/modals.actions';
import bidActions from '@actions/bid.actions';
import { getModalParams } from '@selectors/modal.selectors';
import { utils as ethersUtils } from 'ethers';
import {
  getMinBidIncrement,
  getBidWithdrawalLockTime,
  getMonaPerEth,
  getChainId,
} from '@selectors/global.selectors';
import styles from './styles.module.scss';

const ModalPlaceBid = ({ className, title, textForSelect, buttonText }) => {
  const dispatch = useDispatch();
  const requests = useRef([]);

  const { id, priceEth } = useSelector(getModalParams);
  const minBidIncrement = useSelector(getMinBidIncrement);
  const bidWithdrawalLockTime = useSelector(getBidWithdrawalLockTime);

  const monaPerEth = useSelector(getMonaPerEth);
  const minBid = new BigNumber(priceEth).plus(new BigNumber(minBidIncrement));
  const chainId = useSelector(getChainId);
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  const [inputPriceMona, setInputPriceMona] = useState(minBid);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showError, setShowError] = useState(null);
  const [approved, setApproved] = useState(false);

  const handleClose = () => {
    dispatch(closePlaceBidModal());
  };

  const handleClick = () => {
    if (minBid.toNumber() > Number(inputPriceMona)) {
      setShowError(`You must bid at least ${minBidIncrement} higher than the current highest bid`);
      return;
    }
    setShowError(null);
    setIsDisabled(true);
    dispatch(bidActions.bid(id, Number(inputPriceMona), monaPerEth)).then((request) => {
      requests.current.push(request);
      request.promise
        .then(() => {
          if (approved === false) {
            setApproved(true);
            setIsDisabled(false);
          } else {
            handleClose();
          }
        })
        .catch((e) => {
          setShowError(e.message);
          setIsDisabled(false);
        });
    });
  };
  useEffect(() => {
    function getMonaApproval() {
      dispatch(bidActions.getAllowanceForAcution()).then((val) => {
        const jsAllowedValue = parseFloat(ethersUtils.formatEther(val));
        console.log({jsAllowedValue})
        if (jsAllowedValue < 10000000000) setApproved(false);
        else setApproved(true);
      });
    }
    getMonaApproval();
  }, [inputPriceMona]);

  useEffect(() => {
    return () => {
      requests.current.forEach((request) => request.unsubscribe());
      requests.current = [];
    };
  }, []);

  const hours = Math.trunc(bidWithdrawalLockTime / 60 / 60);
  const minutes = hours ? bidWithdrawalLockTime % 60 : Math.trunc(bidWithdrawalLockTime / 60);

  const hoursTextPrefix = hours === 1 ? 'hour' : 'hours';
  const minutesTextPrefix = minutes === 1 ? 'minute' : 'minutes';

  const hoursText = hours ? `${hours} ${hoursTextPrefix}` : '';
  const minutesText = minutes ? `${minutes} ${minutesTextPrefix}` : '';

  const text = [
    `Your MONA will be escrowed into a Smart Contract until the live auction ends or you choose to withdraw it. 
      If another bidder outbids you, your MONA will be immediatley transferred back into your wallet.`,
    `After placing a bid, you will be unable to withdraw for ${hoursText} ${minutesText}`,
  ];

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} text={text} className={className}>
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>{textForSelect}</span>
              <span> {minBid.toString(10)} MONA</span>
            </p>
            <div className={styles.selectWrapper}>
              <div>
                <InputWithArrows
                  minBidIncrement={minBidIncrement}
                  onChange={setInputPriceMona}
                  className={styles.inputWithArrows}
                  value={inputPriceMona}
                />
                {showError && <p className={styles.error}>{showError}</p>}
              </div>
              <Button
                isDisabled={isDisabled || !isMatic}
                background="pink"
                onClick={() => handleClick()}
                className={styles.button}
              >
                {approved ? buttonText : 'APPROVE $MONA'}
              </Button>
            </div>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalPlaceBid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  textForSelect: PropTypes.string,
  buttonText: PropTypes.string,
};

ModalPlaceBid.defaultProps = {
  className: '',
  title: 'Place a Bid',
  textForSelect: 'Minimum Bid:',
  buttonText: 'PLACE A BID',
};

export default ModalPlaceBid;
