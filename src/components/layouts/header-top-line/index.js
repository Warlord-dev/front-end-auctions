import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';
import Button from '@components/buttons/button';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getUser } from '@selectors/user.selectors';
import { getChainId } from '@selectors/global.selectors';
import { openConnectMetamaskModal } from '@actions/modals.actions';
import accountActions from '@actions/user.actions';

import Logo from './logo';
import styles from './styles.module.scss';
import { getEnabledNetworkByChainId, requestSwitchNetwork } from '@services/network.service';

const HeaderTopLine = ({ className, isShowStaking, buttonText, linkText }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const chainId = useSelector(getChainId);
  const [hamburger, setHamburger] = useState(false);
  const network = useMemo(() => {
    return getEnabledNetworkByChainId(chainId);
  }, [chainId]);

  const router = useRouter();
  const pathname = router.pathname;

  const isOnRightNetwork =
    pathname !== '/bridge' && pathname !== '/bridge/deposit'
      ? chainId === '0x89'
      : chainId === '0x1';

  const wrongNetworkText =
    pathname !== '/bridge' && pathname !== '/bridge/deposit'
      ? 'Please switch to Matic Network'
      : 'Please switch to Mainnet';

  if (!user) {
    dispatch(accountActions.checkStorageAuth());
  }

  const switchNetwork = async () => {
    const res = await requestSwitchNetwork();
    return res;
  }

  const handleClick = () => dispatch(openConnectMetamaskModal());

  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleProfileClick = () => {
    setIsShowMenu(false);
    Router.push('/profile');
  };
  const handleLogoutClick = () => {
    setIsShowMenu(false);
    dispatch(accountActions.logout());
  };

  return (
    <div className={cn(className, styles.wrapper)}>
      {!isOnRightNetwork && <p className={styles.notification}>{wrongNetworkText}</p>}
      <div className={styles.navWrapper}>
        <div className={styles.leftBox}>
          <Logo />
          <a href="https://marketplace.digitalax.xyz/" className={styles.backToMainNetButton}>
            Switch to Eth Mainnet
          </a>
        </div>
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
          <Link href="/bridge">
            <a className={styles.link}>Matic-Eth Bridge</a>
          </Link>
          <Link href="/swap">
            <a className={styles.link}>Token Swap</a>
          </Link>
          {network.alias !== 'matic' ? (
            <Button onClick={() => switchNetwork()}>Switch Network</Button>
          ) : null}
          {user ? (
            <div className={styles.buttonWrapper}>
              <SmallPhotoWithText
                photo={user.get('avatar') ? user.get('avatar') : './images/user-photo.svg'}
                address={user.get('username')}
                className={styles.hashAddress}
              >
                <button className={styles.arrowBottom} onClick={() => setIsShowMenu(!isShowMenu)}>
                  <img
                    className={styles.arrowBottomImg}
                    src="./images/icons/arrow-bottom.svg"
                    alt="arrow-bottom"
                  />
                </button>
              </SmallPhotoWithText>
              {isShowMenu && (
                <div className={styles.menuWrapper}>
                  <button onClick={() => handleProfileClick()} className={styles.menuButton}>
                    Profile
                  </button>
                  <button onClick={() => handleLogoutClick()} className={styles.menuButton}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button onClick={() => handleClick()}>{buttonText}</Button>
          )}
        </div>
        <div className={styles.mobileRightBox}>
          <button
            className={styles.hamburgerButton}
            type="button"
            onClick={() => setHamburger(!hamburger)}
          >
            <img src="/images/hamburger.png" />
          </button>
        </div>
      </div>
      {hamburger ? (
        <div className={styles.mobileMenu}>
          {user ? (
            <div className={styles.buttonWrapper}>
              <SmallPhotoWithText
                photo={user.get('avatar') ? user.get('avatar') : './images/user-photo.svg'}
                address={user.get('username')}
                className={styles.hashAddress}
              >
                <button className={styles.arrowBottom} onClick={() => setIsShowMenu(!isShowMenu)}>
                  <img
                    className={styles.arrowBottomImg}
                    src="./images/icons/arrow-bottom.svg"
                    alt="arrow-bottom"
                  />
                </button>
              </SmallPhotoWithText>
              {isShowMenu && (
                <div className={styles.menuWrapper}>
                  <button onClick={() => handleProfileClick()} className={styles.menuButton}>
                    Profile
                  </button>
                  <button onClick={() => handleLogoutClick()} className={styles.menuButton}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button onClick={() => handleClick()}>{buttonText}</Button>
          )}
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
          <Link href="/bridge">
            <a className={styles.link}>Matic-Eth Bridge</a>
          </Link>
          <Link href="/swap">
            <a className={styles.link}>Token Swap</a>
          </Link>
        </div>
      ) : null}
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
  isShowStaking: false,
  buttonText: 'SIGN IN',
  linkText: 'Staking',
};

export default HeaderTopLine;
