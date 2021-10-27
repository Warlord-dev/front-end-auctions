import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// import Button from '@components/buttons/button';
import Modal from '@components/modal';
import styles from './styles.module.scss';

const MarketplaceDown = ({}) => {
  return (
    <>
      {createPortal(
        <Modal title={'Hey there!'} titleStyle={styles.textCenter}>
          <p className={styles.description}>
            Our marketplace is currently undergoing a subgraph update and will be back online
            shortly! In the meantime, head over to our discord for more metaverse action and to stay
            up to date!
          </p>
          {/* <a href="https://designers.digitalax.xyz/getdressed/" target="_blank">
            <Button background="pink" className={styles.button}>
              TELEPORT
            </Button>
          </a> */}
        </Modal>,
        document.body,
      )}
    </>
  );
};

export default MarketplaceDown;
