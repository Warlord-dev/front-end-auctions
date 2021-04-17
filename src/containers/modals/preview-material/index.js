import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactImageMagnify from 'react-image-magnify';
import cn from "classnames";
import PropTypes from 'prop-types';
import Modal from '@components/modal';
import { closePreviewMaterialModal } from '@actions/modals.actions';
import { getModalParams } from '@selectors/modal.selectors';
import { create2KURL } from '@services/imgix.service';
import styles from './styles.module.scss';

const PreviewMaterial = ({
  className,
}) => {

  const dispatch = useDispatch();

  const { tokenImage, isVideo } = useSelector(getModalParams);

  const handleClose = () => {
    dispatch(closePreviewMaterialModal());
  };


  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} className={cn(className, styles.itemFitContent)}>
          <div className={styles.footer}>
            {isVideo ? 
              <video autoPlay muted loop playsInline className={styles.itemLargeImg} >
                <source src={tokenImage} type="video/mp4" />
              </video>
            : <ReactImageMagnify
              className={styles.itemLargeImg}
              LargeImageClassName={styles.itemLargeImgZoom}
              {...{
                smallImage: {
                  isFluidWidth: true,
                  src: create2KURL(tokenImage),
                },
                largeImage: {
                  src: create2KURL(tokenImage),
                  width: 800,
                  height: 800,
                },
              }}
            />}
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

PreviewMaterial.propTypes = {
  className: PropTypes.string,
};

PreviewMaterial.defaultProps = {
  className: '',
};

export default PreviewMaterial;
