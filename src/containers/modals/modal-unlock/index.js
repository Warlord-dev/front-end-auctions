import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeUnlockModal } from '@actions/modals.actions';
import { getModalParams } from '@selectors/modal.selectors';
import styles from './styles.module.scss';
import config from '@utils/config'
import { getSubscriptionNFTContract } from '@services/contract.service';
import { getAccount } from '@selectors/user.selectors';

const Unlock = ({ className, title, buttonText }) => {
  const dispatch = useDispatch();

  const { item } = useSelector(getModalParams);
  const account = useSelector(getAccount);
  const chainId = useSelector(getChainId);
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  const handleClose = () => {
    dispatch(closeUnlockModal());
  };

  const handleClick = async () => {
    if (isMatic) {
      if (account) {
        const contract = await getSubscriptionNFTContract(config.DIGITALAX_SUBSCRIPTION_NFT['matic']);
        const res = await contract.methods.burn(item.id).send({
          from: account
        });

        handleClose()
      } else {
        window.alert('Please connect your wallet!');
      }
    } else {
      window.alert('Please switch to Matic!');
    }
  };

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          text={["Your DIGIFIZZY Subscription Bundle is an ERC-998 NFT— a 721 NFT that owns a balance of 1155 NFTs. You can unlock your 1155 treasures by burning the 721 NFT below!"]}
          titleStyle={styles.textCenter}
          className={className}
        >
          <div className={styles.footer}>
            <div className={styles.selectWrapper}>
              <Button
                isDisabled={!isMatic}
                background="pink"
                onClick={() => handleClick()}
                className={styles.button}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

Unlock.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
};

Unlock.defaultProps = {
  className: '',
  title: 'BURN YOUR 721 TO UNLOCK 1155 TREASURES',
  buttonText: 'UNLOCK',
};

export default Unlock;
