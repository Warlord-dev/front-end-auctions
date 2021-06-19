import React from 'react';
import styles from './styles.module.scss';

const DescriptionCard = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.title}> skin name </div>
        <div className={styles.description}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
