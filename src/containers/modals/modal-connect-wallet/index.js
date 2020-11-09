import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeModal, openModal } from '@actions/modals.actions';
import { setValueInUserReducer } from '@actions/user.actions';
import styles from './styles.module.scss';


const ModalConnectWallet = ({
  className, title, textForIcon, icon, buttonText,
}) => {
  const dispatch = useDispatch();
  const activeProductInModal = useSelector((state) => state.user.toJS().activeProductInModal);

  const handleClose = () => {
    dispatch(closeModal('isShowModalConnectMetamask', 'addScroll'));
    dispatch(setValueInUserReducer('activeProductInModal', {}));
  };

  const handleClick = () => {
    dispatch(setValueInUserReducer('isSignIn', true));
    dispatch(closeModal('isShowModalConnectMetamask', 'addScroll'));

    if (Object.keys(activeProductInModal).length) {
      dispatch(openModal('isShowModalPlaceBid', 'hideScroll'));
    }
  };

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} className={cn(className, styles.modal)}>
          <div className={styles.modalItem}>
            <div className={styles.modalLeftBox}>
              <span className={styles.modalsTextForIcon}>{textForIcon}</span>
              <img className={styles.modalIcon} src={icon} alt="metamask" />
            </div>
            <Button className={styles.modalButton} background="black" onClick={() => handleClick()}>
              {buttonText}
            </Button>
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
  icon: '/images/icons/metamask.svg',
  buttonText: 'Connect Wallet',
};

export default memo(ModalConnectWallet);
