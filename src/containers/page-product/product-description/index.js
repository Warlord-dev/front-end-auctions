import React, { memo, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTokenInfo } from '@hooks/token.info.hooks';
import {
  getGarmentsById,
  getGarmentsReceiveByName,
} from '@selectors/garment.selectors';
import { getDesignerInfoById } from '@selectors/designer.selectors';
import { createArrayForGallery } from '@helpers/photo.helpers';
import LeftBox from './left-box';
import RightBox from './right-box';
import styles from './styles.module.scss';

// const SHOW_EXCULSIVE_TAB = 0;
// const SHOW_SEMIRARE_TAB = 1;
// const SHOW_COMMON_TAB = 2;

const ProductDescription = ({ clothesId }) => {
  const garment = useSelector(getGarmentsById(clothesId));
  const tokenInfo = useTokenInfo(garment.tokenUri, [garment.tokenUri]);
  const clothesPhotos = createArrayForGallery(tokenInfo);
  const currentDesignersInfo = useSelector(getDesignerInfoById(garment.id));
  const receive = useSelector(getGarmentsReceiveByName(tokenInfo?.name));

  const [activeTab, setActiveTab] = useState(0);

  const totalSemiRare = 5;
  const availableSemiRare = 1;

  const totalCommon = 3;
  const availableCommon = 2;

  const currentCounts = useMemo(
    () => [
      { total: 1, current: garment.resulted ? 0 : 1 },
      { total: totalSemiRare, current: availableSemiRare },
      { total: totalCommon, current: availableCommon },
    ],
    [totalCommon, availableCommon, totalSemiRare, availableSemiRare],
  );

  // pull designer informations and cloth photos for all rare types
  // IMPORTANT relationships between nfts :(

  const currentClothesInfo = {
    clothesId,
    clothesName:
      tokenInfo && tokenInfo.name ? tokenInfo.name : `ID: ${clothesId}`,
    description:
      tokenInfo && tokenInfo.description
        ? tokenInfo.description
        : `ID: ${clothesId}`,
    estimateApy: 127,
    youReceive: receive?.receive ? receive.receive : '',
    valueChildNfts: 'ERC1155',
    valueApy: '',
  };

  return (
    <div className={styles.wrapper}>
      <LeftBox
        {...currentClothesInfo}
        currentCounts={currentCounts}
        clothesPhotos={clothesPhotos}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <RightBox
        clothesId={clothesId}
        currentClothesInfo={currentClothesInfo}
        currentDesignersInfo={currentDesignersInfo}
        activeTab={activeTab}
      />
    </div>
  );
};

ProductDescription.propTypes = {
  clothesId: PropTypes.string.isRequired,
  designerId: PropTypes.string.isRequired,
};

export default memo(ProductDescription);
