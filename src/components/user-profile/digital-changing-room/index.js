import React, { useEffect, useState } from 'react'
import { generateLookImage } from '@utils/helpers'
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
  getDigitalaxCollectorV2ByOwner,
  getGDNMembershipNFTsByOwner,
  getDigitalaxLookNFTsByOwner
} from '@services/api/apiService'


import { getRarityId } from '@utils/helpers'

const MAINNET_CHAINID = 0x1
const POLYGON_CHAINID = 0x89

const categories = [
  'DIGITAL CHANGING ROOM',
  'DIGIFIZZY BUNDLES',
  'DRIP IRL',
  'GENESIS MONA NFT',
  'LOOK FASHION LOOT',
  'PODE',
  'GDN MEMBERSHIP NFT',
]


const DigitalChangingRoom = props => {
  const { className, owner } = props
  const [currentPage, setCurrentPage] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(0)
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

      // get digitalax NFTs on Mainnet
      const digitalaxNFTsMainnet = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarments', MAINNET_CHAINID, owner)

      // get digitalax NFTs on Polygon
      const digitalaxNFTsPolygon = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarments', POLYGON_CHAINID, owner)

      // get Digitalax NFTv2s on Polygon
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
      
      // get digitalax subscriptions (digi bundle) on polygon
      const digitalaxSubscriptionsPolygon = await getAllResultsFromQuery(getDigitalaxSubscriptionsByOwner, 'digitalaxSubscriptions', POLYGON_CHAINID, owner)

      // get digitalax subscription 1155s on polygon
      const digitalaxSubscriptionCollectorsPolygon
        = await getAllResultsFromQuery(getDigitalaxSubscriptionCollectorsByOwner, 'digitalaxSubscriptionCollectors', POLYGON_CHAINID, owner)
      const digitalaxSubscription1155sPolygon = digitalaxSubscriptionCollectorsPolygon && digitalaxSubscriptionCollectorsPolygon.length > 0 
        ? digitalaxSubscriptionCollectorsPolygon[0].childrenOwned.map(item => item.token)
        : []

      // get genesis nfts on mainnet
      const digitalaxGenesisNFTsMainnet = await getAllResultsFromQuery(getDigitalaxGenesisNFTsByOwner, 'digitalaxGenesisNFTs', MAINNET_CHAINID, owner)

      // get staked genesis nfts on mainnet
      const digitalaxGenesisStakedTokensMainnet
        = await getAllResultsFromQuery(getDigitalaxGenesisStakedTokensByOwner, 'digitalaxGenesisStakedTokens', MAINNET_CHAINID, owner)
      const stakedGenesisTokenIDsMainnet = digitalaxGenesisStakedTokensMainnet.map(item => item.id)
      
      const digitalaxStakedGenesisNFTsMainnet = stakedGenesisTokenIDsMainnet && stakedGenesisTokenIDsMainnet.length > 0
        ? await getAllResultsFromQuery(getDigitalaxGenesisNFTs, 'digitalaxGenesisNFTs', MAINNET_CHAINID, stakedGenesisTokenIDsMainnet)
        : []

      // get pode nftV2s on polygon
      const podeNFTv2sPolygon = await getAllResultsFromQuery(getPodeNFTV2sByOwner, 'podeNFTv2S', POLYGON_CHAINID, owner)
      // get staked pode nft v2s on polygon
      const podeNFTv2StakersPolygon = await getAllResultsFromQuery(getPodeNFTV2StakersByStaker, 'podeNFTv2Stakers', POLYGON_CHAINID, owner)
      const podeStakedNFTsPolygon = podeNFTv2StakersPolygon && podeNFTv2StakersPolygon.length > 0 
      ? podeNFTv2StakersPolygon[0].garments
      : []

      // get digitalax 1155s (materials) on polygon
      const { digitalaxCollectorV2: digitalaxCollectorsV2Polygon }
        = await getDigitalaxCollectorV2ByOwner(POLYGON_CHAINID, owner)
      const digitalaxV21155sPolygon = digitalaxCollectorsV2Polygon 
        ? digitalaxCollectorsV2Polygon.childrenOwned.map(item => item.token)
        : []
      
      // get gdn membership tokens on polygon
      const gdnMembershipNFTsPolygon = await getAllResultsFromQuery(getGDNMembershipNFTsByOwner, 'gdnmembershipNFTs', POLYGON_CHAINID, owner)
      console.log('gdnMembershipNFTsPolygon:', gdnMembershipNFTsPolygon)

      // get look nfts on mainnet
      const digitalaxLookNFTsMainnet = await getAllResultsFromQuery(getDigitalaxLookNFTsByOwner, 'digitalaxLookNFTs', MAINNET_CHAINID, owner)
      console.log('digitalaxLookNFTsMainnet:', digitalaxLookNFTsMainnet)
      digitalaxLookNFTsMainnet.map(item => {
        const json = atob(item.tokenUri.substring(29))
        const result = JSON.parse(json)
        console.log(result)
      })

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

      setOwnedNFTs({
        'DIGITAL CHANGING ROOM': [
          ...digitalaxNFTsMainnet.map(item => { return {...item, type: 'digitalaxNFTsMainnet'} }),
          ...digitalaxNFTsPolygon.map(item => { return {...item, type: 'digitalaxNFTsPolygon'} }),
          ...digitalaxNFTV2sPolygon.map(item => { return {...item, type: 'digitalaxNFTV2sPolygon'} }),  
          ...digitalaxStakedNFTsPolygon.map(item => { return {...item, type: 'digitalaxStakedNFTsPolygon'} }),
          ...digitalaxV21155sPolygon.map(item => { return {...item, type: 'digitalaxV21155sPolygon'} }),
          ...digitalaxStakedNFTsMainnet.map(item => { return {...item, type: 'digitalaxStakedNFTsMainnet'} }),
        ],
        'DIGIFIZZY BUNDLES': [
          ...digitalaxSubscriptionsPolygon.map(item => { return {...item, type: 'digitalaxSubscriptionsPolygon'} }),
          ...digitalaxSubscription1155sPolygon.map(item => { return {...item, type: 'digitalaxSubscription1155sPolygon'} }),
        ],
        'DRIP IRL': [

        ],
        'GENESIS MONA NFT': [
          ...digitalaxGenesisNFTsMainnet.map(item => { return {...item, type: 'digitalaxGenesisNFTsMainnet'} }),
          ...digitalaxStakedGenesisNFTsMainnet.map(item => { return {...item, type: 'digitalaxStakedGenesisNFTsMainnet'} }),
        ],
        'LOOK FASHION LOOT': [
          ...digitalaxLookNFTsMainnet.map(item => { 
            return {
              ...item, 
              type: 'digitalaxLookNFTsMainnet',
              image: generateLookImage(item)
            } 
          }),
        ],
        'PODE': [
          ...podeNFTv2sPolygon.map(item => { return {...item, type: 'podeNFTv2sPolygon'} }),
          ...podeStakedNFTsPolygon.map(item => { return {...item, type: 'podeStakedNFTsPolygon'} }),
        ],
        'GDN MEMBERSHIP NFT': [
          ...gdnMembershipNFTsPolygon.map(item => { return {...item, type: 'gdnMembershipNFTsPolygon'} }),
        ]
      })
    }

    getAllNFTs()
  }, [])

  const onClickPrev = () => {
    if (currentCategory <= 0) return
    setCurrentCategory(currentCategory - 1)
  }
  
  const onClickNext = () => {
    if (currentCategory >= categories.length - 1) return
    setCurrentCategory(currentCategory + 1)
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
        <div className={styles.label}>{categories[currentCategory]}</div>
        <button className={styles.rightArrow} onClick={onClickNext}>
          <img src='/images/user-profile/arrow-right.png' />
        </button>
      </div>
      <div className={styles.content}>
        {
          ownedNFTs[categories[currentCategory]] && ownedNFTs[categories[currentCategory]].map(
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