import moment from 'moment';
import { SubscriptionClient } from 'graphql-subscriptions-client';
import { DEV_WS_NETWORK_URL } from '@constants/global.constants';
import {
  onDaysChange,
  onAuctionsChange,
  onAuctionsChangeByIds,
  onDesignerByIds,
  onAuctionsHistoryByIds,
  onResultedAuctionsByEndTimeGtAndIds,
  onNFTGlobalStats,
} from '@services/api/gql.subscriptions.ws.service';

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

  onAuctionsChangeByIds(ids) {
    return this.client.request({ query: onAuctionsChangeByIds, variables: { ids } });
  }

  onDesignerByIds(ids) {
    return this.client.request({ query: onDesignerByIds, variables: { ids } });
  }

  onAuctionsHistoryByIds(ids) {
    return this.client.request({ query: onAuctionsHistoryByIds, variables: { ids } });
  }

  onResultedAuctionsByEndTimeGtAndIds(ids, endTime) {
    return this.client.request({ query: onResultedAuctionsByEndTimeGtAndIds, variables: { endTime, ids } });
  }

}

export default new WSService();
