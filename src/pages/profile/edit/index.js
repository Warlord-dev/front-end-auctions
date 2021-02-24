import React from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Button from '@components/buttons/button';
import { getUser } from '@selectors/user.selectors';
import styles from './styles.module.scss';

const EditProfile = ({ history }) => {
  const user = useSelector(getUser);
  if (!user) {
    return null;
  }
  
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.avatarWrapper}>
        <img src={user.get('avatar') ? user.get('avatar') : '../../../images/user-photo.svg'} />
        <Button className={styles.uploadButton} background="black">
          UPLOAD
        </Button>
        <span>JPG, PNG. NO BIGGER THAN 5MB.</span>
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.inputSection}>
          <span>CHANGE USER ID</span>
          <input defaultValue={user.get('username')} />
        </div>
        <div className={styles.inputSection}>
          <span>CHANGE EMAIL</span>
          <input defaultValue={user.get('email')} />
        </div>
        <div className={styles.inputSection}>
          <span>GAME TAGS</span>
          <p>LIST YOUR FAVOURITE GAMES. SEPARATE BY COMMAS.</p>
          <input defaultValue={user.get('gameTags')} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
