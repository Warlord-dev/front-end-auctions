import React from 'react';
import Router from 'next/router';
import Button from '@components/buttons/button';
import styles from './styles.module.scss';

const EditProfile = ({ history }) => {
  const user = {
    id: 'David',
    email: 'david@email.com',
    img: null,
    room: 0,
    gameTags: 'fortnite, among us',
  };

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.avatarWrapper}>
        <img src={user.img ? user.img : '../../../images/user-photo.svg'} />
        <Button className={styles.uploadButton} background="black">
          UPLOAD
        </Button>
        <span>JPG, PNG. NO BIGGER THAN 5MB.</span>
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.inputSection}>
          <span>CHANGE USER ID</span>
          <input defaultValue={user.id} />
        </div>
        <div className={styles.inputSection}>
          <span>CHANGE EMAIL</span>
          <input defaultValue={user.email} />
        </div>
        <div className={styles.inputSection}>
          <span>GAME TAGS</span>
          <p>LIST YOUR FAVOURITE GAMES. SEPARATE BY COMMAS.</p>
          <input defaultValue={user.gameTags} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
