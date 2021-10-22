import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import digitalaxApi from '@services/api/espa/api.service';
import { getAccount } from '@selectors/user.selectors';

import { getUser } from '@helpers/user.helpers';

import UserInfo from '@components/user-profile/user-info';
import DigitalChangingRoom from '@components/user-profile/digital-changing-room';
import Loader from '@components/loader';

import styles from './styles.module.scss';

const UserProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isInitLoading, setIsInitLoading] = useState(true);
  const [loveCount, setLoveCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  const user = getUser();
  const account = user.wallet;

  const secretKey = user ? user.randomString : null;

  const fetchViews = async () => {
    const viewData = await digitalaxApi.getViews('profile', account);
    setLoveCount(viewData && viewData[0] && viewData[0].loves ? viewData[0].loves.length : 0);

    if (viewData && viewData[0] && viewData[0].viewCount) {
      setViewCount(viewData[0].viewCount);
    }

    await addViewCount();
  };

  const addViewCount = async () => {
    const data = await digitalaxApi.addView('profile', account);
    if (data) {
      setViewCount(data.viewCount);
    }
  };

  const addLove = async () => {
    const data = await digitalaxApi.addLove(account, secretKey, 'profile', account);
    if (data && data['success']) {
      setLoveCount(loveCount + 1);
    }
  };

  const onClickLove = (e) => {
    addLove();
  };

  useEffect(() => {
    const loadUsers = async () => {
      if (account) {
        fetchViews();
      }
      setIsInitLoading(false);
    };

    loadUsers();
  }, []);

  if (isInitLoading) {
    return (
      <div style={{
        width: '100%',
        background: '#0A0A0A'
      }}>
        <div className={styles.wrapper}>
          <Loader
            className={styles.loader}
            active={true}
            size={"large"}
            white
          />
        </div>
      </div>
    );
  }

  //   if (!account) {
  //     return (
  //       <div className={styles.wrapper}>
  //         <div className={styles.notValidUser}>
  //           It's not digitalax user.
  //         </div>
  //       </div>
  //     )
  //   }

  const onClickReturn = () => {
    window.history.back();
  };

  return (
    <div style={{
      width: '100%',
      background: '#0A0A0A'
    }}>
      <div className={styles.wrapper}>
        <button className={styles.returnButton} onClick={onClickReturn}>
          RETURN
        </button>
        <UserInfo
          twitter={user.twitter}
          userName={user.username}
          userAvatar={user.avatar}
          viewCount={viewCount}
          loveCount={loveCount}
          onClickLove={onClickLove}
          myProfile={true}
        />

        <DigitalChangingRoom className={styles.digitalChangingRoom} owner={account} />
      </div>
    </div>
  );
};

export default UserProfile;
