import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import wsApi from '@services/api/ws.service';
import PageProduct from '@containers/page-product';
import historyActions from '@actions/history.actions';
import garmentPageActions from '@actions/garment.page.actions';
import auctionActions from '@actions/auction.actions';
import auctionPageActions from '@actions/auction.page.actions';
import { getGarmentsById } from '@selectors/garment.selectors';
import { getChainId } from '@selectors/global.selectors';
import { useSubscription } from '@hooks/subscription.hooks';

const Products = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const garment = useSelector(getGarmentsById(id));
  const chainId = useSelector(getChainId);

  // const fetchAdditionalData = () => {
  //   dispatch(garmentPageActions.fetchGarmentByIds([id]));
  // };

  useSubscription(
    {
      request: wsApi.onAuctionsChangeByIds([id]),
      next: (data) => {
        dispatch(auctionActions.mapData(data.digitalaxGarmentAuctions));
        // fetchAdditionalData();
      },
    },
    [chainId, id],
  );

  useSubscription(
    {
      request: wsApi.onAllAuctionsChange(),
      next: (data) => {
        dispatch(
          auctionPageActions.updateAuctions(data.digitalaxGarmentAuctions),
        );
      },
    },
    [chainId],
  );

  useSubscription(
    {
      request: wsApi.onAuctionsHistoryByIds([id]),
      next: (data) => dispatch(historyActions.mapData(data.digitalaxGarmentAuctionHistories)),
    },
    [chainId, id],
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

  return <PageProduct clothesId={garment.id} designerId={designerId} />;
};

export default memo(Products);
