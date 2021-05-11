import React from 'react'
import { motion } from "framer-motion"
import styles from './styles.module.scss'

import CoverPage from '@components/magazines/issue-1/CoverPage';
import Page12 from '@components/magazines/issue-1/Page12';
import Page34 from '@components/magazines/issue-1/Page34';
import Page56 from '@components/magazines/issue-1/Page56';
import Page78 from '@components/magazines/issue-1/Page78';
import Page910 from '@components/magazines/issue-1/Page910';
import Page1112 from '@components/magazines/issue-1/Page1112';
import Page1314 from '@components/magazines/issue-1/Page1314';
import Page1516 from '@components/magazines/issue-1/Page1516';
import Page1718 from '@components/magazines/issue-1/Page1718';
import Page1920 from '@components/magazines/issue-1/Page1920';
import Page2122 from '@components/magazines/issue-1/Page2122';
import Page2324 from '@components/magazines/issue-1/Page2324';
import Page2526 from '@components/magazines/issue-1/Page2526';
import Page2728 from '@components/magazines/issue-1/Page2728';
import Page2930 from '@components/magazines/issue-1/Page2930';
import Page3132 from '@components/magazines/issue-1/Page3132';
import Page3334 from '@components/magazines/issue-1/Page3334';
import Page3536 from '@components/magazines/issue-1/Page3536';
import Page3738 from '@components/magazines/issue-1/Page3738';
import Page3940 from '@components/magazines/issue-1/Page3940';
import Page4142 from '@components/magazines/issue-1/Page4142';
import Page4344 from '@components/magazines/issue-1/Page4344';
import Page4546 from '@components/magazines/issue-1/Page4546';
import Page4748 from '@components/magazines/issue-1/Page4748';
import Page4950 from '@components/magazines/issue-1/Page4950';
import Page5152 from '@components/magazines/issue-1/Page5152';
import Page5354 from '@components/magazines/issue-1/Page5354';
import Page5556 from '@components/magazines/issue-1/Page5556';
import Page5758 from '@components/magazines/issue-1/Page5758';
import Page5960 from '@components/magazines/issue-1/Page5960';
import Page6162 from '@components/magazines/issue-1/Page6162';
import Page6364 from '@components/magazines/issue-1/Page6364';
import Page6566 from '@components/magazines/issue-1/Page6566';
import Page6768 from '@components/magazines/issue-1/Page6768';
import Page6970 from '@components/magazines/issue-1/Page6970';
import Page7172 from '@components/magazines/issue-1/Page7172';
import Page7374 from '@components/magazines/issue-1/Page7374';
import Page7576 from '@components/magazines/issue-1/Page7576';
import Page7778 from '@components/magazines/issue-1/Page7778';
import Page7980 from '@components/magazines/issue-1/Page7980';
import Page8182 from '@components/magazines/issue-1/Page8182';
import Page8384 from '@components/magazines/issue-1/Page8384';
import Page8586 from '@components/magazines/issue-1/Page8586';
import Page8788 from '@components/magazines/issue-1/Page8788';

import WebPageWrapper from '@components/magazines/common/WebPageWrapper';
import { Pointer } from 'highcharts';


const pages = [
  <CoverPage />,
  <Page12 />,
  <Page34 />,
  <Page56 />,
  <Page78 />,
  <Page910 />,
  <Page1112 />,
  <Page1314 />,
  <Page1516 />,
  <Page1718 />,
  <Page1920 />,
  <Page2122 />,
  <Page2324 />,
  <Page2526 />,
  <Page2728 />,
  <Page2930 />,
  <Page3132 />,
  <Page3334 />,
  <Page3536 />,
  <Page3738 />,
  <Page3940 />,
  <Page4142 />,
  <Page4344 />,
  <Page4546 />,
  <Page4748 />,
  <Page4950 />,
  <Page5152 />,
  <Page5354 />,
  <Page5556 />,
  <Page5758 />,
  <Page5960 />,
  <Page6162 />,
  <Page6364 />,
  <Page6566 />,
  <Page6768 />,
  <Page6970 />,
  <Page7172 />,
  <Page7374 />,
  <Page7576 />,
  <Page7778 />,
  <Page7980 />,
  <Page8182 />,
  <Page8384 />,
  <Page8586 />,
  <Page8788 />
]

const getPagePreview = (issueId, pageNum) => {
  if (issueId !== '1') return <></>
  return (
    <WebPageWrapper secondPart={(pageNum + (pageNum > 0)) % 2} zoom={0.15}>
      {pages[((pageNum + 1) / 2) | 0]}
    </WebPageWrapper>
  )
}

const MapItem = props => {
  const { itemData, issueId, windowWidth, onClick } = props

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