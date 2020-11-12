import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';
import Button from '@components/buttons/button';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { INDEX_PATH } from '@constants/router-constants';

import { openModal } from '@actions/modals.actions';
import Logo from './logo';
import styles from './styles.module.scss';


const HeaderTopLine = ({
  className, isShowStaking, buttonText, linkText,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.toJS());
  const { isSignIn, userPhoto, userHashAddress } = user;

  const [isShowLogOut, setIsShowLogOut] = useState(false);

  const handleClick = () => {
    dispatch(openModal('isShowModalConnectMetamask', 'hideScroll'));
  };

  return (
    <div className={cn(className, styles.wrapper)}>
      <Logo />
      <div className={styles.rightBox}>
        {isShowStaking && (
          <Link href={INDEX_PATH}>
            <a className={styles.link}>{linkText}</a>
          </Link>
        )}
        {isSignIn ? (
          <div className={styles.buttonWrapper}>
            <SmallPhotoWithText designerPhoto={userPhoto} hashAddress={userHashAddress} className={styles.hashAddress}>
              <button className={styles.arrowBottom} onClick={() => setIsShowLogOut(!isShowLogOut)}>
                <img className={styles.arrowBottomImg} src="/images/icons/arrow-bottom.svg" alt="arrow-bottom" />
              </button>
            </SmallPhotoWithText>
            {isShowLogOut && <button className={styles.logOut}>Logout</button>}
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
