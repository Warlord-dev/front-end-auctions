import Modal from '@components/modal';
import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import Button from '@components/buttons/button';
import styles from './styles.module.scss';
import { closeSwitchNetworkModal } from '@actions/modals.actions';
import { requestSwitchNetwork } from '@services/network.service';

const SwitchNetworkModal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeSwitchNetworkModal());
  };

  const handleClick = async () => {
    const res = await requestSwitchNetwork();
    dispatch(closeSwitchNetworkModal());
  };

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={'SWITCH TO POLYGON'}
          titleStyle={styles.textCenter}
        >
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>
              You need to connect to Polygon Network to get some Web3 Fashion!<br/>
              Need to top up $MONA? You can get it from <a href="https://uniswap.org/" target="_blank">Uniswap</a>{' '}
              and bridge it to Polygon with our customer <a href="https://skins.digitalax.xyz/bridge/" target="_blank">Multi-Token Bridge</a>. 
              Or, purchase it directly from <a href="https://quickswap.exchange/" target="_blank">Quickswap</a>.
              </span>
            </p>
            <div className={styles.selectWrapper}>
              <Button
                background="pink"
                onClick={() => handleClick()}
                className={styles.button}
              >
                SWITCH NETWORK
              </Button>
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  )
}

export default SwitchNetworkModal;
