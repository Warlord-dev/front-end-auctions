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
  const garmentId = id.slice(0, id.length - 1);
  const tabIndex = parseInt(id.slice(id.length - 1));

  if (tabIndex > 3) {
    return null;
  } //hardcoded
  console.log({garmentId});
  const dispatch = useDispatch();
  const garment = useSelector(getGarmentsById(garmentId));
  const collections = useSelector(getAllCollections);
  const marketplaceOffers = useSelector(getAllMarketplaceOffers);
  const chainId = useSelector(getChainId);
  const currentCollections = useMemo(() => {
    const jsCollection = collections.toJS();
    return jsCollection.filter((val) => val.garmentAuctionID === garmentId);
  }, [collections]);

  const currentMarketplaceOffers = useMemo(() => {
    const jsOffers = marketplaceOffers.toJS();
    return jsOffers.filter((val) => val.garmentCollection.garmentAuctionID === garmentId);
  }, [marketplaceOffers]);

  useSubscription(
    {
      request: wsApi.onAuctionsChangeByIds([garmentId]),
      next: (data) => {
        dispatch(auctionActions.mapData(data.digitalaxGarmentAuctions));
      },
    },
    [chainId, garmentId]
  );

  useSubscription(
    {
      request: wsApi.onDigitalaxGarmentsCollectionChange(garmentId),
      next: (data) => {
        dispatch(collectionActions.mapData(data.digitalaxGarmentCollections));
      },
    },
    [chainId, garmentId]
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
      request: wsApi.onAuctionsHistoryByIds([garmentId]),
      next: (data) => dispatch(historyActions.mapData(data.digitalaxGarmentAuctionHistories)),
    },
    [chainId, garmentId]
  );

  useSubscription(
    {
      request: wsApi.onMarketplaceHistoryByIds([garmentId]),
      next: (data) =>
        dispatch(
          historyActions.updateMarketplaceHistories(data.digitalaxMarketplacePurchaseHistories)
        ),
    },
    [chainId, garmentId]
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
      tabIndex={tabIndex}
      designerId={designerId}
      currentCollections={currentCollections}
      currentMarketplaceOffers={currentMarketplaceOffers}
    />
  );
};

export default memo(Products);
