import React, { memo, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import wsApi from '@services/api/ws.service';
import PageProduct from '@containers/page-product';
import historyActions from '@actions/history.actions';
import garmentPageActions from '@actions/garment.page.actions';
import auctionActions from '@actions/auction.actions';
import collectionActions from '@actions/collection.actions';
import auctionPageActions from '@actions/auction.page.actions';
import { getGarmentsById } from '@selectors/garment.selectors';
import { getAllCollections, getAllMarketplaceOffers } from '@selectors/collection.selectors';
import { getChainId } from '@selectors/global.selectors';
import { useSubscription } from '@hooks/subscription.hooks';

const Products = () => {
  const router = useRouter();
  const { id, garment_id, auction_index, product_Id } = router.query;
  const auctionId = product_Id.slice(0, product_Id.length - 1);
  const tabIndex = parseInt(product_Id.slice(product_Id.length - 1));

  if (tabIndex > 3) {
    return null;
  } //hardcoded
  const dispatch = useDispatch();
  let garment = useSelector(getGarmentsById(garment_id));
  if (parseInt(id) === 2) {
    garment = {
      name: 'Genesis DIGI Bundle',
      description:
        'The DIGI Bundle is the ultimate Esports, Gaming, Digital Fashion package. It contains 4 unique surprises that cross the digital-physical realms. 1. The Player Access Card (PAC) provides an in-game flare for the Esports tournaments, giving Players a higher chance of being allocated the Imposter role. 2. Special Edition Digital Fashion NFT designed by Kodomodachi that can be taken into the Among Us Sheriff Mod. 3. Physical Charli Cohen Unisex Jacket that incorporates the on-chain issued Genesis Charli Cohen pattern.  Every jacket is different, no two jackets are the same. 4. Best Plays of the Game Memorabilia NFT from the Among Us Sheriff Mod tournaments and airdropped after the tournament rounds.',
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
  const collections = useSelector(getAllCollections).toJS();
  const marketplaceOffers = useSelector(getAllMarketplaceOffers).toJS();
  const chainId = useSelector(getChainId);
  // const currentCollections = useMemo(() => {
  //   const jsCollection = collections.toJS();
  //   return jsCollection.filter((val) => val.garmentAuctionID === auctionId);
  // }, [collections]);

  // const currentMarketplaceOffers = useMemo(() => {
  //   const jsOffers = marketplaceOffers.toJS();
  //   if (id !== '4') {
  //     return jsOffers.filter((val) => val.garmentCollection.garmentAuctionID === auctionId);
  //   } else {
  //     return jsOffers.filter(
  //       (val) =>
  //         val.garmentCollection.garments.length &&
  //         val.garmentCollection.garments[0].name.includes('DIGI'),
  //     );
  //   }
  // }, [marketplaceOffers]);

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onAuctionsChangeByIds([auctionId])
          : wsApi.onAuctionsChangeByIdsV2([auctionId]),
      next: (data) => {
        dispatch(auctionActions.mapData(data?.digitalaxGarmentAuctions || []));
      },
    },
    [chainId, auctionId],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onDigitalaxGarmentsCollectionChange(auctionId)
          : id === '4'
          ? wsApi.getAllDigitalaxGarmentsCollectionsV2()
          : wsApi.onDigitalaxGarmentsCollectionChangeV2(auctionId),
      next: (data) => {
        dispatch(collectionActions.mapData(data?.digitalaxGarmentCollections || []));
      },
    },
    [chainId, auctionId],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onDigitalaxMarketplaceOffers(collections.map((val) => val.id))
          : id === '4'
          ? wsApi.getAllDigitalaxMarketplaceOffersV2()
          : wsApi.onDigitalaxMarketplaceOffersV2(collections.map((val) => val.id)),
      next: (data) => {
        dispatch(collectionActions.updateMarketplaceOffers(data?.digitalaxMarketplaceOffers || []));
      },
    },
    [chainId, collections],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2' ? wsApi.onAllAuctionsChange() : wsApi.onAllAuctionsChangeV2(),
      next: (data) => {
        dispatch(auctionPageActions.updateAuctions(data?.digitalaxGarmentAuctions || []));
      },
    },
    [chainId],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onAuctionsHistoryByIds([auctionId])
          : wsApi.onAuctionsHistoryByIdsV2([auctionId]),
      next: (data) =>
        dispatch(historyActions.mapData(data?.digitalaxGarmentAuctionHistories || [])),
    },
    [chainId, auctionId],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onMarketplaceHistoryByIds([auctionId])
          : id === '3'
          ? wsApi.onMarketplaceHistoryByIdsV2([auctionId])
          : wsApi.onMarketplaceHistoryByIdsV2(['100457']),
      next: (data) =>
        dispatch(
          historyActions.updateMarketplaceHistories(
            data?.digitalaxMarketplacePurchaseHistories || [],
          ),
        ),
    },
    [chainId, auctionId],
  );

  useEffect(
    () => () => {
      if (!garment) {
        dispatch(garmentPageActions.reset());
      }
    },
    [],
  );

  if (!garment) {
    return null;
  }

  const designerId = garment?.designer;

  return (
    <PageProduct
      collectionId={id}
      clothesId={garment.id}
      tabIndex={tabIndex}
      auctionId={auctionId}
      designerId={designerId}
      auctionIndex={auction_index}
      currentCollections={collections}
      currentMarketplaceOffers={marketplaceOffers}
    />
  );
};

export default memo(Products);
