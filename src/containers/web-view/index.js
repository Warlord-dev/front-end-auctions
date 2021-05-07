import React from 'react'
import CoverPage from '../../components/magazines/issue-1/CoverPage'
import Page12 from '../../components/magazines/issue-1/Page12'
import PageWrapper from '../../components/magazines/common/PageWrapper'
import styles from './styles.module.scss'

const WebViewer = props => {
  return (
    <div className={styles.webViewerWrapper}>
      <div className={styles.contentWrapper}>
        <CoverPage></CoverPage>
        <div className={styles.pairWrapper}>
          <Page12 />
          <Page12 />
        </div>
        <PageWrapper>test123123123</PageWrapper>
        <PageWrapper>test123123123</PageWrapper>
        <PageWrapper>test123123123</PageWrapper>
        <PageWrapper>test123123123</PageWrapper>
        <PageWrapper>test123123123</PageWrapper>
        <PageWrapper>test123123123</PageWrapper>
      </div>
    </div>
  )
}

export default WebViewer