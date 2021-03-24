import React, { memo, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeWithdrawModal } from '@actions/modals.actions';
import bidActions from '@actions/bid.actions';
import { getModalParams } from '@selectors/modal.selectors';
import { getMonaPerEth, getChainId } from '@selectors/global.selectors';
import styles from './styles.module.scss';

const ModalWithdrawBid = ({ className, title, text, yourBidText, buttonText }) => {
  const dispatch = useDispatch();
  const requests = useRef([]);
  const [showError, setShowError] = useState(null);
  const { id, withdrawValue } = useSelector(getModalParams);
  const [isDisabled, setIsDisabled] = useState(false);
  const monaPerEth = useSelector(getMonaPerEth);
  const chainId = useSelector(getChainId);
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  const handleClose = () => {
    dispatch(closeWithdrawModal());
  };

  const handleClick = () => {
    setShowError(null);
    setIsDisabled(true);
    dispatch(bidActions.withdraw(id, withdrawValue)).then((request) => {
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
        <Modal
          className={cn(styles.modal, className)}
          onClose={() => handleClose()}
          title={title}
          text={text}
        >
          <div className={styles.footer}>
            <Button
              isDisabled={isDisabled || !isMatic}
              className={styles.button}
              background="black"
              onClick={() => handleClick()}
            >
              {buttonText}
            </Button>
            <p className={styles.caption}>{yourBidText}</p>
            <p className={styles.value}>{withdrawValue} MONA</p>
          </div>
          {showError && <p className={styles.error}>{showError}</p>}
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalWithdrawBid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.array,
  yourBidText: PropTypes.string,
  buttonText: PropTypes.string,
};

ModalWithdrawBid.defaultProps = {
  className: '',
  title: 'Withdraw a Bid',
  text: [
    'Your MONA will be withdrawn and your bid will no longer be active. You can place a new bid at anytime before the auction ends.',
  ],
  yourBidText: 'Your Bid:',
  buttonText: 'WITHDRAW BID',
};

export default memo(ModalWithdrawBid);
