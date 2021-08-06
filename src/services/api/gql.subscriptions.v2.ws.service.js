export const onDaysChangeV2 = `
  subscription onAuctionsChangeByIds($date: String!) {
    dayV2S(first: 1000, where: {id_gt: $date }) {
      id
      totalBidValue
      totalWithdrawalValue
      totalNetBidActivity
      totalMarketplaceVolumeInETH
      totalMarketplaceVolumeInMona
    }
  }`;

export const onAuctionsChangeV2 = `
  subscription onAuctionsChange {
    digitalaxGarmentV2Auctions(first: 15, where:{resulted_not_in:[true]}) {
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
        description
        attributes {
          id
          value
          type
        }
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
  }`;

export const onAllAuctionsChangeV2 = `
  subscription onAuctionsChange {
    digitalaxGarmentV2Auctions(first: 15) {
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
        description
        children {
          amount
          tokenUri
          id
        }
        attributes {
          id
          value
          type
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
  }`;

export const onPreviousAuctionsChangeV2 = `
  subscription onPreviousAuctionsChange {
    digitalaxGarmentV2Auctions(first: 1000, where: {resulted_in: [true]}) {
      id
      resulted
      reservePrice
      startTime
      endTime
      resulted
      resultedTime
      topBidder {
        id
      }
      topBid
      lastBidTime
      garment {
        id
        designer
        name
        image
        animation
        primarySalePrice
        description
        tokenUri
        children {
          amount
          tokenUri
          id
        }
        attributes {
          id
          value
          type
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
  }`;

export const onAuctionsChangeByIdsV2 = `
  subscription onAuctionsChangeByIds($ids: [ID!]) {
    digitalaxGarmentV2Auctions(first: 1000, where: {id_in: $ids}) {
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

export const onDesignerByIdsV2 = `
  subscription onDesignerGarments($ids: [ID!]) {
    digitalaxGarmentV2Designers(first: 1000, where: { id_in: $ids }) {
      id
      listings {
        id
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
      garments(first:1000) {
        id
        tokenUri
      }
    }
  }
`;

export const onMarketplaceHistoryByIdsV2 = `
  subscription onMarketplaceHistoryByIds($ids: [ID!]) {
    digitalaxMarketplaceV2PurchaseHistories(first: 1000, where: {garmentAuctionId_in: $ids}) {
      id
      garmentAuctionId
      eventName
      timestamp
      rarity
      transactionHash
      buyer
      isPaidWithMona
      monaTransferredAmount
      platformFee
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

export const onAuctionsHistoryByIdsV2 = `
  subscription onAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentV2AuctionHistories(first: 1000, where: {eventName_in: ["BidPlaced", "BidWithdrawn"], token_in: $ids}) {
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

export const onResultedAuctionsByEndTimeGtAndIdsV2 = `
  subscription getAuctionsHistoryByTimestampGt($ids: [ID!], $endTime: BigInt!) {
    digitalaxGarmentV2Auctions(where: {id_in: $ids, resulted_not_in:[false], endTime_gt: $endTime }) {
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

export const onDigitalaxGarmentsCollectionChangeV2 = `
  subscription onDigitalaxGarmentsCollectionChange($garmentAuctionNFTId: BigInt!)
  {
    digitalaxGarmentV2Collections(first: 1000, where: { garmentAuctionID: $garmentAuctionNFTId }) {
      id
      garmentAuctionID
      rarity
      garments(first:1) {
        id
        designer
        owner
        primarySalePrice
        description
        tokenUri
        name
        image
        animation
        children {
          id
          amount
          tokenUri
        }
        attributes {
          id
          value
          type
        }
      }
    }
  }
`;

export const onDigitalaxGarmentsCollectionChangeByIdsV2 = `
  subscription onDigitalaxGarmentsCollectionChange($ids: [BigInt!])
  {
    digitalaxGarmentV2Collections(first: 1000, where: { garmentAuctionID_in: $ids }) {
      id
      garmentAuctionID
      rarity
      garments(first: 1) {
        id
        designer
        owner
        primarySalePrice
        description
        name
        image
        animation
        tokenUri
        attributes {
          id
          value
          type
        }
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const getAllDigitalaxGarmentsCollectionsV2 = `
  subscription getAllDigitalaxGarmentsCollections
  {
    digitalaxGarmentV2Collections(first: 1000) {
      id
      garmentAuctionID
      rarity
      valueSold
      garments(first: 1) {
        id
        designer
        owner
        primarySalePrice
        tokenUri
        description
        name
        image
        animation
        attributes {
          id
          value
          type
        }
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const onDigitalaxMarketplaceOffersV2 = `
  subscription onDigitalaxMarketplaceOffers($ids: [ID!])
  {
    digitalaxMarketplaceV2Offers(first: 1000, where: { id_in: $ids }) {
      id
      primarySalePrice
      garmentCollection {
        id
        garmentAuctionID
        rarity
      }
      startTime
      amountSold
    }
  }
`;

export const allDigitalaxMarketplaceOffersV2 = `
  subscription onDigitalaxMarketplaceOffers
  {
    digitalaxMarketplaceV2Offers(first: 1000) {
      id
      primarySalePrice
      garmentCollection {
        id
        garmentAuctionID
        rarity
        garments(first: 1) {
          id
          tokenUri
          name
          description
        }
      }
      startTime
      amountSold
    }
  }
`;

export const onNFTGlobalStatsV2 = `
  subscription onNFTGlobalStats {
    digitalaxGarmentNFTV2GlobalStats {
      id
      totalSalesValue
      totalActiveBidsValue
      totalMarketplaceSalesInETH
      totalMarketplaceSalesInMona
      marketplacePlatformFee
    }
  }
`;
