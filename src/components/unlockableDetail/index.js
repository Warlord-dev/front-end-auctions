import React from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import styles from './styles.module.scss';

const UnlockableDetail = ({ id, details }) => {
  return (
    <div className={styles.wrapper}>
      <LeftBox details={details} />
      <RightBox details={details} id={id} />
    </div>
  );
};

export default UnlockableDetail;
