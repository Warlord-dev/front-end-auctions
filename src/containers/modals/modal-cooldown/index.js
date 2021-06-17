import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeBuyNowCooldownModal } from '@actions/modals.actions';
import styles from './styles.module.scss';

const BuyNowCooldown = ({ className, title, buttonText1 }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeBuyNowCooldownModal());
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
                For fairer distribution we have implemented slow mode for reducing twitch finger purchasing. Please wait 60 seconds before buying again! 
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

BuyNowCooldown.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

BuyNowCooldown.defaultProps = {
  className: '',
  title: 'SLOW MODE ENABLED! ',
  buttonText1: 'ACCEPT THE QUEST',
};

export default BuyNowCooldown;