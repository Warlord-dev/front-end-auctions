import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { utils as ethersUtils } from 'ethers';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeNftSubscriptionReadyModal } from '@actions/modals.actions';
import global from '@actions/global.actions';
import styles from './styles.module.scss';
import Link from 'next/link';

const ModalNftSubscriptionAReady = ({ className, title, buttonText }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { issueId } = router.query;
  const handleClose = () => {
    dispatch(global.setContentUnlocked(true));
    dispatch(closeNftSubscriptionReadyModal());
  };

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          titleStyle={styles.textCenter}
          className={className}
        >
          <p className={styles.subTitle}>Content Unlocked!</p>
          <p className={styles.description}>
            DIGIFIZZY Bundles Are Highlighting Well Known and Unseen Creators Across the Metaverse.
            These are the Gatemakers.
          </p>
          <Link href={`/magazines/${issueId}/hidden`}>
            <Button background="black" onClick={() => handleClose()} className={styles.button}>
              {buttonText}
            </Button>
          </Link>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalNftSubscriptionAReady.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

ModalNftSubscriptionAReady.defaultProps = {
  className: styles.espamodal,
  title: 'Burn Your 721 to Access the 1155 Treasures Within!',
  buttonText: 'See Hidden Content',
};

export default ModalNftSubscriptionAReady;
