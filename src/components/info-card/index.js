import React from 'react';
import styles from './styles.module.scss';

const InfoCard = ({
  children,
  libon,
  borderColor = '',
  boxShadow = '',
  boxShadow2 = '',
  mainColor = 'transparent',
  bodyClass = ''
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        border: borderColor !== '' ? `2px solid ${borderColor}` : 'none',
        boxShadow: boxShadow2 !== ''
          ? boxShadow2
          : (
            boxShadow !== ''
            ? `inset 0px 0px 30px 20px ${boxShadow}, 0px 0px 30px 20px ${boxShadow}`
            : ''
          ),
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
