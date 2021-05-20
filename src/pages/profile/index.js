import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import copy from 'copy-to-clipboard';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';
import NFTProduct from '@components/nft-product';
import Button from '@components/buttons/button';
import { getUser, getAccount } from '@selectors/user.selectors';
import { useProfile, useNFTs } from '@hooks/espa/user.hooks';
import accountActions from '@actions/user.actions';
import api from '@services/api/api.service';
import Loader from '@components/loader';
import styles from './styles.module.scss';
import details from '@constants/nft_subscription_issue1'
import NftSubscriptionCard from '@components/nftsubscriptioncard';

const Profile = ({ history }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [nftCollectionIds, setNftCollectionIds] = useState([]);

  if (!user) {
    dispatch(accountActions.checkStorageAuth());
  }
  const account = user.get('wallet');
  const nfts = useNFTs(account);
  
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
      const ids = [];
      for (let i = 0; i < digitalaxSubscriptionCollectors.length; i += 1) {
        for (let j = 0; j < digitalaxSubscriptionCollectors[i].parentsOwned.length; j += 1) {
          let id = 0;
          if (digitalaxSubscriptionCollectors[i].parentsOwned[j].id >= 100001 && digitalaxSubscriptionCollectors[i].parentsOwned[j].id <= 100730) {
            id = 1;
          } else if ((digitalaxSubscriptionCollectors[i].parentsOwned[j].id >= 100731 && digitalaxSubscriptionCollectors[i].parentsOwned[j].id <= 100930) || (
            digitalaxSubscriptionCollectors[i].parentsOwned[j].id >= 100981 && digitalaxSubscriptionCollectors[i].parentsOwned[j].id <= 101300
          )) {
            id = 2;
          } else if (digitalaxSubscriptionCollectors[i].parentsOwned[j].id >= 100931 && digitalaxSubscriptionCollectors[i].parentsOwned[j].id <= 100980) {
            id = 3;
          }
          if (id && !ids.includes(id))
            ids.push(id);
        }
      }
      setNftCollectionIds(ids);
    };

    fetchSubscriptionStatus();
  }, []);

  const getGameTags = (str) => {
    if (!str) {
      return '';
    }
    let tags = str.replace(', ', ',').split(',');
    tags.sort();
    return tags.reduce((total, cur) => {
      let capitalize = cur.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      return `${total}#${capitalize} `;
    }, '');
  };

  const onCopyWalletAddress = () => {
    copy(account);
    toast('Wallet Address is copied to the clipboard');
  };

  if (!user || !nfts) {
    return <Loader size="large" className={styles.loader} />;
  }

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.leftSideWrapper}>
        <div className={styles.avatarIDSection}>
          <img src={user.get('avatar') ? user.get('avatar') : '../../../images/user-photo.svg'} />
          <span>{user.get('username')}</span>
        </div>
        <span className={styles.email}>{user.get('email')}</span>
        <div className={styles.inputItemwrapper}>
          <span>Changing Room</span>
          <p>{nfts.length}</p>
        </div>
        <div className={styles.inputItemwrapper}>
          <span>Game Tags</span>
          <p>{getGameTags(user.get('gameTags'))}</p>
        </div>
        <div className={styles.inputItemwrapper}>
          <span>Whitelisted IP address</span>
          <p>{user.get('ipAddrs')}</p>
        </div>
        <div className={styles.walletAddress}>
          <span>Connected Wallet Address</span>
          <p>
            {account}
            <img src="/images/clipboard.png" onClick={onCopyWalletAddress} />
          </p>
        </div>
        <Button
          className={styles.modalButton}
          background="black"
          onClick={() => Router.push('/profile/edit')}
        >
          Edit Profile
        </Button>
      </div>
      <div className={styles.rightSideWrapper}>
        <div className={styles.rightSideTab}>
          <div
            className={`${styles.tabItem} ${activeTab === 0 && styles.active}`}
            onClick={() => setActiveTab(0)}
          >
            <p className={styles.titleWrapper}>CHANGING ROOM</p>
          </div>
          <div
            className={`${styles.tabItem} ${activeTab === 1 && styles.active}`}
            onClick={() => setActiveTab(1)}
          >
            <p className={styles.titleWrapper}>ISSUE COLLECTION</p>
          </div>
        </div>
        <div className={styles.tabBody}>
          {activeTab === 0 ? (
            <ul className={cn(styles.list, 'animate__animated animate__fadeIn')}>
              {nfts.map((nft) => (
                <NFTProduct key={`nft_${nft.id}`} nft={nft} nftId={parseInt(nft.id)} />
              ))}
            </ul>
          ) : (
            <div className={styles.subscriptionWrapper}>
              {nftCollectionIds.map((nftId) => (
                <>
                  {details[parseInt(nftId) - 1].url.map((img) => (
                    <NftSubscriptionCard key={`nft_subscription_${nftId}`} id={parseInt(nftId)} details={details[parseInt(nftId) - 1]} url={img} />
                  ))}
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
