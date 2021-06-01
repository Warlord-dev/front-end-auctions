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
  onAuctionsChangeV2,
  onAuctionsHistoryByIdsV2,
  onDaysChangeV2,
  onDesignerByIdsV2,
  onDigitalaxGarmentsCollectionChangeByIdsV2,
  onDigitalaxGarmentsCollectionChangeV2,
  onDigitalaxMarketplaceOffersV2,
  onMarketplaceHistoryByIdsV2,
  onNFTGlobalStatsV2,
  onPreviousAuctionsChangeV2,
  onResultedAuctionsByEndTimeGtAndIdsV2,
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

  getQuery(query1, query2) {
    if (this.url.includes('matic') || this.url.includes('mumbai')) {
      return query2;
    } else {
      return query1;
    }
  }

  onDaysChange(countDays) {
    const date = moment().subtract(countDays, 'day').format('YYYY-MM-DD');
    return this.client.request({
      query: this.getQuery(onDaysChange, onDaysChangeV2),
      variables: { date },
    });
  }

  onNFTGlobalStats() {
    return this.client.request({ query: this.getQuery(onNFTGlobalStats, onNFTGlobalStatsV2) });
  }

  onAuctionsChange() {
    return this.client.request({ query: this.getQuery(onAuctionsChange, onAuctionsChangeV2) });
  }

  onPreviousAuctionsChange() {
    return this.client.request({
      query: this.getQuery(onPreviousAuctionsChange, onPreviousAuctionsChangeV2),
    });
  }

  onAllAuctionsChange() {
    return this.client.request({
      query: this.getQuery(onAllAuctionsChange, onAllAuctionsChangeV2),
    });
  }

  onAuctionsChangeByIds(ids) {
    return this.client.request({
      query: this.getQuery(onAuctionsChangeByIds, onAuctionsChangeByIdsV2),
      variables: { ids },
    });
  }

  onDesignerByIds(ids) {
    return this.client.request({
      query: this.getQuery(onDesignerByIds, onDesignerByIdsV2),
      variables: { ids },
    });
  }

  onAuctionsHistoryByIds(ids) {
    return this.client.request({
      query: this.getQuery(onAuctionsHistoryByIds, onAuctionsHistoryByIdsV2),
      variables: { ids },
    });
  }

  onMarketplaceHistoryByIds(ids) {
    return this.client.request({
      query: this.getQuery(onMarketplaceHistoryByIds, onMarketplaceHistoryByIdsV2),
      variables: { ids },
    });
  }

  onResultedAuctionsByEndTimeGtAndIds(ids, endTime) {
    return this.client.request({
      query: this.getQuery(
        onResultedAuctionsByEndTimeGtAndIds,
        onResultedAuctionsByEndTimeGtAndIdsV2,
      ),
      variables: { endTime, ids },
    });
  }

  onDigitalaxGarmentsCollectionChange(garmentAuctionNFTId) {
    return this.client.request({
      query: this.getQuery(
        onDigitalaxGarmentsCollectionChange,
        onDigitalaxGarmentsCollectionChangeV2,
      ),
      variables: { garmentAuctionNFTId },
    });
  }

  getAllDigitalaxGarmentsCollections() {
    return this.client.request({
      query: this.getQuery(
        getAllDigitalaxGarmentsCollections,
        getAllDigitalaxGarmentsCollectionsV2,
      ),
    });
  }

  onDigitalaxMarketplaceOffers(ids) {
    return this.client.request({
      query: this.getQuery(onDigitalaxMarketplaceOffers, onDigitalaxMarketplaceOffersV2),
      variables: { ids },
    });
  }

  getAllDigitalaxMarketplaceOffers() {
    return this.client.request({
      query: this.getQuery(allDigitalaxMarketplaceOffers, allDigitalaxMarketplaceOffersV2),
    });
  }

  onDigitalaxGarmentsCollectionChangeByIds(ids) {
    return this.client.request({
      query: this.getQuery(
        onDigitalaxGarmentsCollectionChangeByIds,
        onDigitalaxGarmentsCollectionChangeByIdsV2,
      ),
      variables: { ids },
    });
  }
}

export default new WSService();
