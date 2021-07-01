import React from 'react';
import styles from './styles.module.scss';

const DescriptionCard = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.title}> {data?.garment.name} </div>
        <div className={styles.description}>{data?.garment.description}</div>
      </div>
    </div>
  );
};

export default DescriptionCard;
