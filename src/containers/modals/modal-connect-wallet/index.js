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

const ModalConnectWallet = ({ className, title }) => {
  const dispatch = useDispatch();
  const isShowNotificationConnectMetamask = useSelector((state) =>
    state.modals.get('isShowNotificationConnectMetamask')
  );

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
            <span className={styles.modalsTextForIcon}>Metamask</span>
            <img className={styles.modalIcon} src="/images/icons/metamask.svg" alt="metamask" />
            {isShowNotificationConnectMetamask && (
              <Notification
                text={['You have to install the metamask extension.']}
                className={styles.notificationBox}
              />
            )}
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalConnectWallet.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ModalConnectWallet.defaultProps = {
  className: '',
  title: 'Connect Wallet',
};

export default ModalConnectWallet;
