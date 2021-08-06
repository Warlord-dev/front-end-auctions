import { gql } from 'graphql-request';
import {
  HISTORY_BID_PLACED_EVENT,
  HISTORY_BID_WITHDRAWN_EVENT,
} from '@constants/history.constants';

export const getLiveAuctions = gql`
  {
    digitalaxGarmentAuctions(first: 1000, where: { resulted_not_in: [true] }) {
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

export const getAuctionsByIds = gql`
  query getAuctionsByIds($ids: [ID!]) {
    digitalaxGarmentAuctions(first: 1000, where: { id_in: $ids }) {
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

export const getGarmentsByIds = gql`
  query getGarmentsByIds($ids: [ID!]) {
    digitalaxGarments(first: 1000, where: { id_in: $ids }) {
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

export const getDesignersByIds = gql`
  query getDesignersByIds($ids: [ID!]) {
    digitalaxGarmentDesigners(first: 1000, where: { id_in: $ids }) {
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

export const getGarmentsByDesignerId = gql`
  query getGarmentsByDesignerId($ids: [Bytes!]) {
    digitalaxGarments(first: 1000, where: { designer_in: $ids }) {
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

export const getAuctionsHistoryByIds = gql`
  query getAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentAuctionHistories(first: 1000, where: { token_in: $ids }) {
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

export const getAuctionsHistoryByTimestampGt = gql`
  query getAuctionsHistoryByTimestampGt($timestamp: BigInt!) {
    digitalaxGarmentAuctionHistories(first: 1000, where: {
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

export const getAuctionContracts = gql`
  {
    digitalaxAuctionContracts(first: 1000) {
      id
      minBidIncrement
      bidWithdrawalLockTime
      platformFee
      platformFeeRecipient
      totalSales
    }
  }
`;

export const getResultedAuctionsByEndTimeGt = gql`
  query getAuctionsHistoryByTimestampGt($endTime: BigInt!) {
    digitalaxGarmentAuctions(
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

export const getDigitalaxGarmentsCollections = gql`
  query getDigitalaxGarmentsCollections {
    digitalaxGarmentCollections(first: 1000) {
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

export const getDigitalaxCollector = gql`
  query digitalaxCollector($id: ID!) {
    digitalaxCollector(id: $id) {
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

export const getCollectorsById = gql`
  query getCollectorsById($id: ID!) {
    digitalaxCollectors(where: { id: $id }) {
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


export const getDigitalaxMarketplacePurchaseHistory = gql`
query digitalaxMarketplacePurchaseHistories($buyer: ID!, $garmentId: Int!) {
  digitalaxMarketplacePurchaseHistories(where: { buyer: $buyer, garmentAuctionId: $garmentId }){
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
