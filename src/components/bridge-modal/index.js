import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const BridgeModal = ({ title, mode, children, headerHelper, headerSubTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={classnames(styles.bridgeModal, styles[`mode-${mode}`])}>
        <div className={styles.header}>
          {title}
          {headerHelper && (
            <div className={styles.help}>
              {' '}
              ?<span className={styles.tooltip}>{headerHelper}</span>
            </div>
          )}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default BridgeModal;
