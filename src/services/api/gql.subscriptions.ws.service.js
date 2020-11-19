
export const onDaysChange = `
  subscription onDaysChange($first: Int = 1) {
    days(first: $first) {
      id
      totalBidValue
      totalWithdrawalValue
      totalNetBidActivity
    }
  }`;

export const onAuctionsChange = `
  subscription onAuctionsChange {
    digitalaxGarmentAuctions(where:{resulted_not_in:[true]}) {
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


export const onAuctionsChangeByIds = `
  subscription onAuctionsChangeByIds($ids: [ID!]) {
    digitalaxGarmentAuctions(where: {id_in: $ids}) {
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

export const onDesignerByIds = `
  subscription onDesignerGarments($ids: [ID!]) {
    digitalaxGarmentDesigners(where: { id_in: $ids }) {
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
      garments {
        id
        tokenUri
      }
    }
  }
`;

export const onAuctionsHistoryByIds = `
  subscription onAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentAuctionHistories(where: {token_in: $ids}) {
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

export const onResultedAuctionsByEndTimeGtAndIds = `
  subscription getAuctionsHistoryByTimestampGt($ids: [ID!], $endTime: BigInt!) {
    digitalaxGarmentAuctions(where: {id_in: $ids, resulted_not_in:[true], endTime_gt: $endTime }) {
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

export const onNFTGlobalStats = `
  subscription onNFTGlobalStats {
    digitalaxGarmentNFTGlobalStats {
      id
      totalSalesValue
      totalActiveBidsValue
    }
  }
`;
