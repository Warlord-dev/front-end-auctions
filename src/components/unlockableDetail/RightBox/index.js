import { openBuynowModal, openConnectMaticModal, openConnectMetamaskModal } from '@actions/modals.actions';
import { getChainId } from '@selectors/global.selectors';
import { getAccount } from '@selectors/user.selectors';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';

const RightBox = ({ details, id }) => {
  const dispatch = useDispatch();
  const [showHidden, setShowHidden] = useState(false);
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  const onUnlock = () => {
    if (!isMatic) {
      dispatch(openConnectMaticModal());
      return;
    }
    if (account) {
      dispatch(
        openBuynowModal({
          id: id,
          priceEth: 123,
        })
      );
    } else {
      dispatch(openConnectMetamaskModal());
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{details.title}</div>
      <div className={styles.body}>{details.body}</div>
      <div className={styles.price}>{details.price}</div>
      <div className={styles.actionGroup}>
        <button type="button" className={styles.unlockButton} onClick={onUnlock}>UNLOCK</button>
        {!showHidden ? (
          <Link type="button" href={`/paywall/hidden_content_1/${id}`}>
            <a className={styles.showHiddenButton}>
              SEE HIDDEN CONTENT
            </a>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default RightBox;
