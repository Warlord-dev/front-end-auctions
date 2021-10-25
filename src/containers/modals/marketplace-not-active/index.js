import React from 'react';
import { createPortal } from 'react-dom';
import Modal from '@components/modal';

import styles from './styles.module.scss';

const MarketplaceNotActive = () => (
  <>
    {createPortal(
      <Modal className={styles.darkModal}>
        <div className={styles.modalItem}>
          <div className={styles.description}>
            Hey!
            <br />
            <br />
            <b>This Marketplace is Currently Not Active.</b>
            <br />
            <br />
            We have moved our{' '}
            <b>
              indie digital web3 fashion{' '}
              <a href="" target="_blank">
                here
              </a>
            </b>{' '}
            and{' '}
            <b>
              indie physical web3 fashion{' '}
              <a href="" target="_blank">
                here
              </a>
            </b>
            , both on Polygon Network and powered by the{' '}
            <a href="" target="_blank">
              Global Designer Network
            </a>
            .
            <br />
            <br />
            If you want to check out our previous sales and also the first indie web3 fashion you
            can proceed below!
          </div>
          <br />
          <br />
          <a href="https://fashion.digitalax.xyz" target="_blank" className={styles.proceed}>
            PROCEED >
          </a>
        </div>
      </Modal>,
      document.body
    )}
  </>
);

export default MarketplaceNotActive;
