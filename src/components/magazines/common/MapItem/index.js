import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import WebPageWrapper from '@components/magazines/common/WebPageWrapper'
import getPageList from '@components/magazines/PageList'
import styles from './styles.module.scss'

const MapItem = props => {
  const { itemData, issueId, windowWidth, onClick } = props
  const [pageList, setPageList] = useState([])
  useEffect(() => {
    setPageList(getPageList(issueId))
  }, [issueId])
  

  const getPagePreview = (issueId, pageNum) => {
    if (issueId !== '1') return <></>
    return (
      <WebPageWrapper secondPart={(pageNum + (pageNum > 0)) % 2} zoom={0.15}>
        {pageList[((pageNum + 1) / 2) | 0]}
      </WebPageWrapper>
    )
  }

  return (
    <motion.div
      className={styles.mapItemWrapper} 
      whileHover={{ scale: 1.1,
      rotate: -itemData.rotate }}
      whileTap={{ scale: 0.9 }}
      style={{
        cursor: 'pointer',
        left: windowWidth > 640 ? `${itemData.x}%` : `${1200*(itemData.x/100)}px`,
        top: windowWidth > 640 ? `${itemData.y}%` : `${750*(itemData.y/100)}px`,
      }}
      onClick={onClick}
    >
      <div
        style={{
          transform: `rotate(${itemData.rotate}deg)`
        }}
      >
        { getPagePreview(issueId, itemData.pageNum) }
      </div>
    </motion.div>
  )
}

export default MapItem