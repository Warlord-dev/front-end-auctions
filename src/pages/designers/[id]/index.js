import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import kebabCase from 'lodash.kebabcase';
import PageDesignerDescription from '@containers/page-designer-description';
import { getChainId } from '@selectors/global.selectors';
import { getDesignerGarmentIds, getDesignerInfoByName } from '@selectors/designer.selectors';
import wsApi from '@services/api/ws.service';
import designerPageActions from '@actions/designer.page.actions';
import historyActions from '@actions/history.actions';
import auctionActions from '@actions/auction.actions';
import { useSubscription } from '@hooks/subscription.hooks';


const Designers = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const chainId = useSelector(getChainId);
  const currentDesigner = useSelector(getDesignerInfoByName(kebabCase(id)));
  const designerGarmentIds = useSelector(getDesignerGarmentIds(currentDesigner.id));
  const ids = designerGarmentIds.toJS();

  useSubscription({
    request: wsApi.onDesignerByIds([currentDesigner.id.toLowerCase()]),
    next: (data) => dispatch(designerPageActions.update(data.digitalaxGarmentDesigners)),
  }, [chainId]);

  useSubscription({
    request: wsApi.onAuctionsHistoryByIds(ids),
    next: (data) => dispatch(historyActions.mapData(data.digitalaxGarmentAuctionHistories)),
  }, [chainId, JSON.stringify(designerGarmentIds)]);

  const dateMonth = new Date();
  dateMonth.setDate(dateMonth.getDate() - 30); // now - 30 days

  useSubscription({
    request: wsApi.onResultedAuctionsByEndTimeGtAndIds(ids, parseInt(dateMonth / 1000, 10)),
    next: (data) => dispatch(auctionActions.setValue('monthDesignerResultedAuctions', data.digitalaxGarmentAuctions)),
  }, [chainId, JSON.stringify(designerGarmentIds)]);

  useEffect(() => () => {
    dispatch(designerPageActions.reset());
  }, []);

  return (
    <PageDesignerDescription
      designerName={id}
      clothesIds={designerGarmentIds}
    />
  );
};

export default memo(Designers);
