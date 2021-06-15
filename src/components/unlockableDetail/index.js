import React, { useState } from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import styles from './styles.module.scss';

const UnlockableDetail = ({ id, details }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className={styles.wrapper}>
      <LeftBox details={details} activeImage={activeImage} setActiveImage={setActiveImage} />
      <RightBox details={details} id={id} activeImage={activeImage} />
    </div>
  );
};

export default UnlockableDetail;
