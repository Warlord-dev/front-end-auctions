import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeMaxOutModal } from '@actions/modals.actions';
import styles from './styles.module.scss';

const ModalSlowMode = ({ className, title, buttonText }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeMaxOutModal());
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
          <p className={styles.description}>
            For fairer distribution we have implemented some caps on purchasing amounts. You have reached the max level of purchases for this item and sale under your currently connected wallet.
          </p>
          <a href="https://espa.digitalax.xyz/">
            <Button background="black" className={styles.button}>
              {buttonText}
            </Button>
          </a>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalSlowMode.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

ModalSlowMode.defaultProps = {
  className: '',
  title: 'MAX OUT. START THE GAME AGAIN!',
  buttonText: 'ACCEPT THE QUEST',
};

export default ModalSlowMode;
