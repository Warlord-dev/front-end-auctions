import { SubscriptionClient } from 'graphql-subscriptions-client';
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
    this.url = 'wss://api.thegraph.com/subgraphs/name/digitalax/digitalaxropsten'; // TODO::rm default url
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
    this.createClient();
  }

  onDaysChange(countDays) {
    return this.client.request({ query: onDaysChange, variables: { first: countDays } });
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
