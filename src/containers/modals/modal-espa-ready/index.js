import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { utils as ethersUtils } from 'ethers';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeESPAReadyModal } from '@actions/modals.actions';
import styles from './styles.module.scss';

const ModalESPAReady = ({ className, title, buttonText }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeESPAReadyModal());
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
          <p className={styles.subTitle}>You just got skinned!</p>
          <p className={styles.description}>
            Take Your Digital Fashion In-game. Compete in ESPA’s Casual Play to earn $MONA.
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

ModalESPAReady.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

ModalESPAReady.defaultProps = {
  className: styles.espamodal,
  title: 'Are you ready to try it on?',
  buttonText: 'GO TO ESPA',
};

export default ModalESPAReady;
