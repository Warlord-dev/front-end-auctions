import React from 'react';
import styles from './styles.module.scss';

const InfoCard = ({ children, libon, mainColor = 'rgba(189, 61, 169, 0.47)' }) => {
  return (
    <div className={styles.wrapper}>
      {libon ? <img src={libon} className={styles.libon} /> : null}
      <div className={styles.body} style={{ backgroundColor: mainColor }}>
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
