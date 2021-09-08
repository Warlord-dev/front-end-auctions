import { getAPIUrlByChainId } from '@services/network.service';
import { request } from 'graphql-request';
import {
  COLLECTIONS,
  COLLECTIONSV2,
  COLLECTION_GROUPS,
  COLLECTION_GROUP_BY_ID,
  DIGITALAX_GARMENT_AUCTIONS,
  DIGITALAX_GARMENT_COLLECTIONS,
  DIGITALAX_GARMENT_NFT_V2_GLOBAL_STATS,
  DIGITALAX_GARMENT_PURCHASE_HISTORIES,
  DIGITALAX_GARMENT_V2_PURCHASE_HISTORIES,
  DIGITALAX_MARKETPLACE_OFFER,
  DIGITALAX_MARKETPLACE_OFFERS,
  DIGITALAX_MARKETPLACE_PURCHASE_HISTORIES,
  DIGITALAX_MARKETPLACE_V2_OFFER,
  DIGITALAX_MARKETPLACE_V2_OFFERS,
  DIGITALAX_MARKETPLACE_V2_PURCHASE_HISTORIES,
  GARMENTV2_BY_AUCTION_ID,
  GARMENTV2_BY_COLLECTION_ID,
  GARMENTV2_BY_COLLECTION_IDS,
  GARMENT_BY_AUCTION_ID,
  GARMENT_BY_COLLECTION_ID,
} from './gql.apiService';

const apiRequest = (chainId, gql, params) => request(getAPIUrlByChainId(chainId), gql, params);

export const getCollections = async (chainId) => apiRequest(chainId, COLLECTIONS);

export const getCollectionsV2 = async (chainId) => apiRequest(chainId, COLLECTIONSV2);

export const getCollectionGroups = async (chainId) => apiRequest(chainId, COLLECTION_GROUPS);

export const getDigitalaxGarmentCollections = async (chainId) => apiRequest(chainId, DIGITALAX_GARMENT_COLLECTIONS);

export const getCollectionGroupById = async (chainId, id) =>
  apiRequest(chainId, COLLECTION_GROUP_BY_ID, { id });

export const getGarmentV2ByCollectionId = async (chainId, id) =>
  apiRequest(chainId, GARMENTV2_BY_COLLECTION_ID, { id });

export const getGarmentByCollectionId = async (chainId, id) =>
  apiRequest(chainId, GARMENT_BY_COLLECTION_ID, { id });

export const getCollectionV2ByIds = async (chainId, ids) =>
  apiRequest(chainId, GARMENTV2_BY_COLLECTION_IDS, { ids });

export const getGarmentV2ByAuctionId = async (chainId, id) =>
  apiRequest(chainId, GARMENTV2_BY_AUCTION_ID, { id });

export const getDigitalaxMarketplaceOffers = async (chainId) =>
  apiRequest(chainId, DIGITALAX_MARKETPLACE_OFFERS);

export const getDigitalaxMarketplaceV2Offer = async (chainId, garmentCollection) =>
  apiRequest(chainId, DIGITALAX_MARKETPLACE_V2_OFFER, { garmentCollection });

export const getDigitalaxMarketplaceOffer = async (chainId, garmentCollection) =>
  apiRequest(chainId, DIGITALAX_MARKETPLACE_OFFER, { garmentCollection });

export const getDigitalaxMarketplaceV2Offers = async (chainId) =>
  apiRequest(chainId, DIGITALAX_MARKETPLACE_V2_OFFERS);

export const getDigitalaxMarketplaceV2PurchaseHistories = async (chainId, ids) =>
  apiRequest(chainId, DIGITALAX_MARKETPLACE_V2_PURCHASE_HISTORIES, { ids });

export const getDigitalaxMarketplacePurchaseHistories = async (chainId, ids) =>
  apiRequest(chainId, DIGITALAX_MARKETPLACE_PURCHASE_HISTORIES, { ids });

export const getDigitalaxGarmentV2PurchaseHistories = async (chainId, id) =>
  apiRequest(chainId, DIGITALAX_GARMENT_V2_PURCHASE_HISTORIES, { id });

export const getDigitalaxGarmentPurchaseHistories = async (chainId, id) =>
  apiRequest(chainId, DIGITALAX_GARMENT_PURCHASE_HISTORIES, { id });

export const getDigitalaxGarmentNftV2GlobalStats = async (chainId) =>
  apiRequest(chainId, DIGITALAX_GARMENT_NFT_V2_GLOBAL_STATS);

export const getDigitalaxGarmentAuctions = async (chainId) =>
  apiRequest(chainId, DIGITALAX_GARMENT_AUCTIONS);

export const getGarmentByAuctionId = async (chainId, id) =>
  apiRequest(chainId, GARMENT_BY_AUCTION_ID, { id });