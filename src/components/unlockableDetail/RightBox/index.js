import {
  openBuynowNftLimitModal,
  openBuynowNftSubscriptionModal,
  openConnectMaticModal,
  openConnectMetamaskModal,
} from '@actions/modals.actions';
import { getChainId } from '@selectors/global.selectors';
import { getAccount } from '@selectors/user.selectors';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import api from '@services/api/api.service';
import {
  openBuynowNftCoolDownModal,
  closeBuynowNftSubscriptionModal,
} from '@actions/modals.actions';
import Button from '@components/buttons/button';

const RightBox = ({ details, id }) => {
  const dispatch = useDispatch();
  const [amountSold, setAmountSold] = useState(0);
  const [buyAvailable, setBuyAvailable] = useState(true);
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const [collectionIds, setCollectionIds] = useState([]);
  const [lastPurchasedTime, setLastPurchasedTime] = useState(0);
  const isMatic = chainId === '0x13881' || chainId === '0x89';
  const modals = useSelector((state) => state.modals.toJS());
  const { isShowBuyNowNftSubscription } = modals;
  const { contentUnlocked } = useSelector((state) => state.global.toJS());

  useEffect(() => {
    const fetchSubscriptionOffer = async () => {
      const { digitalaxSubscriptionMarketplaceOffer } = await api.getDigitalaxSubscriptionOffer(id);
      setAmountSold(digitalaxSubscriptionMarketplaceOffer.amountSold);
    };

    const fetchSubscriptionStatus = async () => {
      const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
      const ids = [];
      for (let i = 0; i < digitalaxSubscriptionCollectors.length; i += 1) {
        for (let j = 0; j < digitalaxSubscriptionCollectors[i].parentsOwned.length; j += 1) {
          const { digitalaxSubscriptionPurchaseHistory } =
            await api.getDigitalaxSubscriptionPurchase(
              digitalaxSubscriptionCollectors[i].parentsOwned[j].id
            );
          if (digitalaxSubscriptionPurchaseHistory.bundleId === id) {
            ids.push(digitalaxSubscriptionPurchaseHistory);
            if (lastPurchasedTime < parseInt(digitalaxSubscriptionPurchaseHistory.timestamp)) {
              setLastPurchasedTime(parseInt(digitalaxSubscriptionPurchaseHistory.timestamp));
            }
          }
        }
      }
      setCollectionIds(ids);
      setBuyAvailable(true);
    };
    if (!isShowBuyNowNftSubscription) {
      setBuyAvailable(false);
      fetchSubscriptionOffer();
      fetchSubscriptionStatus();
    }
  }, [isShowBuyNowNftSubscription]);

  const checkLastPurchasedTime = (id) => {
    const now = new Date();
    return parseInt(lastPurchasedTime) + 60 < now.getTime() / 1000;
  };

  const onUnlock = () => {
    if (!checkLastPurchasedTime(id)) {
      dispatch(openBuynowNftCoolDownModal());
      return;
    }
    if (collectionIds.length >= 10) {
      dispatch(openBuynowNftLimitModal());
      return;
    }
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
        } else {
          dispatch(openConnectMetamaskModal());
        }
      }
    } else {
      window.alert('Please sign in to purchase this item!');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{details.title}</div>
      <div className={styles.body}>{details.body}</div>
      <div className={styles.price}>
        {details.price} $MONA <span>{`${amountSold} of ${details.amountAvailable}`}</span>{' '}
      </div>
      <div className={styles.actionGroup}>
        <Button isDisabled={!buyAvailable} background="black" onClick={onUnlock}>
          {buyAvailable ? 'UNLOCK' : <div className={styles.spinner} />}
        </Button>
        {contentUnlocked ? (
          <Link href={`/magazines/1/hidden`}>
            <Button background="black" className={styles.showHiddenButton}>
              SEE HIDDEN CONTENT
            </Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default RightBox;
