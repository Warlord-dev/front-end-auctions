import React from 'react';
import styles from './styles.module.scss';

const InfoCard = ({ children, libon }) => {
  return (
    <div className={styles.wrapper}>
      {libon ? <img src={libon} className={styles.libon} /> : null}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default InfoCard;
