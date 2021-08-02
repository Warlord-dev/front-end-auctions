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
import { getAllMarketplaceOffersV1 } from '@selectors/collection.selectors';

const ProductDescription = ({
  collectionId,
  clothesId,
  auctionIndex,
  currentCollections,
  currentMarketplaceOffers,
  activeTab,
  setActiveTab,
}) => {
  let garment = useSelector(getGarmentsById(clothesId));
  const currentMarkteplaceOffersV1 = useSelector(getAllMarketplaceOffersV1).toJS();
  if (parseInt(collectionId) === 2) {
    garment = {
      name: 'Genesis DIGI Bundle',
      description:
        'The DIGI Bundle is the ultimate Esports, Gaming, Digital Fashion package. It contains 4 unique surprises that cross the digital-physical realms. 1. The Player Access Card (PAC) provides an in-game flare for the Esports tournaments, giving Players a higher chance of being allocated the Imposter role. 2. Special Edition Digital Fashion NFT designed by Cosmos that can be taken into the Among Us Sheriff Mod. 3. Physical Charli Cohen Unisex Jacket that incorporates the on-chain issued Genesis Charli Cohen pattern.  Every jacket is different, no two jackets are the same. 4. Best Plays of the Game Memorabilia NFT from the Among Us Sheriff Mod tournaments and airdropped after the tournament rounds.',
      'external url': 'https://skins.digitalax.xyz/',
      animation: 'https://gateway.pinata.cloud/ipfs/QmRdxLAmXR36dNr6cKJeXNyEzSd1JKYMmzbQipHv3HZ1b1',
      image: 'https://gateway.pinata.cloud/ipfs/Qmc9oYm7Vb4zK1EBw6QJGwRPg4BQbdx5bx5kfWWhHgZAHp',
      image2: 'https://gateway.pinata.cloud/ipfs/Qmem8dCoDLJSkHZ8xguwkpt9KAFtfYq28M2HjQmAc37TYW',
      image3: 'https://gateway.pinata.cloud/ipfs/Qmby9cGdRqi5ZzGdd7ifQeGEuykDDESbmCednuGd92Jd4C',
      image4: 'https://gateway.pinata.cloud/ipfs/QmWQymzUCDhZ1N6z2Pq2GM7a4h9CqBTto7yRjuVyK9JB5a',
      attributes: [
        {
          trait_type: 'Issuance',
          value: 'Among Us Genesis',
        },
        {
          trait_type: 'Collection',
          value: 'DIGI Bundle',
        },
        {
          trait_type: 'Game Classifier',
          value: 'Among Us Sheriff Mod',
        },
        {
          trait_type: 'Degree of Exclusivity',
          value: 'Semi-Rare',
        },
      ],
    };
  }
  const clothesPhotos = useMemo(() => createArrayForGallery(garment), [garment]);
  const currentDesignersInfo = useSelector(
    getDesignerInfoByName(
      activeTab === 3
        ? 'Digitalax'
        : collectionId === '1'
        ? 'Cosmos'
        : garment.attributes && garment.attributes[0]
        ? garment.attributes[0].value
        : '',
      true,
    ),
  );
  const receive = useSelector(getGarmentsReceiveByName(garment?.name));

  const currentCounts = useMemo(() => {
    let currentOffer = currentMarketplaceOffers.find(
      (offer) => offer.garmentCollection.id === auctionIndex,
    );
    if (collectionId === '1' && currentOffer) {
      const v1Offer = currentMarkteplaceOffersV1.find((offer) => offer.id === currentOffer.id[1]);
      if (v1Offer) {
        currentOffer.amountSold = parseInt(currentOffer.amountSold) + parseInt(v1Offer.amountSold);
      }
    }
    const currentCollection = currentCollections.find(
      (collection) => collection.id === auctionIndex,
    );
    return {
      total: currentCollection ? currentCollection.garments.length : 0,
      collectionId: currentCollection ? currentCollection.id : null,
      basePrice: currentOffer ? currentOffer.primarySalePrice : '0',
      sold: currentOffer ? parseInt(currentOffer.amountSold, 10) : 0,
    };
  }, [currentCollections, currentMarketplaceOffers, currentMarkteplaceOffersV1]);

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
