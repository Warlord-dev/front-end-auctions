import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeBuyNowLimitModal } from '@actions/modals.actions';
import styles from './styles.module.scss';

const BuyNowLimit = ({ className, title, buttonText1 }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeBuyNowLimitModal());
  };

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          titleStyle={styles.textCenter}
          className={className}
        >
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>
                For fairer distribution we have implemented some caps on purchasing amounts. You have reached the max level of purchases for this item and sale under your currently connected wallet. 
              </span>
            </p>
            <div className={styles.selectWrapper}>
              <Button
                background="black"
                onClick={() => handleClose()}
                className={styles.button}
              >
                {buttonText1}
              </Button>
            </div>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

BuyNowLimit.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

BuyNowLimit.defaultProps = {
  className: '',
  title: 'MAX OUT. START THE GAME AGAIN! ',
  buttonText1: 'ACCEPT THE QUEST',
};

export default BuyNowLimit;