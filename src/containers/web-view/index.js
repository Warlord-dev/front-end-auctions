import React from 'react'
import CoverPage from '../../components/magazines/issue-1/CoverPage'
import Page12 from '../../components/magazines/issue-1/Page12'
import Page34 from '../../components/magazines/issue-1/Page34'
import Page56 from '../../components/magazines/issue-1/Page56'
import WebPageWrapper from '../../components/magazines/common/WebPageWrapper'
import styles from './styles.module.scss'

const WebViewer = props => {
  return (
    <div className={styles.webViewerWrapper}>
      <div className={styles.contentWrapper}>
       <WebPageWrapper><CoverPage /></WebPageWrapper>
        <WebPageWrapper><Page12 /></WebPageWrapper>
        <WebPageWrapper secondPart><Page12 /></WebPageWrapper>
        <WebPageWrapper><Page34 /></WebPageWrapper>
        <WebPageWrapper secondPart><Page34 /></WebPageWrapper>
        <WebPageWrapper><Page56 /></WebPageWrapper>
        <WebPageWrapper secondPart><Page56 /></WebPageWrapper>
      </div>
    </div>
  )
}

export default WebViewer