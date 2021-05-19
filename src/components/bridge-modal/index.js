import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const BridgeModal = ({ title, mode, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={classnames(styles.bridgeModal, styles[`mode-${mode}`])}>
        <div className={styles.header}>{title}</div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default BridgeModal;
