import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const MaterialList = ({ collectionId, currentClothesInfo }) => {
  return (
    <div className={cn(styles.wrapper, 'animate__animated animate__fadeIn')}>
      <p className={styles.titleWrapper}>
        <span className={styles.title}>ESPA Tournament:</span>
        <span className={styles.titleValue}>
          {parseInt(collectionId) < 3 ? 'Among Us Sheriff Mod' : 'Minecraft Bed Wars'}
        </span>
      </p>
      <div className={styles.gameTable}>
        <div className={styles.header}>
          <span className={styles.col1}>GAME CLASSIFIER</span>
          <span className={styles.col2}>SKIN ID</span>
          {parseInt(collectionId) < 3 ? <span className={styles.col3}>HAT ID</span> : null}
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.col1}>
              {parseInt(collectionId) < 3 ? 'Among Us Sheriff Mod' : 'Minecraft Bed Wars'}
              <span>ESPA Tournaments</span>
            </div>
            <span className={styles.col2}>{currentClothesInfo?.skinId}</span>
            {parseInt(collectionId) < 3 ? (
              <span className={styles.col3}>{currentClothesInfo?.hatId}</span>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.gameLinkTable}>
        <div className={styles.header}>
          <span className={styles.col1}>DEVELOPER/MODDER</span>
          <span className={styles.col2}>PROFILE</span>
          <span className={styles.col3}>GAME LINK</span>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <a
              className={styles.col1}
              href={
                parseInt(collectionId) >= 3
                  ? 'https://github.com/ad1tya2'
                  : 'https://github.com/Woodi-dev'
              }
            >
              <img
                src={
                  parseInt(collectionId) >= 3 ? '/images/image 247.png' : '/images/githubuser.svg'
                }
                className={styles.gitUserIcon}
              />
              <div className={styles.addressWrapper}>
                <p className={styles.name}>
                  {parseInt(collectionId) >= 3 ? 'Ad1tya2' : 'Woodi-Dev'}
                </p>
                <p className={styles.address}>
                  {parseInt(collectionId) >= 3 ? 'adi#6789' : 'Woodi#0555'}
                </p>
              </div>
            </a>
            <a
              className={styles.col2}
              href={
                parseInt(collectionId) >= 3
                  ? 'https://github.com/ad1tya2'
                  : 'https://github.com/Woodi-dev'
              }
            >
              <img src="/images/github.svg" className={styles.gitIcon} />
            </a>
            <a className={styles.col3} href="https://espa.digitalax.xyz">
              <span>START PLAYING</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

MaterialList.propTypes = {
  currentClothesInfo: PropTypes.object,
};

MaterialList.defaultProps = {
  currentClothesInfo: null,
};

export default memo(MaterialList);
