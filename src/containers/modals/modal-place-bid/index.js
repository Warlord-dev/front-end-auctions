import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import InputWithArrows from '@components/input-with-arrows';
import { closeModal } from '@actions/modals.actions';
import { setValueInUserReducer } from '@actions/user.actions';
import { setValueInClothesInfoReducer } from '@actions/clothes-info.actions';
import { getSumFloatNumber } from '@helpers/prise.helpers';
import { STEP } from '@constants/price-constants';
import styles from './styles.module.scss';


const ModalPlaceBid = ({
  className, title, text, textForSelect, buttonText, textError,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.toJS());
  const clothesInfo = useSelector((state) => state.clothesInfo.toJS());
  const { activeValueEthInInputInModal, bids, activeProductInModal: { priceEth, clothesId } } = user;
  const [showError, setShowError] = useState(false);

  const currentClothesInfo = clothesInfo.find((item) => item.clothesId === clothesId);


  const handleClose = () => {
    dispatch(closeModal('isShowModalPlaceBid', 'addScroll'));
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
      setShowError(false);

      handleClose();
    } else {
      setShowError(true);
    }

  };

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} text={text} className={className}>
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>{textForSelect}</span>
              <span> {getSumFloatNumber(priceEth, STEP)}ETH</span>
            </p>
            <div className={styles.selectWrapper}>
              <div>
                <InputWithArrows className={styles.inputWithArrows} value={getSumFloatNumber(priceEth, STEP)} />
                {showError && <p className={styles.error}>{textError}</p>}
              </div>
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

ModalPlaceBid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.array,
  textForSelect: PropTypes.string,
  buttonText: PropTypes.string,
  textError: PropTypes.string,
};

ModalPlaceBid.defaultProps = {
  className: '',
  title: 'Place a Bid',
  // eslint-disable-next-line max-len
  text: ['Your ETH will be escrowed into a Smart Contract until the live auction ends or you choose to withdraw it. If another bidder outbids you, your ETH will be immediatley transferred back into your wallet.', 'After placing a bid, you will be unable to withdraw for 20 minutes.'],
  textForSelect: 'Minimum Bid:',
  buttonText: 'PLACE A BID',
  textError: 'You must bid at least 0.05ETH higher than the current highest bid',
};

export default ModalPlaceBid;
