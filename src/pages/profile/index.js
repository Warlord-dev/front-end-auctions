import React from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Button from '@components/buttons/button';
import { getUser } from '@selectors/user.selectors';
import styles from './styles.module.scss';

const Profile = ({ history }) => {
  const user = useSelector(getUser);

  const getGameTags = (str) => {
    if (!str) {
      return '';
    }
    let tags = str.split(', ');
    tags.sort();
    return tags.reduce((total, cur) => {
      let capitalize = cur.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      return `${total}#${capitalize} `;
    }, '');
  };

  return (
    <div className={styles.profileWrapper}>
      {user && (
        <div className={styles.leftSideWrapper}>
          <div className={styles.avatarIDSection}>
            <img src={user.get('avatar') ? user.get('avatar') : '../../../images/user-photo.svg'} />
            <span>{user.get('username')}</span>
          </div>
          <span className={styles.email}>{user.get('email')}</span>
          <div className={styles.roomWrapper}>
            <span>Changing Room</span>
            <p>{user.get('room')}</p>
          </div>
          <div className={styles.gameTagWrapper}>
            <span>Game Tags</span>
            <p>{getGameTags(user.get('gameTags'))}</p>
          </div>
          <Button className={styles.modalButton} background="black" onClick={() => Router.push('/profile/edit')}>
            Edit Profile
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
