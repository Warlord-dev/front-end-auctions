import { openBuynowNftSubscriptionModal, openConnectMaticModal, openConnectMetamaskModal } from '@actions/modals.actions';
import { getChainId } from '@selectors/global.selectors';
import { getAccount } from '@selectors/user.selectors';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import api from '@services/api/api.service';

const RightBox = ({ details, id }) => {
  const dispatch = useDispatch();
  const [showHidden, setShowHidden] = useState(false);
  const [amountSold, setAmountSold] = useState(null);
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  useEffect(() => {
    const fetchSubscriptionOffer = async () => {
      const { digitalaxSubscriptionMarketplaceOffer } = await api.getDigitalaxSubscriptionOffer(id);
      setAmountSold(digitalaxSubscriptionMarketplaceOffer.amountSold);
    };

    fetchSubscriptionOffer();
  }, []);

  const onUnlock = () => {
    if (account) {
      if (amountSold >= details.amountAvailable) {
        window.alert('No available items.');
      } else {
        if (!isMatic) {
          dispatch(openConnectMaticModal());
          return;
        }
        if (account) {
          dispatch(
            openBuynowNftSubscriptionModal({
              id: id,
              priceEth: details.price,
            })
          );
          setShowHidden(true);
        } else {
          dispatch(openConnectMetamaskModal());
        }
      }
    } else {
      window.alert('Please sign in to purchase this item!');
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{details.title}</div>
      <div className={styles.body}>{details.body}</div>
      <div className={styles.price}>{details.price} $MONA <span>{`${amountSold} of ${details.amountAvailable}`}</span> </div>
      <div className={styles.actionGroup}>
        <button type="button" className={styles.unlockButton} onClick={onUnlock}>UNLOCK</button>
        {showHidden ? (
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
