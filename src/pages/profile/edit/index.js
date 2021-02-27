import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import Button from '@components/buttons/button';
import { useProfile } from '@hooks/espa/user.hooks';
import userActions from '@actions/user.actions';
import styles from './styles.module.scss';

const EditProfile = ({ history }) => {
  const profile = useProfile();
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setUser(profile);
  }, [profile]);

  if (!user) {
    return null;
  }

  const showBrowserForAvatar = () => {
    document.getElementById('avatar-upload').click();
  };

  const onChangeFile = (e) => {
    let file = document.getElementById('avatar-upload').files;
    if (file.length === 0) {
      return;
    }
    file = file[0];
  };

  const onChange = (e, key) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  const saveProfile = () => {
    dispatch(userActions.updateProfile(user))
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileWrapper}>
        <div className={styles.avatarWrapper}>
          <img src={user.avatar ? user.avatar : '../../../images/user-photo.svg'} />
          <input id="avatar-upload" type="file" onClick={onChangeFile} hidden />
          <Button className={styles.uploadButton} background="black" onClick={showBrowserForAvatar}>
            UPLOAD
          </Button>
          <span>JPG, PNG. NO BIGGER THAN 5MB.</span>
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.inputSection}>
            <span>CHANGE USER ID</span>
            <input value={user.username} onChange={(e) => onChange(e, 'username')} />
          </div>
          <div className={styles.inputSection}>
            <span>CHANGE EMAIL</span>
            <input value={user.email} onChange={(e) => onChange(e, 'email')} />
          </div>
          <div className={styles.inputSection}>
            <span>GAME TAGS</span>
            <p>LIST YOUR FAVOURITE GAMES. SEPARATE BY COMMAS.</p>
            <input defaultValue={user.gameTags} />
          </div>
        </div>
      </div>
      <Button className={styles.saveButton} background="black" onClick={saveProfile}>
        SAVE
      </Button>
    </div>
  );
};

export default EditProfile;
