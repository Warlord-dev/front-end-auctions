import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import InputWithArrows from '@components/input-with-arrows';
import { closeModal } from '@actions/modals.actions';
import { setValueInUserReducer } from '@actions/user.actions';
import { setValueInClothesInfoReducer } from '@actions/clothes-info.actions';
import { getSumFloatNumber } from '@helpers/prise.helpers';
import { STEP } from '@constants/price-constants';
import styles from './styles.module.scss';


const ModalRaiseBid = ({
  className, title, text, textForSelect, buttonText, yourBidText,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.toJS());
  const clothesInfo = useSelector((state) => state.clothesInfo.toJS());
  const { activeValueEthInInputInModal, bids, activeProductInModal: { clothesId, priceEth } } = user;
  const lastBid = bids.filter((item) => item.clothesId === clothesId).sort((a, b) => b.valueBid - a.valueBid)[0];

  const currentClothesInfo = clothesInfo.find((item) => item.clothesId === clothesId);

  const handleClose = () => {
    dispatch(closeModal('isShowModalRaiseBid', 'addScroll'));
    dispatch(setValueInUserReducer('activeProductInModal', {}));
    dispatch(setValueInUserReducer('activeValueEthInInputInModal', ''));
  };

  const handleClick = () => {
    if (+activeValueEthInInputInModal >= getSumFloatNumber(priceEth, STEP)) {
      bids.push({
        clothesId,
        valueBid: +activeValueEthInInputInModal,
        dateAndTameBids: Date.now(),
      });
      dispatch(setValueInUserReducer('bids', bids));
    }

    const newClothesInfo = clothesInfo.reduce((accumulator, item) => {
      if (item.clothesId === currentClothesInfo.clothesId) {
        item.priceEth = +activeValueEthInInputInModal;
        accumulator.push(item);
        return accumulator;
      }
      accumulator.push(item);

      return accumulator;
    }, []);

    dispatch(setValueInClothesInfoReducer('', newClothesInfo));
    handleClose();
  };

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} text={text} className={className}>
          <div className={styles.footer}>
            <p>
              <span className={styles.footerSubtitle}>{yourBidText}</span>
              <span className={styles.footerSubtitleValue}>{lastBid.valueBid} ETH</span>
            </p>
            <p className={styles.caption}>
              <span>{textForSelect}</span>
              <span> {getSumFloatNumber(priceEth, STEP)}ETH</span>
            </p>
            <div className={styles.selectWrapper}>
              <InputWithArrows className={styles.inputWithArrows} value={getSumFloatNumber(priceEth, STEP)} />
              <Button background="black" onClick={() => handleClick()} className={styles.button}>
                {buttonText}
              </Button>
            </div>
          </div>
        </Modal>,
        document.body,
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
  text: ['Your ETH will be escrowed into a Smart Contract until the live auction ends or you choose to withdraw it. ', 'If you are successful in winning the auction (i.e. the highest bidder at auction end) then your bidded ETH will be transferred to the designer’s account. If you are unsuccessful (i.e. not highest bidder at auction end) then they will be released back to your connected wallet.'],
  yourBidText: 'Your Bid:',
  textForSelect: 'Minimum Bid:',
  buttonText: 'RAISE BID',
};

export default memo(ModalRaiseBid);
