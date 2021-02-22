import React from 'react';
import Router from 'next/router'
import Button from '@components/buttons/button';
import styles from './styles.module.scss';

const Profile = ({ history }) => {
  const user = {
    id: 'David',
    email: 'david@email.com',
    img: null,
    room: 0,
    gameTags: 'fortnite, among us',
  };

  const getGameTags = (str) => {
    let tags = str.split(', ');
    tags.sort();
    return tags.reduce((total, cur) => {
      let capitalize = cur.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      return `${total}#${capitalize} `;
    }, '');
  };

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.leftSideWrapper}>
        <div className={styles.avatarIDSection}>
          <img src={user.img ? user.img : '../../../images/user-photo.svg'} />
          <span>{user.id}</span>
        </div>
        <span className={styles.email}>{user.email}</span>
        <div className={styles.roomWrapper}>
          <span>Changing Room</span>
          <p>{user.room}</p>
        </div>
        <div className={styles.gameTagWrapper}>
          <span>Game Tags</span>
          <p>{getGameTags(user.gameTags)}</p>
        </div>
        <Button className={styles.modalButton} background="black" onClick={() => Router.push('/profile/edit')}>
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default Profile;
