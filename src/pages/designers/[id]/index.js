import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import PageDesignerDescription from '@containers/page-designer-description';
import { getChainId } from '@selectors/global.selectors';
import { getDesignerGarmentIds } from '@selectors/designer.selectors';
import wsApi from '@services/api/ws.service';
import designerPageActions from '@actions/designer.page.actions';
import historyActions from '@actions/history.actions';
import auctionActions from '@actions/auction.actions';

const Designers = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const chainId = useSelector(getChainId);
  const designerGarmentIds = useSelector(getDesignerGarmentIds(id));

  useEffect(() => {

    const request = wsApi.onDesignerByIds([id]);

    const { unsubscribe } = request.subscribe({
      next({ data }) {
        if (!data) {
          return;
        }
        data.digitalaxGarmentDesigners[0].listings.push({
          endTime: '1606310534',
          id: '4',
          lastBidTime: null,
          reservePrice: '0',
          resulted: false,
          startTime: '1605879479',
          topBid: null,
          topBidder: null,
        }, {
          endTime: '1606310534',
          id: '3',
          lastBidTime: '1605189787',
          reservePrice: '650000000000000000',
          resulted: false,
          startTime: '0',
          topBid: '900000000000000000',
          topBidder: {
            id: '0xd677aed0965ac9b54e709f01a99ceca205aebc4b',
          },
        });
        dispatch(designerPageActions.update(data.digitalaxGarmentDesigners));
      },
    });

    return () => unsubscribe();

  }, [chainId]);

  useEffect(() => {

    const ids = designerGarmentIds.toJS();

    if (!ids.length) {
      return () => {};
    }

    const request = wsApi.onAuctionsHistoryByIds(ids);

    const { unsubscribe } = request.subscribe({
      next({ data }) {
        if (!data) {
          return;
        }
        dispatch(historyActions.mapData(data.digitalaxGarmentAuctionHistories));
      },
    });

    return () => unsubscribe();

  }, [chainId, JSON.stringify(designerGarmentIds)]);


  useEffect(() => {

    const ids = designerGarmentIds.toJS();

    if (!ids.length) {
      return () => {};
    }

    const dateMonth = new Date();
    dateMonth.setDate(dateMonth.getDate() - 30); // now - 30 days

    const request = wsApi.onResultedAuctionsByEndTimeGtAndIds(ids, parseInt(dateMonth / 1000, 10));

    const { unsubscribe } = request.subscribe({
      next({ data }) {

        if (!data) {
          return;
        }

        dispatch(auctionActions.setValue('monthResultedAuctions', data.digitalaxGarmentAuctions));
      },
    });

    return () => unsubscribe();

  }, [chainId, JSON.stringify(designerGarmentIds)]);


  useEffect(() => () => {
    dispatch(designerPageActions.reset());
  }, []);

  return (
    <PageDesignerDescription
      designerId={id}
      clothesIds={designerGarmentIds}
    />
  );
};

export default memo(Designers);
