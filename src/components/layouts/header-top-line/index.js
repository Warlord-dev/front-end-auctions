import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';
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
        {/* <Link href="/">
          <a className={styles.link}>Auctions</a>
        </Link>
        <Link href="/sold">
          <a className={styles.link}>Previously Sold</a>
        </Link> */}
        {/* <a
          href="https://pode.digitalax.xyz/"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          PODE
        </a> */}
        <a
          href="https://medium.com/@digitalax"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <a
          href="https://community.digitalax.xyz/"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Forum
        </a>
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
        <Link href="/global">
          <a className={styles.link}>Global Designer Network</a>
        </Link>
        {account ? (
          <div className={styles.buttonWrapper}>
            <SmallPhotoWithText
              photo={accountPhoto}
              address={`${account}(${chainId})`}
              className={styles.hashAddress}
            >
              <button
                className={styles.arrowBottom}
                onClick={() => setIsShowLogOut(!isShowLogOut)}
              >
                <img
                  className={styles.arrowBottomImg}
                  src="./images/icons/arrow-bottom.svg"
                  alt="arrow-bottom"
                />
              </button>
            </SmallPhotoWithText>
            {isShowLogOut && (
              <button
                onClick={() => handleLogoutClick()}
                className={styles.logOut}
              >
                Logout
              </button>
            )}
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
