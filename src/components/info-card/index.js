import React from 'react';
import styles from './styles.module.scss';

const InfoCard = ({
  children,
  libon,
  borderColor = '#c52081',
  boxShadow = 'rgba(197, 32, 129, 0.5)',
  mainColor = 'rgba(189, 61, 169, 0.47)',
  bodyClass = ''
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        border: `2px solid ${borderColor}`,
        boxShadow: `inset 0px 0px 30px 20px ${boxShadow},0px 0px 30px 20px ${boxShadow}`,
      }}
    >
      {libon ? <img src={libon} className={styles.libon} /> : null}
      <div className={[styles.body, bodyClass].join(' ')} style={{ backgroundColor: mainColor }}>
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
