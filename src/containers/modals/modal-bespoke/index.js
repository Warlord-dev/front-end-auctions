import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeBespokeModal } from '@actions/modals.actions';
import styles from './styles.module.scss';

const ModalBespoke = ({ className }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeBespokeModal());
  };

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={'Go To The Metaverse Boutique'}
          titleStyle={styles.textCenter}
          className={className}
        >
          <p className={styles.description}>
            Get a custom outfit, tailored by the Global Designer Network! You can choose from 2D or 3D styles and the games that you want this look to be compatible with. Maybe you want the Minecraft version of your high fidelity 3D dress, Decentraland version of your pixelated PFP or another game mod and style not yet discovered for yet! The Web3 Tailors are here to bring you your best metaverse style!
          </p>
          <a href="https://designers.digitalax.xyz/getdressed/" target="_blank">
            <Button background="pink" className={styles.button}>
              TELEPORT
            </Button>
          </a>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalBespoke.propTypes = {
  className: PropTypes.string,
};

ModalBespoke.defaultProps = {
  className: styles.espamodal,
};

export default ModalBespoke;
