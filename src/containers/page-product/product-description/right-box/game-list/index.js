import React, { memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const MaterialList = () => {
  return (
    <div className={cn(styles.wrapper, 'animate__animated animate__fadeIn')}>
      <p className={styles.titleWrapper}>
        <span className={styles.title}>ESPA Tournament:</span>
        <span className={styles.titleValue}>Among Us Sheriff Mod</span>
      </p>
      <div className={styles.gameTable}>
        <div className={styles.header}>
          <span className={styles.col1}>GAME CLASSIFIER</span>
          <span className={styles.col2}>SKIN ID</span>
          <span className={styles.col3}>HAT ID</span>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.col1}>
              Among Us Sheriff Mod
              <span>ESPA Tournaments</span>
            </div>
            <span className={styles.col2}>4511</span>
            <span className={styles.col3}>322</span>
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
            <a className={styles.col1} href="https://github.com/Woodi-dev">
              <img src="/images/githubuser.svg" className={styles.gitUserIcon} />
              <div className={styles.addressWrapper}>
                <p className={styles.name}>Woodi-Dev</p>
                <p className={styles.address}>Woodi#0555</p>
              </div>
            </a>
            <a className={styles.col2} href="https://github.com/Woodi-dev">
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

MaterialList.propTypes = {};

MaterialList.defaultProps = {};

export default memo(MaterialList);
