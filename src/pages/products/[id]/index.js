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

  const currentClothesInfo = { // TODO::rm
    clothesId: garment.id,
    clothesName: garment.id,
    clothesHashAddress: '0xe45efe0cc13eb90xe45efe0cc13eb90xe45efe0cc2',
    clothesPhotos: [
      {
        isMain: true,
        image: garment.tokenUri,
      },
    ],
    estimateApy: 127,
    expirationDate: 'November 12, 2020, 1:59 PM PST',
    youReceive: '1 x FBX (specs), 1 x JPEG (1080x1350)',
    valueChildNfts: 'ERC1155',
    valueApy: '',
  };

  return <PageProduct clothesId={garment.id} currentClothesInfo={currentClothesInfo} />;
};


export default memo(Products);
