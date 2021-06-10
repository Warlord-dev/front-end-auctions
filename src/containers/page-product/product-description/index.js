import React, { memo, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTokenInfo } from '@hooks/token.info.hooks';
import { getGarmentsById, getGarmentsReceiveByName } from '@selectors/garment.selectors';
import { getDesignerInfoById, getDesignerInfoByName } from '@selectors/designer.selectors';
import { createArrayForGallery } from '@helpers/photo.helpers';
import { COMMON_RARITY, SEMI_RARE_RARITY } from '@constants/global.constants';
import LeftBox from './left-box';
import RightBox from './right-box';
import styles from './styles.module.scss';

const ProductDescription = ({
  collectionId,
  clothesId,
  auctionIndex,
  currentCollections,
  currentMarketplaceOffers,
  activeTab,
  setActiveTab,
}) => {
  const garment = useSelector(getGarmentsById(clothesId));
  // const tokenUri = useMemo(() => {
  //   if (activeTab === 0) {
  //     return garment.tokenUri;
  //   }
  //   if (activeTab === 1) {
  //     const t_semiRare = currentCollections.find(
  //       (collection) => collection.rarity === SEMI_RARE_RARITY,
  //     );
  //     return t_semiRare ? t_semiRare.garments[0].tokenUri : '';
  //   }
  //   if (activeTab === 3) {
  //     //hardcoded
  //     return 'https://gateway.pinata.cloud/ipfs/Qmam1Wj39rZbBbmyVmHLyBcwnLCr1eJbmSDJcCcUav5vXg';
  //   }
  //   const t_common = currentCollections.find((collection) => collection.rarity === COMMON_RARITY);
  //   return t_common ? t_common.garments[0].tokenUri : '';
  // }, [activeTab, currentCollections]);

  // const tokenInfo = useTokenInfo(tokenUri.trim(), [tokenUri]);
  // const clothesPhotos = useMemo(
  //   () => createArrayForGallery(parseInt(collectionId) === 4 ? garment : tokenInfo),
  //   [parseInt(collectionId) === 4 ? garment : tokenInfo],
  // );
  const clothesPhotos = useMemo(() => createArrayForGallery(garment), [garment]);
  // const currentDesignersInfo = useSelector(
  //   activeTab === 3
  //     ? getDesignerInfoByName('Digitalax', true)
  //     : getDesignerInfoById(garment.designer),
  // );

  const currentDesignersInfo = useSelector(
    getDesignerInfoByName(
      activeTab === 3 ? 'Digitalax' : garment.attributes ? garment.attributes[0].value : '',
      true,
    ),
  );
  const receive = useSelector(getGarmentsReceiveByName(garment?.name));

  const currentCounts = useMemo(() => {
    const currentOffer = currentMarketplaceOffers.find(
      (offer) => offer.garmentCollection.id === auctionIndex,
    );
    const currentCollection = currentCollections.find(
      (collection) => collection.id === auctionIndex,
    );
    return {
      total: currentCollection ? currentCollection.garments.length : 0,
      collectionId: currentCollection ? currentCollection.id : null,
      basePrice: currentOffer ? currentOffer.primarySalePrice : '0',
      sold: currentOffer ? parseInt(currentOffer.amountSold, 10) : 0,
    };
  }, [currentCollections, currentMarketplaceOffers]);

  // const currentCounts = useMemo(() => {
  //   let t_semiRare_offer = currentMarketplaceOffers.find(
  //     (offer) => offer.garmentCollection.rarity === SEMI_RARE_RARITY,
  //   );
  //   let t_common_offer = currentMarketplaceOffers.find(
  //     (offer) => offer.garmentCollection.rarity === COMMON_RARITY,
  //   );
  //   if (activeTab === 3) {
  //     //hardcoded
  //     t_semiRare_offer = currentMarketplaceOffers.find(
  //       (offer) => offer.garmentCollection.id === '8',
  //     );
  //     t_common_offer = null;
  //   }
  //   let t_semiRare = t_semiRare_offer
  //     ? currentCollections.find((collection) => collection.id === t_semiRare_offer.id)
  //     : null;
  //   if (activeTab === 3) {
  //     //hardcoded
  //     t_semiRare = t_semiRare_offer
  //       ? currentCollections.find((collection) => collection.id == 8)
  //       : null;
  //   }
  //   const t_common = t_common_offer
  //     ? currentCollections.find((collection) => collection.id === t_common_offer.id)
  //     : null;
  //   if (activeTab === 3) {
  //     //hardcoded
  //     return [
  //       { total: 1, sold: !garment.resulted ? 0 : 1 },
  //       {
  //         total: t_semiRare ? t_semiRare.garments.length : 0,
  //         collectionId: t_semiRare ? t_semiRare.id : null,
  //         basePrice: t_semiRare_offer ? t_semiRare_offer.primarySalePrice : '0',
  //         sold: t_semiRare_offer ? parseInt(t_semiRare_offer.amountSold, 10) : 0,
  //       },
  //       {
  //         total: t_common ? t_common.garments.length : 0,
  //         collectionId: t_common ? t_common.id : null,
  //         basePrice: t_common_offer ? t_common_offer.primarySalePrice : '0',
  //         sold: t_common_offer ? parseInt(t_common_offer.amountSold, 10) : 0,
  //       },
  //       {
  //         total: t_semiRare ? t_semiRare.garments.length : 0,
  //         collectionId: t_semiRare ? t_semiRare.id : null,
  //         basePrice: t_semiRare_offer ? t_semiRare_offer.primarySalePrice : '0',
  //         sold: t_semiRare_offer ? parseInt(t_semiRare_offer.amountSold, 10) : 0,
  //       },
  //     ];
  //   }
  //   if (collectionId === 4 || collectionId === '4') {
  //     let digiOffer = currentMarketplaceOffers.find((offer) => offer.id === '8');
  //     return [
  //       {
  //         total: digiOffer ? digiOffer.garmentCollection.garments.length : 0,
  //         basePrice: digiOffer ? digiOffer.primarySalePrice : 0,
  //         sold: digiOffer ? parseInt(digiOffer.amountSold, 10) : 0,
  //         collectionId: digiOffer ? digiOffer.id : null,
  //       },
  //       {
  //         total: digiOffer ? digiOffer.garmentCollection.garments.length : 0,
  //         basePrice: digiOffer ? digiOffer.primarySalePrice : 0,
  //         sold: digiOffer ? parseInt(digiOffer.amountSold, 10) : 0,
  //         collectionId: digiOffer ? digiOffer.id : null,
  //       },
  //     ];
  //   }
  //   return [
  //     { total: 1, sold: !garment.resulted ? 0 : 1 },
  //     {
  //       total: t_semiRare ? t_semiRare.garments.length : 0,
  //       collectionId: t_semiRare ? t_semiRare.id : null,
  //       basePrice: t_semiRare_offer ? t_semiRare_offer.primarySalePrice : '0',
  //       sold: t_semiRare_offer ? parseInt(t_semiRare_offer.amountSold, 10) : 0,
  //     },
  //     {
  //       total: t_common ? t_common.garments.length : 0,
  //       collectionId: t_common ? t_common.id : null,
  //       basePrice: t_common_offer ? t_common_offer.primarySalePrice : '0',
  //       sold: t_common_offer ? parseInt(t_common_offer.amountSold, 10) : 0,
  //     },
  //   ];
  // }, [currentCollections, currentMarketplaceOffers]);

  // pull designer informations and cloth photos for all rare types
  // IMPORTANT relationships between nfts :(
  let currentClothesInfo;
  if (parseInt(collectionId) === 4) {
    currentClothesInfo = {
      clothesId,
      clothesName: garment && garment.name ? garment.name : `ID: ${clothesId}`,
      description: garment && garment.description ? garment.description : `ID: ${clothesId}`,
      estimateApy: 127,
      youReceive: receive?.receive
        ? receive.receive
        : parseInt(clothesId, 10) > 43
        ? 'Graphic, DressX Try On, Material Component, Decentraland Skin'
        : 'Graphic, FBX, Material Component',
      valueChildNfts: 'ERC1155',
      valueApy: '',
      skinId:
        garment && garment.attributes && garment.attributes[4]
          ? garment.attributes[4].value
          : '<empty>',
      hatId:
        garment && garment.attributes && garment.attributes[5]
          ? garment.attributes[5].value
          : '<empty>',
    };
  } else {
    currentClothesInfo = {
      clothesId,
      clothesName: garment && garment.name ? garment.name : `ID: ${clothesId}`,
      description: garment && garment.description ? garment.description : `ID: ${clothesId}`,
      estimateApy: 127,
      youReceive: receive?.receive
        ? receive.receive
        : parseInt(clothesId, 10) > 43
        ? 'Graphic, DressX Try On, Material Component, Decentraland Skin'
        : 'Graphic, FBX, Material Component',
      valueChildNfts: 'ERC1155',
      valueApy: '',
      skinId: garment && garment.attributes[4] ? garment.attributes[4].value : '<empty>',
      hatId: garment && garment.attributes[5] ? garment.attributes[5].value : '<empty>',
    };
  }

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
        collectionId={collectionId}
        clothesId={clothesId}
        currentCounts={currentCounts}
        currentClothesInfo={currentClothesInfo}
        currentDesignersInfo={currentDesignersInfo}
        activeTab={activeTab}
        currentCollections={currentCollections}
      />
    </div>
  );
};

ProductDescription.propTypes = {
  clothesId: PropTypes.string.isRequired,
  designerId: PropTypes.string.isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default memo(ProductDescription);
