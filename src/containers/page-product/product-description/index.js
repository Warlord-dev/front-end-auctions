import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTokenInfo } from '@hooks/token.info.hooks';
import { getGarmentsById, getGarmentsReceiveByName } from '@selectors/garment.selectors';
import { getDesignerInfoById } from '@selectors/designer.selectors';
import { createArrayForGallery } from '@helpers/photo.helpers';
import LeftBox from './left-box';
import RightBox from './right-box';
import styles from './styles.module.scss';

const ProductDescription = ({ clothesId }) => {

  const garment = useSelector(getGarmentsById(clothesId));
  const tokenInfo = useTokenInfo(garment.tokenUri, [garment.tokenUri]);
  const clothesPhotos = createArrayForGallery(tokenInfo);
  const currentDesignersInfo = useSelector(getDesignerInfoById(garment.designer));
  const receive = useSelector(getGarmentsReceiveByName(tokenInfo?.name));

  const currentClothesInfo = {
    clothesId,
    clothesName: tokenInfo && tokenInfo.name ? tokenInfo.name : `ID: ${clothesId}`,
    description: tokenInfo && tokenInfo.description ? tokenInfo.description : `ID: ${clothesId}`,
    estimateApy: 127,
    youReceive: receive?.receive ? receive.receive : '',
    valueChildNfts: 'ERC1155',
    valueApy: '',
  };

  return (
    <div className={styles.wrapper}>
      <LeftBox {...currentClothesInfo} clothesPhotos={clothesPhotos} />
      <RightBox
        clothesId={clothesId}
        currentClothesInfo={currentClothesInfo}
        currentDesignersInfo={currentDesignersInfo}
      />
    </div>
  );
};

ProductDescription.propTypes = {
  clothesId: PropTypes.string.isRequired,
  designerId: PropTypes.string.isRequired,
};

export default memo(ProductDescription);
