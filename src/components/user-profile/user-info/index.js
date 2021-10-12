import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const UserInfo = (props) => {
  const { userName, twitter, userAvatar, onClickLove, viewCount, loveCount, myProfile } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {userName}’s <br />
        Web3 Fashion Inventory
      </div>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImage}
          src={userAvatar ? userAvatar : '/images/user-profile/user-avatar-black.png'}
        />
        <div className={styles.lovesWrapper}>
          <div className={styles.lovesContainer}>
            <div className={styles.leftSide}>
              <button type="button" className={styles.loveButton} onClick={onClickLove}>
                <img src="/images/user-profile/profile-loves-icon.png" />
              </button>

              <div className={styles.label}>LOVES</div>
            </div>
            <div className={styles.rightSide}>{loveCount}</div>
          </div>

          <div className={styles.viewsContainer}>
            <div className={styles.leftSide}>
              <img src="/images/user-profile/profile-views-icon.png" />
              <div className={styles.label}>VIEWS</div>
            </div>
            <div className={styles.rightSide}>{viewCount}</div>
          </div>

          {myProfile && (
            <Link href="/profile/edit">
              <a target="_self">
                <button className={styles.editProfileButton}>EDIT PROFILE</button>
              </a>
            </Link>
          )}
        </div>
      </div>

      <div className={styles.userNameWrapper}>
        {twitter ? (
          <a href={twitter} target="_blank">
            {' '}
            <img src="/images/twitter 2.png" alt="" />{' '}
          </a>
        ) : null}
        <div className={styles.userNameHere}>{userName}</div>
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default UserInfo;
