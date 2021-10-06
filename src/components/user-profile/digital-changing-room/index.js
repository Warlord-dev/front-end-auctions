import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import FashionItem from '@components/user-profile/fashion-item'

import {
  getDigitalaxGarmentsByOwner,
  getDigitalaxGarments,
  getDigitalaxGarmentV2sByOwner,
  getDigitalaxSubscriptionsByOwner,
  getDigitalaxSubscriptionCollectorsByOwner,
  getDigitalaxNFTStakersByOwner,
  getDigitalaxGarmentStakedTokensByOwner,
  getDigitalaxGenesisNFTsByOwner,
  getDigitalaxGenesisNFTs,
  getDigitalaxGenesisStakedTokensByOwner,
  getCollectionV2ByGarmentId,
  getDigitalaxMarketplaceV2Offer,
  getPodeNFTV2sByOwner,
  getPodeNFTV2StakersByStaker,
  getDigitalaxCollectorV2ByOwner
} from '@services/api/apiService'


import { getRarityId } from '@utils/helpers'

const MAINNET_CHAINID = 0x1
const POLYGON_CHAINID = 0x89


const DigitalChangingRoom = props => {
  const { className, owner } = props
  const [currentPage, setCurrentPage] = useState(0)
  const [ownedNFTs, setOwnedNFTs] = useState([])
  const showPerPage = 10

  const getAllResultsFromQuery = async (query, resultKey, chainId, owner) => {
    let lastID = ''
    let isContinue = true
    const fetchCountPerOnce = 1000

    const resultArray = []
    while (isContinue) {
      const result = await query(chainId, owner, fetchCountPerOnce, lastID)
      if (!result[resultKey] || result[resultKey].length <= 0) isContinue = false
      else {
        resultArray.push(...result[resultKey])
        if (result[resultKey].length < fetchCountPerOnce) {
          isContinue = false
        } else {
          lastID = result[resultKey][fetchCountPerOnce - 1]['id']
        }
      }
    }
    
    return resultArray
  }
  
  useEffect(() => {
    const getAllNFTs = async () => {

      const digitalaxNFTsMainnet = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarments', MAINNET_CHAINID, owner)
      const digitalaxNFTsPolygon = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarments', POLYGON_CHAINID, owner)
      const digitalaxNFTV2sPolygon = await getAllResultsFromQuery(getDigitalaxGarmentV2sByOwner, 'digitalaxGarmentV2S', POLYGON_CHAINID, owner)

      // Get Staked NFTV2s on Polygon
      const digitalaxNFTStakersPolygon = await getAllResultsFromQuery(getDigitalaxNFTStakersByOwner, 'digitalaxNFTStakers', POLYGON_CHAINID, owner)
      const digitalaxStakedNFTsPolygon = digitalaxNFTStakersPolygon && digitalaxNFTStakersPolygon.length > 0 
        ? digitalaxNFTStakersPolygon[0].garments
        : []

      // Get Staked NFTs on Mainnet
      const digitalaxGarmentStakedTokensMainnet 
        = await getAllResultsFromQuery(getDigitalaxGarmentStakedTokensByOwner, 'digitalaxGarmentStakedTokens', MAINNET_CHAINID, owner)
      const stakedGarmentTokenIDsMainnet = digitalaxGarmentStakedTokensMainnet.map(item => item.id)
      const digitalaxStakedNFTsMainnet = stakedGarmentTokenIDsMainnet && stakedGarmentTokenIDsMainnet.length > 0
        ? await getAllResultsFromQuery(getDigitalaxGarments, 'digitalaxGarments', MAINNET_CHAINID, stakedGarmentTokenIDsMainnet)
        : []
      
      const digitalaxSubscriptionsPolygon = await getAllResultsFromQuery(getDigitalaxSubscriptionsByOwner, 'digitalaxSubscriptions', POLYGON_CHAINID, owner)
      const digitalaxSubscriptionCollectorsPolygon
        = await getAllResultsFromQuery(getDigitalaxSubscriptionCollectorsByOwner, 'digitalaxSubscriptionCollectors', POLYGON_CHAINID, owner)
      const digitalaxSubscription1155sPolygon = digitalaxSubscriptionCollectorsPolygon && digitalaxSubscriptionCollectorsPolygon.length > 0 
        ? digitalaxSubscriptionCollectorsPolygon[0].childrenOwned.map(item => item.token)
        : []
        console.log('digitalaxSubscription1155sPolygon:', digitalaxSubscription1155sPolygon)

      const digitalaxGenesisNFTsMainnet = await getAllResultsFromQuery(getDigitalaxGenesisNFTsByOwner, 'digitalaxGenesisNFTs', MAINNET_CHAINID, owner)

      const digitalaxGenesisStakedTokensMainnet
        = await getAllResultsFromQuery(getDigitalaxGenesisStakedTokensByOwner, 'digitalaxGenesisStakedTokens', MAINNET_CHAINID, owner)
      const stakedGenesisTokenIDsMainnet = digitalaxGenesisStakedTokensMainnet.map(item => item.id)
      
      const digitalaxStakedGenesisNFTsMainnet = stakedGenesisTokenIDsMainnet && stakedGenesisTokenIDsMainnet.length > 0
        ? await getAllResultsFromQuery(getDigitalaxGenesisNFTs, 'digitalaxGenesisNFTs', MAINNET_CHAINID, stakedGenesisTokenIDsMainnet)
        : []

      const podeNFTv2sPolygon = await getAllResultsFromQuery(getPodeNFTV2sByOwner, 'podeNFTv2S', POLYGON_CHAINID, owner)
      const podeNFTv2StakersPolygon = await getAllResultsFromQuery(getPodeNFTV2StakersByStaker, 'podeNFTv2Stakers', POLYGON_CHAINID, owner)
      const podeStakedNFTsPolygon = podeNFTv2StakersPolygon && podeNFTv2StakersPolygon.length > 0 
      ? podeNFTv2StakersPolygon[0].garments
      : []

      const { digitalaxCollectorV2: digitalaxCollectorsV2Polygon }
        = await getDigitalaxCollectorV2ByOwner(POLYGON_CHAINID, owner)
      const digitalaxV21155sPolygon = digitalaxCollectorsV2Polygon 
        ? digitalaxCollectorsV2Polygon.childrenOwned.map(item => item.token)
        : []
      console.log('digitalaxV21155sPolygon:', digitalaxV21155sPolygon)

      
      console.log('digitalaxNFTsMainnet: ', digitalaxNFTsMainnet)
      console.log('digitalaxNFTsPolygon: ', digitalaxNFTsPolygon)
      console.log('digitalaxNFTStakersPolygon: ', digitalaxNFTStakersPolygon)
      console.log('digitalaxStakedNFTsMainnet: ', digitalaxStakedNFTsMainnet)
      console.log('digitalaxNFTV2sPolygon: ', digitalaxNFTV2sPolygon)
      console.log('digitalaxSubscriptionsPolygon: ', digitalaxSubscriptionsPolygon)
      console.log('digitalaxGenesisNFTsMainnet: ', digitalaxGenesisNFTsMainnet)
      console.log('digitalaxStakedGenesisNFTsMainnet: ', digitalaxStakedGenesisNFTsMainnet)
      console.log('podeNFTv2sPolygon: ', podeNFTv2sPolygon)
      console.log('podeStakedNFTsPolygon: ', podeStakedNFTsPolygon)

      setOwnedNFTs([
        ...digitalaxNFTsMainnet.map(item => { return {...item, type: 'digitalaxNFTsMainnet'} }),
        ...digitalaxNFTsPolygon.map(item => { return {...item, type: 'digitalaxNFTsPolygon'} }),
        ...digitalaxNFTV2sPolygon.map(item => { return {...item, type: 'digitalaxNFTV2sPolygon'} }),
        ...digitalaxSubscriptionsPolygon.map(item => { return {...item, type: 'digitalaxSubscriptionsPolygon'} }),
        ...digitalaxSubscription1155sPolygon.map(item => { return {...item, type: 'digitalaxSubscription1155sPolygon'} }),
        ...digitalaxGenesisNFTsMainnet.map(item => { return {...item, type: 'digitalaxGenesisNFTsMainnet'} }),
        ...digitalaxStakedGenesisNFTsMainnet.map(item => { return {...item, type: 'digitalaxStakedGenesisNFTsMainnet'} }),
        ...digitalaxStakedNFTsMainnet.map(item => { return {...item, type: 'digitalaxStakedNFTsMainnet'} }),
        ...podeNFTv2sPolygon.map(item => { return {...item, type: 'podeNFTv2sPolygon'} }),
        ...podeStakedNFTsPolygon.map(item => { return {...item, type: 'podeStakedNFTsPolygon'} }),
        ...digitalaxStakedNFTsPolygon.map(item => { return {...item, type: 'digitalaxStakedNFTsPolygon'} }),
        ...digitalaxV21155sPolygon.map(item => { return {...item, type: 'digitalaxV21155sPolygon'} }),
      ])
    }

    getAllNFTs()
  }, [])

  const onClickPrev = () => {
    if (currentPage <= 0) return
    setCurrentPage(currentPage - 1)
  }
  
  const onClickNext = () => {
    if ((currentPage + 1) * showPerPage  >= ownedNFTs.length) return
    setCurrentPage(currentPage + 1)
  }

  const onClickViewFashion = async (fashionId, type) => {
    // if the NFT is digitalx NFT V2 on Polygon network
    if (type == 'digitalaxNFTV2sPolygon' || type == 'digitalaxStakedNFTsPolygon') {

      // Get Collection id by garment id
      const { digitalaxGarmentV2Collections } = await getCollectionV2ByGarmentId(POLYGON_CHAINID, fashionId)
      console.log('digitalaxGarmentV2Collections: ', digitalaxGarmentV2Collections)

      // if collection id is invalid, it's not able to show as product
      if (!digitalaxGarmentV2Collections || digitalaxGarmentV2Collections.length <= 0) {
        console.log('not on marketplace')
        return  
      }

      // check marketplace if the collection id exists
      const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offer(POLYGON_CHAINID, digitalaxGarmentV2Collections[0].id)
      
      // if it doesn't exist, it's not able to show as product.
      if (!digitalaxMarketplaceV2Offers || digitalaxMarketplaceV2Offers.length <= 0) {
        console.log('not on marketplace')
        return
      }

      // Yay! It's good to go. it can be shown on product page.
      window.open(`/product/${digitalaxGarmentV2Collections[0].id}/${getRarityId(digitalaxGarmentV2Collections[0].rarity)}/0`, '_self')
    } else {
      console.log('not on marketplace')
      console.log('fashionId: ', fashionId)
    }
  }

  console.log('ownedNFTs: ', ownedNFTs)

  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <div className={styles.header}>
        <button className={styles.leftArrow} onClick={onClickPrev}>
          <img src='/images/user-profile/arrow-left.png' />
        </button>
        <div className={styles.label}>DIGITAL CHANGING ROOM</div>
        <button className={styles.rightArrow} onClick={onClickNext}>
          <img src='/images/user-profile/arrow-right.png' />
        </button>
      </div>
      <div className={styles.content}>
        {
          ownedNFTs.slice(currentPage * showPerPage, Math.min(currentPage * showPerPage + showPerPage, ownedNFTs.length)).map(
          (item, index) => {
            // console.log('item: ', item)
            return (
              <FashionItem 
                className={styles.nftItem}
                key={`${item.type}_${item.id}`}
                animation={item.animation}
                image={
                  item.type == 'podeNFTv2sPolygon' || item.type == 'podeStakedNFTsPolygon'
                    ? 'https://digitalax.mypinata.cloud/ipfs/QmPe67dqkkXW6xrTLqYzpxYtiPjP2RAaTQZZqYiwqiNrb1'
                    : item.image
                }
                type={item.type}
                tokenURI={item.tokenUri}
                onClickViewFashion={() => onClickViewFashion(item.id, item.type)}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default DigitalChangingRoom