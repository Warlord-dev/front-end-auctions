import moment from 'moment';
import { SubscriptionClient } from 'graphql-subscriptions-client';
import { DEV_WS_NETWORK_URL } from '@constants/global.constants';
import {
  onDaysChange,
  onAuctionsChange,
  onPreviousAuctionsChange,
  onAllAuctionsChange,
  onAuctionsChangeByIds,
  onDesignerByIds,
  onAuctionsHistoryByIds,
  onResultedAuctionsByEndTimeGtAndIds,
  onNFTGlobalStats,
  onDigitalaxGarmentsCollectionChange,
  onDigitalaxMarketplaceOffers,
  onMarketplaceHistoryByIds,
  getAllDigitalaxGarmentsCollections,
  onDigitalaxGarmentsCollectionChangeByIds,
  allDigitalaxMarketplaceOffers,
} from '@services/api/gql.subscriptions.ws.service';
import {
  allDigitalaxMarketplaceOffersV2,
  getAllDigitalaxGarmentsCollectionsV2,
  onAllAuctionsChangeV2,
  onAuctionsChangeByIdsV2,
  onAuctionsHistoryByIdsV2,
  onDaysChangeV2,
  onDigitalaxGarmentsCollectionChangeV2,
  onDigitalaxMarketplaceOffersV2,
  onMarketplaceHistoryByIdsV2,
  onNFTGlobalStatsV2,
} from './gql.subscriptions.v2.ws.service';

class WSService {
  constructor() {
    this.url = DEV_WS_NETWORK_URL;
    this.client = null;
  }

  createClient() {
    this.client = new SubscriptionClient(this.url, {
      reconnect: true,
      lazy: true, // only connect when there is a query
    });
    return this.client;
  }

  setUrl(url) {
    this.url = url;
    if (this.client) {
      this.client.close(true);
    }
    this.createClient();
  }

  onDaysChange(countDays) {
    const date = moment().subtract(countDays, 'day').format('YYYY-MM-DD');
    return this.client.request({ query: onDaysChange, variables: { date } });
  }

  onNFTGlobalStats() {
    return this.client.request({ query: onNFTGlobalStats });
  }

  onAuctionsChange() {
    return this.client.request({ query: onAuctionsChange });
  }

  onPreviousAuctionsChange() {
    return this.client.request({ query: onPreviousAuctionsChange });
  }

  onAllAuctionsChange() {
    return this.client.request({ query: onAllAuctionsChange });
  }

  onAuctionsChangeByIds(ids) {
    return this.client.request({
      query: onAuctionsChangeByIds,
      variables: { ids },
    });
  }

  onDesignerByIds(ids) {
    return this.client.request({ query: onDesignerByIds, variables: { ids } });
  }

  onAuctionsHistoryByIds(ids) {
    return this.client.request({
      query: onAuctionsHistoryByIds,
      variables: { ids },
    });
  }

  onMarketplaceHistoryByIds(ids) {
    return this.client.request({
      query: onMarketplaceHistoryByIds,
      variables: { ids },
    });
  }

  onResultedAuctionsByEndTimeGtAndIds(ids, endTime) {
    return this.client.request({
      query: onResultedAuctionsByEndTimeGtAndIds,
      variables: { endTime, ids },
    });
  }

  onDigitalaxGarmentsCollectionChange(garmentAuctionNFTId) {
    return this.client.request({
      query: onDigitalaxGarmentsCollectionChange,
      variables: { garmentAuctionNFTId },
    });
  }

  getAllDigitalaxGarmentsCollections() {
    return this.client.request({
      query: getAllDigitalaxGarmentsCollections,
    });
  }

  onDigitalaxMarketplaceOffers(ids) {
    return this.client.request({
      query: onDigitalaxMarketplaceOffers,
      variables: { ids },
    });
  }

  getAllDigitalaxMarketplaceOffers() {
    return this.client.request({
      query: allDigitalaxMarketplaceOffers,
    });
  }

  onDigitalaxGarmentsCollectionChangeByIds(ids) {
    return this.client.request({
      query: onDigitalaxGarmentsCollectionChangeByIds,
      variables: { ids },
    });
  }

  // v2

  getAllDigitalaxGarmentsCollectionsV2() {
    return this.client.request({
      query: getAllDigitalaxGarmentsCollectionsV2,
    });
  }

  getAllDigitalaxMarketplaceOffersV2() {
    return this.client.request({
      query: allDigitalaxMarketplaceOffersV2,
    });
  }

  onDigitalaxMarketplaceOffersV2(ids) {
    return this.client.request({
      query: onDigitalaxMarketplaceOffersV2,
      variables: { ids },
    });
  }

  onAuctionsChangeByIdsV2(ids) {
    return this.client.request({
      query: onAuctionsChangeByIdsV2,
      variables: { ids },
    });
  }

  onDigitalaxGarmentsCollectionChangeV2(garmentAuctionNFTId) {
    return this.client.request({
      query: onDigitalaxGarmentsCollectionChangeV2,
      variables: { garmentAuctionNFTId },
    });
  }

  onAllAuctionsChangeV2() {
    return this.client.request({ query: onAllAuctionsChangeV2 });
  }

  onAuctionsHistoryByIdsV2(ids) {
    return this.client.request({
      query: onAuctionsHistoryByIdsV2,
      variables: { ids },
    });
  }

  onMarketplaceHistoryByIdsV2(ids) {
    return this.client.request({
      query: onMarketplaceHistoryByIdsV2,
      variables: { ids },
    });
  }

  onDaysChangeV2(countDays) {
    const date = moment().subtract(countDays, 'day').format('YYYY-MM-DD');
    return this.client.request({ query: onDaysChangeV2, variables: { date } });
  }

  onNFTGlobalStatsV2() {
    return this.client.request({ query: onNFTGlobalStatsV2 });
  }
}

export default new WSService();
