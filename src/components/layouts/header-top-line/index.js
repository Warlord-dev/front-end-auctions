import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '@components/buttons/button';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getAccount, getAccountPhoto } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { openConnectMetamaskModal } from '@actions/modals.actions';
import accountActions from '@actions/user.actions';
import Logo from './logo';
import styles from './styles.module.scss';


const HeaderTopLine = ({
  className, isShowStaking, buttonText, linkText,
}) => {

  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const accountPhoto = useSelector(getAccountPhoto);
  const chainId = useSelector(getChainId);

  const handleClick = () => dispatch(openConnectMetamaskModal());

  const [isShowLogOut, setIsShowLogOut] = useState(false);

  const handleLogoutClick = () => {
    setIsShowLogOut(false);
    dispatch(accountActions.logout());
  };

  return (
    <div className={cn(className, styles.wrapper)}>
      <Logo />
      <div className={styles.rightBox}>
        {isShowStaking && (
          <a
            href="http://staking.digitalax.xyz/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            {linkText}
          </a>
        )}
        {account ? (
          <div className={styles.buttonWrapper}>
            <SmallPhotoWithText photo={accountPhoto} address={`${account}(${chainId})`} className={styles.hashAddress}>
              <button className={styles.arrowBottom} onClick={() => setIsShowLogOut(!isShowLogOut)}>
                <img className={styles.arrowBottomImg} src="./images/icons/arrow-bottom.svg" alt="arrow-bottom" />
              </button>
            </SmallPhotoWithText>
            {isShowLogOut && <button onClick={() => handleLogoutClick()} className={styles.logOut}>Logout</button>}
          </div>
        ) : (
          <Button onClick={() => handleClick()}>{buttonText}</Button>
        )}
      </div>
    </div>
  );
};

HeaderTopLine.propTypes = {
  className: PropTypes.string,
  isShowStaking: PropTypes.bool,
  buttonText: PropTypes.string,
  linkText: PropTypes.string,
};

HeaderTopLine.defaultProps = {
  className: '',
  isShowStaking: true,
  buttonText: 'Connect Wallet',
  linkText: 'Staking',
};

export default HeaderTopLine;
