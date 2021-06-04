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
  const { id, product_Id } = router.query;
  const garmentId = product_Id.slice(0, product_Id.length - 1);
  const tabIndex = parseInt(product_Id.slice(product_Id.length - 1));

  if (tabIndex > 3) {
    return null;
  } //hardcoded
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
      request:
        id === '1' || id === '2'
          ? wsApi.onAuctionsChangeByIds([garmentId])
          : wsApi.onAuctionsChangeByIdsV2([garmentId]),
      next: (data) => {
        dispatch(auctionActions.mapData(data?.digitalaxGarmentAuctions || []));
      },
    },
    [chainId, garmentId],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onDigitalaxGarmentsCollectionChange(garmentId)
          : wsApi.onDigitalaxGarmentsCollectionChangeV2(garmentId),
      next: (data) => {
        dispatch(collectionActions.mapData(data?.digitalaxGarmentCollections || []));
      },
    },
    [chainId, garmentId],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onDigitalaxMarketplaceOffers(currentCollections.map((val) => val.id))
          : wsApi.onDigitalaxMarketplaceOffersV2(currentCollections.map((val) => val.id)),
      next: (data) => {
        dispatch(collectionActions.updateMarketplaceOffers(data?.digitalaxMarketplaceOffers || []));
      },
    },
    [chainId, currentCollections],
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
          ? wsApi.onAuctionsHistoryByIds([garmentId])
          : wsApi.onAuctionsHistoryByIdsV2([garmentId]),
      next: (data) =>
        dispatch(historyActions.mapData(data?.digitalaxGarmentAuctionHistories || [])),
    },
    [chainId, garmentId],
  );

  useSubscription(
    {
      request:
        id === '1' || id === '2'
          ? wsApi.onMarketplaceHistoryByIds([garmentId])
          : wsApi.onMarketplaceHistoryByIdsV2([garmentId]),
      next: (data) =>
        dispatch(
          historyActions.updateMarketplaceHistories(
            data?.digitalaxMarketplacePurchaseHistories || [],
          ),
        ),
    },
    [chainId, garmentId],
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
      designerId={designerId}
      currentCollections={currentCollections}
      currentMarketplaceOffers={currentMarketplaceOffers}
    />
  );
};

export default memo(Products);
