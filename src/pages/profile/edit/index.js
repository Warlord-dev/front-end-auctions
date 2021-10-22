import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';

import Button from '@components/buttons/button';
import Loader from '@components/loader';
import InfoCard from '@components/info-card';

import userActions from '@actions/user.actions';
import { getUser, getIsLoading } from '@selectors/user.selectors';
import { useMyIP } from '@hooks/espa/user.hooks';

import styles from './styles.module.scss';

const EditProfile = ({ history }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const profile = useSelector(getUser);
  const isLoading = useSelector(getIsLoading);
  const myIP = useMyIP();

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
      twitter: profile.get('twitter'),
      randomString: profile.get('randomString'),
      avatar: profile.get('avatar'),
      gameTags: profile.get('gameTags'),
      ipAddrs: profile.get('ipAddrs'),
    });
  }, [profile]);

  if (!user || myIP === null) {
    return (<div style={{
      width: '100%',
      background: '#0A0A0A'
    }}>
      <div className={styles.container}>
        <Loader
          className={styles.loader}
          active={true}
          size={"large"}
          white
        />
      </div>
    </div>
    )
  }

  const showBrowserForAvatar = () => {
    document.getElementById('avatar-upload').click();
  };

  const onChangeFile = (e) => {
    const files = e.target.files || e.dataTransfer.files;

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

  const validateUserName = (username) => {
    const regEx = /^[A-Za-z0-9]*$/;
    return regEx.test(String(username));
  };

  const validateEmail = (email) => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
  };

  const validIp = (address) => {
    const regEx =
      /^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$/;
    return regEx.test(address);
  };

  const saveProfile = () => {
    if (!validateUserName(user.username)) {
      toast('User ID must contains letters and numbers only!');
      return;
    }
    if (!validateEmail(user.email)) {
      toast('You have entered an invalid Email address!');
      return;
    }
    if (user.ipAddrs && !validIp(user.ipAddrs)) {
      toast('You have entered an invalid IP address!');
      return;
    }
    dispatch(userActions.updateProfile(user));
  };

  return (
    <div style={{
      width: '100%',
      background: '#0A0A0A'
    }}>
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <InfoCard mainColor={'rgba(247, 207, 207, 0.47)'} bodyClass={styles.padding5}>
            <div className={styles.profileWrapper}>
              <div className={styles.avatarWrapper}>
                <img
                  src={
                    user.avatar ? user.avatar : '../../../images/user-profile/user-avatar-black.svg'
                  }
                />
                <input
                  id="avatar-upload"
                  type="file"
                  onChange={onChangeFile}
                  hidden
                  accept=".jpg, .png, .gif"
                />
                <Button
                  className={styles.uploadButton}
                  background="black"
                  onClick={showBrowserForAvatar}
                >
                  UPLOAD
                </Button>
                <span>JPG, PNG, GIF. NO BIGGER THAN 5MB.</span>
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
                  <span>ADD TWITTER</span>
                  <input value={user.twitter} onChange={(e) => onChange(e, 'twitter')} />
                </div>
              </div>
            </div>
            <div className={styles.buttonsWrapper}>
              <Button
                className={styles.backProfileButton}
                background="black"
                onClick={() => Router.push('/profile').then(() => window.scrollTo(0, 0))}
              >
                BACK TO PROFILE
              </Button>

              <Button className={styles.saveButton} background="black" onClick={saveProfile}>
                SAVE
              </Button>
            </div>
            {isLoading && <Loader size="large" className={styles.pageLoader} />}
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
