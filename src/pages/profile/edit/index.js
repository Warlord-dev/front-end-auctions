import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@components/buttons/button';
import Loader from '@components/loader';
import userActions from '@actions/user.actions';

import { getUser, getIsLoading } from '@selectors/user.selectors';
import styles from './styles.module.scss';

const EditProfile = ({ history }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const profile = useSelector(getUser);
  const isLoading = useSelector(getIsLoading);

  if (!profile) {
    dispatch(userActions.checkStorageAuth());
  }

  useEffect(() => {
    if (!profile) {
      return;
    }
    setUser({
      wallet: profile.get('wallet'),
      email: profile.get('email'),
      username: profile.get('username'),
      randomString: profile.get('randomString'),
      avatar: profile.get('avatar'),
    });
  }, [profile]);

  if (!user) {
    return <Loader size="large" className={styles.loader} />;
  }

  const showBrowserForAvatar = () => {
    document.getElementById('avatar-upload').click();
  };

  const onChangeFile = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (files.length === 0) {
      return;
    }
    dispatch(userActions.uploadAvatar(files[0]));
  };

  const onChange = (e, key) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  const saveProfile = () => {
    dispatch(userActions.updateProfile(user));
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileWrapper}>
        <div className={styles.avatarWrapper}>
          <img src={user.avatar ? user.avatar : '../../../images/user-photo.svg'} />
          <input id="avatar-upload" type="file" onChange={onChangeFile} hidden />
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
      {isLoading && <Loader size="large" className={styles.pageLoader} />}
    </div>
  );
};

export default EditProfile;
