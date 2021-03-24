import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import bidActions from '@actions/bid.actions';
import InputWithArrows from '@components/input-with-arrows';
import { closeRaiseModal } from '@actions/modals.actions';
import { getModalParams } from '@selectors/modal.selectors';
import { getMinBidIncrement, getMonaPerEth, getChainId } from '@selectors/global.selectors';

import styles from './styles.module.scss';

const ModalRaiseBid = ({ className, title, text, textForSelect, buttonText, yourBidText }) => {
  const dispatch = useDispatch();
  const requests = useRef([]);
  const { id, priceEth, withdrawValue } = useSelector(getModalParams);
  const minBidIncrement = useSelector(getMinBidIncrement);
  const monaPerEth = useSelector(getMonaPerEth);
  const minBid = new BigNumber(priceEth).plus(new BigNumber(minBidIncrement));
  const chainId = useSelector(getChainId);
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  const [inputPriceMona, setInputPriceMona] = useState(minBid);
  const [showError, setShowError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClose = () => {
    dispatch(closeRaiseModal());
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
        .then(() => handleClose())
        .catch((e) => {
          setShowError(e.message);
          setIsDisabled(false);
        });
    });
  };

  useEffect(
    () => () => {
      requests.current.forEach((request) => request.unsubscribe());
      requests.current = [];
    },
    []
  );

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} text={text} className={className}>
          <div className={styles.footer}>
            <p>
              <span className={styles.footerSubtitle}>{yourBidText}</span>
              <span className={styles.footerSubtitleValue}>{withdrawValue} MONA</span>
            </p>
            <p className={styles.caption}>
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
                background="black"
                onClick={() => handleClick()}
                className={styles.button}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalRaiseBid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.array,
  textForSelect: PropTypes.string,
  yourBidText: PropTypes.string,
  buttonText: PropTypes.string,
};

ModalRaiseBid.defaultProps = {
  className: '',
  title: 'Raise Bid',
  // eslint-disable-next-line max-len
  text: [
    'Your MONA will be escrowed into a Smart Contract until the live auction ends or you choose to withdraw it. ',
    'If you are successful in winning the auction (i.e. the highest bidder at auction end) then your bidded MONA will be transferred to the designer’s account. If you are unsuccessful (i.e. not highest bidder at auction end) then they will be released back to your connected wallet.',
  ],
  yourBidText: 'Your Bid:',
  textForSelect: 'Minimum Bid:',
  buttonText: 'RAISE BID',
};

export default ModalRaiseBid;
