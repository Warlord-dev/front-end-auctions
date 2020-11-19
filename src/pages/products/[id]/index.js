import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import wsApi from '@services/api/ws.service';
import PageProduct from '@containers/page-product';
import historyActions from '@actions/history.actions';
import garmentPageActions from '@actions/garment.page.actions';
import auctionActions from '@actions/auction.actions';
import { getGarmentsById } from '@selectors/garment.selectors';
import { getChainId } from '@selectors/global.selectors';


const Products = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const garment = useSelector(getGarmentsById(id));
  const chainId = useSelector(getChainId);

  const fetchAdditionalData = () => {
    dispatch(garmentPageActions.fetchGarmentByIds([id]));
  };

  useEffect(() => {

    const request = wsApi.onAuctionsChangeByIds([id]);
    const { unsubscribe } = request.subscribe({
      next({ data }) {
        if (!data) {
          return;
        }
        dispatch(auctionActions.mapData(data.digitalaxGarmentAuctions));
        fetchAdditionalData();
      },
    });

    return () => unsubscribe();
  }, [chainId, id]);

  useEffect(() => {

    const request = wsApi.onAuctionsHistoryByIds([id]);

    const { unsubscribe } = request.subscribe({
      next({ data }) {
        if (!data) {
          return;
        }
        dispatch(historyActions.mapData(data.digitalaxGarmentAuctionHistories));
      },
    });

    return () => unsubscribe();

  }, [id, chainId]);

  useEffect(() => () => {
    dispatch(garmentPageActions.reset());
  }, []);

  if (!garment) {
    return null;
  }

  const designerId = garment.designer;

  return <PageProduct clothesId={garment.id} designerId={designerId} />;
};


export default memo(Products);
