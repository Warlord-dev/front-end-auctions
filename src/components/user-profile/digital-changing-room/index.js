import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import FashionItem from '@components/user-profile/fashion-item'

import {
  getDigitalaxGarmentsByOwner,
  getDigitalaxGarmentV2sByOwner,
  getDigitalaxSubscriptionsByOwner,
  getDigitalaxNFTStakersByOwner,
  getDigitalaxGarmentStakedTokensByOwner,
  getDigitalaxGenesisStakedTokensByOwner
} from '@services/api/apiService'

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

      const digitalaxNFTsMainNet = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarmentV2S', MAINNET_CHAINID, owner)
      const digitalaxNFTsPolygon = await getAllResultsFromQuery(getDigitalaxGarmentsByOwner, 'digitalaxGarmentV2S', POLYGON_CHAINID, owner)
      const digitalaxNFTV2sPolygon = await getAllResultsFromQuery(getDigitalaxGarmentV2sByOwner, 'digitalaxGarmentV2S', POLYGON_CHAINID, owner)
      
      console.log('digitalaxNFTsMainNet: ', digitalaxNFTsMainNet)
      console.log('digitalaxNFTsPolygon: ', digitalaxNFTsPolygon)
      console.log('digitalaxNFTV2sPolygon: ', digitalaxNFTV2sPolygon)

      setOwnedNFTs([
        ...digitalaxNFTsMainNet,
        ...digitalaxNFTsPolygon,
        ...digitalaxNFTV2sPolygon
      ])
    }

    getAllNFTs()
  }, [])

  const onClickPrev = () => {
    if (currentPage <= 0) return
    setCurrentPage(currentPage - 1)
  }
  
  const onClickNext = () => {
    if (currentPage * showPerPage >= ownedNFTs.length) return
    setCurrentPage(currentPage + 1)
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
            console.log('item: ', item.id)
            return (
              <FashionItem 
                className={styles.nftItem}
                key={item.id}
                animation={item.animation}
                image={item.image}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default DigitalChangingRoom