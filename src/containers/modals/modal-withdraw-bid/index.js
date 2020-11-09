import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeModal } from '@actions/modals.actions';
import { setValueInUserReducer } from '@actions/user.actions';
import { setValueInClothesInfoReducer } from '@actions/clothes-info.actions';
import styles from './styles.module.scss';


const ModalWithdrawBid = ({
  className, title, text, yourBidText, buttonText,
}) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.toJS());
  const clothesInfo = useSelector((state) => state.clothesInfo.toJS());
  const { bids, activeProductInModal: { clothesId } } = user;
  const lastBid = bids.filter((item) => item.clothesId === clothesId).sort((a, b) => b.valueBid - a.valueBid)[0];


  const handleClose = () => {
    dispatch(closeModal('isShowModalWithdrawBid', 'addScroll'));
  };

  const handleClick = () => {
    const bidsAfterRemoveLastBid = bids.filter((item) => item.valueBid !== lastBid.valueBid);
    const lastBidNew = bidsAfterRemoveLastBid.filter((item) => item.clothesId === clothesId).sort((a, b) => b.valueBid - a.valueBid)[0];

    const newClothesInfo = clothesInfo.reduce((accumulator, item) => {
      if (item.clothesId === lastBidNew.clothesId) {
        item.priceEth = lastBidNew.valueBid;
        accumulator.push(item);
        return accumulator;
      }
      accumulator.push(item);

      return accumulator;
    }, []);

    dispatch(setValueInUserReducer('bids', bidsAfterRemoveLastBid));
    dispatch(setValueInClothesInfoReducer('', newClothesInfo));
    handleClose();
  };

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
            <Button className={styles.button} background="black" onClick={() => handleClick()}>
              {buttonText}
            </Button>
            <p className={styles.caption}>{yourBidText}</p>
            <p className={styles.value}>{lastBid.valueBid} ETH</p>
          </div>
        </Modal>,
        document.body,
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
  text: ['Your ETH will be withdrawn and your bid will no longer be active. You can place a new bid at anytime before the auction ends.'],
  yourBidText: 'Your Bid:',
  buttonText: 'WITHDRAW BID',
};

export default memo(ModalWithdrawBid);
