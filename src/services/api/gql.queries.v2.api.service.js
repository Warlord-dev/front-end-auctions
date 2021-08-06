import { gql } from 'graphql-request';
import {
  HISTORY_BID_PLACED_EVENT,
  HISTORY_BID_WITHDRAWN_EVENT,
} from '@constants/history.constants';

export const getLiveAuctionsV2 = gql`
  {
    digitalaxGarmentV2Auctions(first: 1000, where: { resulted_not_in: [true] }) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
      garment {
        id
        designer
        primarySalePrice
        tokenUri
        name
        image
        animation
        children {
          amount
          tokenUri
          id
        }
      }
      designer {
        id
      }
      contract {
        id
        minBidIncrement
        bidWithdrawalLockTime
      }
    }
  }
`;

export const getAuctionsByIdsV2 = gql`
  query getAuctionsByIds($ids: [ID!]) {
    digitalaxGarmentV2Auctions(first: 1000, where: { id_in: $ids }) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;

export const getGarmentsByIdsV2 = gql`
  query getGarmentsByIds($ids: [ID!]) {
    digitalaxGarmentV2S(first: 1000, where: { id_in: $ids }) {
      id
      designer
      owner
      primarySalePrice
      tokenUri
      children {
        amount
        tokenUri
        id
      }
    }
  }
`;

export const getDesignersByIdsV2 = gql`
  query getDesignersByIds($ids: [ID!]) {
    digitalaxGarmentV2Designers(first: 1000, where: { id_in: $ids }) {
      id
      garments(first: 1000) {
        id
        tokenUri
      }
      listings {
        reservePrice
        startTime
        endTime
        resulted
        topBidder {
          id
        }
        topBid
        lastBidTime
      }
    }
  }
`;

export const getGarmentsByDesignerIdV2 = gql`
  query getGarmentsByDesignerId($ids: [Bytes!]) {
    digitalaxGarmentV2S(first: 1000, where: { designer_in: $ids }) {
      id
      designer
      owner
      primarySalePrice
      tokenUri
      children {
        amount
        tokenUri
        id
      }
    }
  }
`;

export const getAuctionsHistoryByIdsV2 = gql`
  query getAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentV2AuctionHistories(first: 1000, where: { token_in: $ids }) {
      id
      eventName
      timestamp
      transactionHash
      bidder {
        id
      }
      value
      token {
        id
        owner
        primarySalePrice
        tokenUri
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const getAuctionsHistoryByTimestampGtV2 = gql`
  query getAuctionsHistoryByTimestampGt($timestamp: BigInt!) {
    digitalaxGarmentV2AuctionHistories(first: 1000, where: {
      eventName_in: ["${HISTORY_BID_PLACED_EVENT}",
       "${HISTORY_BID_WITHDRAWN_EVENT}"], 
       timestamp_gt: $timestamp}) {
      id
      eventName
      timestamp
      value
    }
  }
`;

export const getAuctionContractsV2 = gql`
  {
    digitalaxAuctionV2Contracts(first: 1000) {
      id
      minBidIncrement
      bidWithdrawalLockTime
      platformFee
      platformFeeRecipient
      totalSales
    }
  }
`;

export const getResultedAuctionsByEndTimeGtV2 = gql`
  query getAuctionsHistoryByTimestampGt($endTime: BigInt!) {
    digitalaxGarmentV2Auctions(
      first: 1000
      where: { resulted_not_in: [false], endTime_gt: $endTime }
    ) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;

export const getDigitalaxCollectorV2 = gql`
  query digitalaxCollector($id: ID!) {
    digitalaxCollectorV2(id: $id) {
      id
      parentsOwned {
        id
        description
        designer
        tokenUri
        animation
        image
        owner
        name
      }
    }
  }
`;

export const getDigitalaxGarmentsCollectionsV2 = gql`
  query getdigitalaxGarmentsCollections {
    digitalaxGarmentV2Collections(first: 1000) {
      id
      garmentAuctionID
      rarity
      garments(first: 1) {
        id
        designer
        owner
        primarySalePrice
        tokenUri
        name
        image
        animation
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const getCollectorsByIdV2 = gql`
  query getCollectorsById($id: ID!) {
    digitalaxCollectorV2S(where: { id: $id }) {
      id
      parentsOwned {
        id
        name
        image
        description
        animation
        tokenUri
        primarySalePrice
        attributes {
          id
          type
          value
        }
      }
    }
  }
`;

export const getDigitalaxMarketplaceV2PurchaseHistory = gql`
  query digitalaxMarketplaceV2PurchaseHistories($buyer: ID!, $garmentId: Int!) {
    digitalaxMarketplaceV2PurchaseHistories(
      where: { buyer: $buyer, garmentAuctionId: $garmentId }
    ) {
      id
      eventName
      timestamp
      transactionHash
      token {
        id
      }
      buyer
      value
      isPaidWithMona
      monaTransferredAmount
      garmentAuctionId
      platformFee
      discountToPayMona
      rarity
    }
  }
`;

export const getDigitalaxGarmentNFTV2GlobalStat = gql`
  query digitalaxGarmentNFTV2GlobalStats {
    digitalaxGarmentNFTV2GlobalStats(first: 1) {
      id
      monaPerEth
    }
  }
`;
