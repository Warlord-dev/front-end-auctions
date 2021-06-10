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
  const garment = useSelector(getGarmentsById(garment_id));
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

  const designerId = garment.designer;

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
