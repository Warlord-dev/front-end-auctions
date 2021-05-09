import React, { memo, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from '../../components/magazines/issue-1/CoverPage'
import Page12 from '../../components/magazines/issue-1/Page12'
import Page34 from '../../components/magazines/issue-1/Page34'
import Page56 from '../../components/magazines/issue-1/Page56'
import Page78 from '../../components/magazines/issue-1/Page78'
import Page910 from '../../components/magazines/issue-1/Page910'
import Page1112 from '../../components/magazines/issue-1/Page1112'
import Page1314 from '../../components/magazines/issue-1/Page1314'
import Page1516 from '../../components/magazines/issue-1/Page1516'
import Page1718 from '../../components/magazines/issue-1/Page1718'
import Page1920 from '../../components/magazines/issue-1/Page1920'
import Page2122 from '../../components/magazines/issue-1/Page2122'
import Page2324 from '../../components/magazines/issue-1/Page2324'
import Page2526 from '../../components/magazines/issue-1/Page2526'
import Page2728 from '../../components/magazines/issue-1/Page2728'
import Page2930 from '../../components/magazines/issue-1/Page2930'
import Page3132 from '../../components/magazines/issue-1/Page3132'
import Page3334 from '../../components/magazines/issue-1/Page3334'
import Page3536 from '../../components/magazines/issue-1/Page3536'
import Page3738 from '../../components/magazines/issue-1/Page3738'

import MagazinePageWrapper from '../../components/magazines/common/MagazinePageWrapper'
import ViewerSwitch from '../../components/magazines/common/ViewerSwitch'

import styles from './styles.module.scss'

const MagazineViewer = props => {
  const {
    issueId,
    pageNumber,
    children,
    onSwitchViewer
  } = props
  return (
    <>
      <div className={styles.magazineViewerWrapper}>
        <div className={styles.contentWrapper}>
          <HTMLFlipBook 
            width={960}
            height={1497}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="demo-book"
          >
            <MagazinePageWrapper><CoverPage /></MagazinePageWrapper>
            <MagazinePageWrapper><Page12 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page12 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page34 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page34 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page910 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page910 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1112 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1112 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1314 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1314 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1516 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1516 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1718 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1718 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1920 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page1920 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2122 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2122 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2324 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2324 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2526 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2526 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2728 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2728 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2930 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page2930 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3132 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3132 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3334 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3334 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3536 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3536 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3738 /></MagazinePageWrapper>
            <MagazinePageWrapper secondPart><Page3738 /></MagazinePageWrapper>
          </HTMLFlipBook>
        </div>
      </div>
      <ViewerSwitch 
        viewers={['webview', 'mapview']}
        onSwitchViewer={onSwitchViewer}
      />
    </>
  )
}

export default MagazineViewer