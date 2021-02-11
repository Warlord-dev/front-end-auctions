import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import Notification from '@components/notification';

import { closeConnectMetamaskModal, closeNotInstalledMetamask } from '@actions/modals.actions';
import userActions from '@actions/user.actions';

import styles from './styles.module.scss';

const ModalConnectWallet = ({
  className, title, textForIcon, icon, buttonText,
}) => {
  const dispatch = useDispatch();
  const isShowNotificationConnectMetamask = useSelector((state) => state.modals.get('isShowNotificationConnectMetamask'));

  const handleClose = () => {
    dispatch(closeConnectMetamaskModal());
    dispatch(closeNotInstalledMetamask());
  };

  const handleClick = () => dispatch(userActions.tryToLogin());

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} className={className}>
          <div className={styles.modalItem}>
            <div className={styles.modalLeftBox}>
              <span className={styles.modalsTextForIcon}>{textForIcon}</span>
              <img className={styles.modalIcon} src={icon} alt="metamask" />
            </div>
            <Button className={styles.modalButton} background="black" onClick={() => handleClick()}>
              {buttonText}
            </Button>
            {isShowNotificationConnectMetamask && (
              <Notification
                text={['You have to install the metamask extension.']}
                className={styles.notificationBox}
              />
            )}
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );


};

ModalConnectWallet.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  textForIcon: PropTypes.string,
  icon: PropTypes.string,
  buttonText: PropTypes.string,
};

ModalConnectWallet.defaultProps = {
  className: '',
  title: 'Connect Metamask wallet',
  textForIcon: 'Metamask',
  icon: './images/icons/metamask.svg',
  buttonText: 'Connect Wallet',
};

export default ModalConnectWallet;
