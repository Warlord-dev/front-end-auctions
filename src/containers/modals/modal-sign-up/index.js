import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import Loader from '@components/loader';

import { closeSignupModal } from '@actions/modals.actions';
import userActions from '@actions/user.actions';

import { getAccount, getIsLoading } from '@selectors/user.selectors';

import styles from './styles.module.scss';
import { useSignMessage, useUserNameAvailable, useMyIP } from '@hooks/espa/user.hooks';

const ModalSignUp = ({ className, title, textForIcon, icon }) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const account = useSelector(getAccount);
  const isLoading = useSelector(getIsLoading);
  const signMsg = useSignMessage(account);
  const isUserNameAvailable = useUserNameAvailable(userName);
  let myIP = useMyIP();

  const handleClose = () => {
    dispatch(closeSignupModal());
  };

  const validateUserName = (username) => {
    const regEx = /^[A-Za-z0-9]*$/;
    return regEx.test(String(username));
  };

  const validateEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
  };

  const handleClick = () => {
    if (!signMsg) {
      if (!validateUserName(userName)) {
        toast('User ID must contains letters and numbers only!');
        return;
      }
      if (!validateEmail(email)) {
        toast('You have entered an invalid Email address!');
        return;
      }
    }
    dispatch(userActions.tryToSignup(account, userName, email, signMsg, myIP));
  };

  const userNameChanged = (username) => {
    setUserName(username);
  };

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          className={(className, styles.modalWrapper)}
        >
          <span>{`CURRENT ETH ADDRESS: ${account ? account : 'WALLET NOT CONNECTED'}`}</span>
          {signMsg === null ? (
            <Loader size="large" className={styles.loader} />
          ) : (
            <>
              {signMsg === '' &&
                (myIP === null ? (
                  <Loader size="large" className={styles.loader} />
                ) : (
                  <>
                    <div className={styles.inputItem}>
                      <label>USER ID</label>
                      <input value={userName} onChange={(e) => userNameChanged(e.target.value)} />
                      {!isUserNameAvailable && (
                        <p>That User ID is already taken. Please choose another one</p>
                      )}
                    </div>
                    <div className={styles.inputItem}>
                      <label>EMAIL</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </>
                ))}
              {isLoading ? (
                <Loader size="large" className={styles.loader} />
              ) : (
                <Button
                  className={styles.modalButton}
                  background="black"
                  onClick={() => handleClick()}
                >
                  {signMsg ? 'SIGN IN' : 'SIGN UP'}
                </Button>
              )}
            </>
          )}
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalSignUp.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  textForIcon: PropTypes.string,
  icon: PropTypes.string,
};

ModalSignUp.defaultProps = {
  className: '',
  title: 'CREATE AN ACCOUNT',
  textForIcon: 'Metamask',
  icon: './images/icons/metamask.svg',
};

export default ModalSignUp;
