import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import FashionItem from '@components/user-profile/fashion-item'

import {
  getDigitalaxGarmentsByOwner,
  getDigitalaxGarmentV2sByOwner,
  getDigitalaxSubscriptionsByOwner,
  getDigitalaxNFTStakersByOwner,
  getDigitalaxGarmentStakedTokensByOwner,
  getDigitalaxGenesisNFTsByOwner,
  getDigitalaxGenesisStakedTokensByOwner,
  getCollectionV2ByGarmentId,
  getDigitalaxMarketplaceV2Offer
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

      const digitalaxNFTsMainnet = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarmentV2S', MAINNET_CHAINID, owner)
      const digitalaxNFTsPolygon = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarmentV2S', POLYGON_CHAINID, owner)
      const digitalaxNFTV2sPolygon = await getAllResultsFromQuery(getDigitalaxGarmentV2sByOwner, 'digitalaxGarmentV2S', POLYGON_CHAINID, owner)

      const digitalaxSubscriptionsPolygon = await getAllResultsFromQuery(getDigitalaxSubscriptionsByOwner, 'digitalaxSubscriptions', POLYGON_CHAINID, owner)
      const digitalaxGenesisNFTsMainnet = await getAllResultsFromQuery(getDigitalaxGenesisNFTsByOwner, 'digitalaxGenesisNFTs', MAINNET_CHAINID, owner)
      
      console.log('digitalaxNFTsMainnet: ', digitalaxNFTsMainnet)
      console.log('digitalaxNFTsPolygon: ', digitalaxNFTsPolygon)
      console.log('digitalaxNFTV2sPolygon: ', digitalaxNFTV2sPolygon)
      console.log('digitalaxSubscriptionsPolygon: ', digitalaxSubscriptionsPolygon)
      console.log('digitalaxGenesisNFTsMainnet: ', digitalaxGenesisNFTsMainnet)

      setOwnedNFTs([
        ...digitalaxNFTsMainnet.map(item => { return {...item, type: 'digitalaxNFTsMainnet'} }),
        ...digitalaxNFTsPolygon.map(item => { return {...item, type: 'digitalaxNFTsPolygon'} }),
        ...digitalaxNFTV2sPolygon.map(item => { return {...item, type: 'digitalaxNFTV2sPolygon'} }),
        ...digitalaxSubscriptionsPolygon.map(item => { return {...item, type: 'digitalaxSubscriptionsPolygon'} }),
        ...digitalaxGenesisNFTsMainnet.map(item => { return {...item, type: 'digitalaxGenesisNFTsMainnet'} })
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
    if (type == 'digitalaxNFTV2sPolygon') {

      // Get Collection id by garment id
      const { digitalaxGarmentV2Collections } = await getCollectionV2ByGarmentId(POLYGON_CHAINID, fashionId)

      // if collection id is invalid, it's not able to show as product
      if (!digitalaxGarmentV2Collections || digitalaxGarmentV2Collections.length <= 0) {
        console.log('not on marketplace')
        return  
      }

      // check marketplace if the collection id exists
      const { digitalaxMarketplaceV2Offers } = getDigitalaxMarketplaceV2Offer(POLYGON_CHAINID, digitalaxGarmentV2Collections[0].id)

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
            return (
              <FashionItem 
                className={styles.nftItem}
                key={item.id}
                animation={item.animation}
                image={item.image}
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