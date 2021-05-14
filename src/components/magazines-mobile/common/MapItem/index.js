import React from 'react'
import { motion } from "framer-motion"
import styles from './styles.module.scss'

const MapItem = props => {
  const { itemData, issueId, windowWidth, onClick } = props

  return (
    <motion.div
      className={styles.mapItemWrapper} 
      whileHover={{ scale: 1.1,
      rotate: -itemData.rotate }}
      whileTap={{ scale: 0.9 }}
      style={{
        left: windowWidth > 640 ? `${itemData.x}%` : `${1200*(itemData.x/100)}px`,
        top: windowWidth > 640 ? `${itemData.y}%` : `${750*(itemData.y/100)}px`,
      }}
      onClick={onClick}
    >
      <img
        className={styles.mapItem} 
        src={`./magazine/${issueId}/images/${itemData.image}`} 
        style={{
         
          transform: `rotate(${itemData.rotate}deg)`
        }}
      />
    </motion.div>
  )
}

export default MapItem