import { openBuynowModal, openConnectMetamaskModal, openPlaceBidModal, openSwitchNetworkModal } from '@actions/modals.actions';
import NewButton from '@components/buttons/newbutton';
import { getAccount } from '@selectors/user.selectors';
import LazyLoad from 'react-lazyload';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRarityId, reviseUrl } from '@utils/helpers';
import styles from './styles.module.scss';
import { getChainId } from '@selectors/global.selectors';

const ImageCard = ({ data, showDesigner = false, imgUrl = null, blue = true }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {showDesigner ? (
          <div className={styles.designerWrapper}> 
            <img src="./images/Lorena-Bellow.jpeg" className={styles.photo} />
            <div className={styles.name}>{data?.garment.name} </div>
          </div>
        ) : null}
        <div className={(blue)?styles.bodyWrapper:styles.bodyWrapperPink}>
          {data ? (
            <LazyLoad>
              <video key={data.id} autoPlay muted loop className={styles.video}>
                <source src={reviseUrl(data.garment ? data.garment.animation : data.animation)} type="video/mp4" />
              </video>
            </LazyLoad>
          ) : null}
          {imgUrl ? <img src={reviseUrl(imgUrl)} className={styles.image} /> : null}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
