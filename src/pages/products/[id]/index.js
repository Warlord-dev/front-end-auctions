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
  const { id } = router.query;

  const dispatch = useDispatch();
  const garment = useSelector(getGarmentsById(id));
  const collections = useSelector(getAllCollections);
  const marketplaceOffers = useSelector(getAllMarketplaceOffers);
  const chainId = useSelector(getChainId);
  console.log('--garment', garment);
  const currentCollections = useMemo(() => {
    const jsCollection = collections.toJS();
    console.log('--collections', jsCollection);
    return jsCollection.filter((val) => val.garmentAuctionID === id);
  }, [collections]);

  const currentMarketplaceOffers = useMemo(() => {
    const jsOffers = marketplaceOffers.toJS();
    console.log('--current--marketplace', jsOffers);
    return jsOffers.filter((val) => val.garmentCollection.garmentAuctionID === id);
  }, [marketplaceOffers]);
  
  useSubscription(
    {
      request: wsApi.onAuctionsChangeByIds([id]),
      next: (data) => {
        dispatch(auctionActions.mapData(data.digitalaxGarmentAuctions));
      },
    },
    [chainId, id]
  );

  useSubscription(
    {
      request: wsApi.onDigitalaxGarmentsCollectionChange(id),
      next: (data) => {
        dispatch(collectionActions.mapData(data.digitalaxGarmentCollections));
      },
    },
    [chainId, id]
  );

  useSubscription(
    {
      request: wsApi.onDigitalaxMarketplaceOffers(currentCollections.map((val) => val.id)),
      next: (data) => {
        dispatch(collectionActions.updateMarketplaceOffers(data.digitalaxMarketplaceOffers));
      },
    },
    [chainId, currentCollections]
  );

  useSubscription(
    {
      request: wsApi.onAllAuctionsChange(),
      next: (data) => {
        dispatch(auctionPageActions.updateAuctions(data.digitalaxGarmentAuctions));
      },
    },
    [chainId]
  );

  useSubscription(
    {
      request: wsApi.onAuctionsHistoryByIds([id]),
      next: (data) => dispatch(historyActions.mapData(data.digitalaxGarmentAuctionHistories)),
    },
    [chainId, id]
  );

  useSubscription(
    {
      request: wsApi.onMarketplaceHistoryByIds([id]),
      next: (data) =>
        dispatch(
          historyActions.updateMarketplaceHistories(data.digitalaxMarketplacePurchaseHistories)
        ),
    },
    [chainId, id]
  );

  useEffect(
    () => () => {
      if (!garment) {
        dispatch(garmentPageActions.reset());
      }
    },
    []
  );

  if (!garment) {
    return null;
  }

  const designerId = garment.designer;

  return (
    <PageProduct
      clothesId={garment.id}
      designerId={designerId}
      currentCollections={currentCollections}
      currentMarketplaceOffers={currentMarketplaceOffers}
    />
  );
};

export default memo(Products);
