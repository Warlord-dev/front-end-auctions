import React from 'react'
import SwipePage from '../../components/swipe'
import CoverPage from '@components/magazines-mobile/issue-1/CoverPage'
import Page12 from '@components/magazines-mobile/issue-1/Page12'
import Page3 from '@components/magazines-mobile/issue-1/Page3'
import Page4 from '@components/magazines-mobile/issue-1/Page4'
import Page56 from '@components/magazines-mobile/issue-1/Page56'
import Page78 from '@components/magazines-mobile/issue-1/Page78'
import Page78Part2 from '@components/magazines-mobile/issue-1/Page78-part2'
import Page910 from '@components/magazines-mobile/issue-1/Page910'
import Page910Part2 from '@components/magazines-mobile/issue-1/Page910-part2'
import Page1112 from '@components/magazines-mobile/issue-1/Page1112'
import Page1112Part2 from '@components/magazines-mobile/issue-1/Page1112-part2'
import Page1314 from '@components/magazines-mobile/issue-1/Page1314'
import Page1314Part2 from '@components/magazines-mobile/issue-1/Page1314-part2'
import Page1516 from '@components/magazines-mobile/issue-1/Page1516'
import Page1516Part2 from '@components/magazines-mobile/issue-1/Page1516-part2'
import Page1718 from '@components/magazines-mobile/issue-1/Page1718'
import Page1718Part2 from '@components/magazines-mobile/issue-1/Page1718-part2'
import Page1920 from '@components/magazines-mobile/issue-1/Page1920'
import Page1920Part2 from '@components/magazines-mobile/issue-1/Page1920-part2'
import Page2021 from '@components/magazines-mobile/issue-1/Page2021'
import Page2122 from '@components/magazines-mobile/issue-1/Page2122'
import Page2324 from '@components/magazines-mobile/issue-1/Page2324'
import Page2526 from '@components/magazines-mobile/issue-1/Page2526'
import Page2728 from '@components/magazines-mobile/issue-1/Page2728'
import Page2930 from '@components/magazines-mobile/issue-1/Page2930'
import Page3132 from '@components/magazines-mobile/issue-1/Page3132'
import Page3334 from '@components/magazines-mobile/issue-1/Page3334'
import Page33 from '@components/magazines-mobile/issue-1/Page33'
import Page34 from '@components/magazines-mobile/issue-1/Page34'
import Page35 from '@components/magazines-mobile/issue-1/Page35'
import Page36 from '@components/magazines-mobile/issue-1/Page36'
import Page37 from '@components/magazines-mobile/issue-1/Page37'
import Page38 from '@components/magazines-mobile/issue-1/Page38'

import MagazinePageWrapper from '@components/magazines-mobile/common/MagazinePageWrapper'
import ViewerSwitch from '@components/magazines-mobile/common/ViewerSwitch'

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
          <SwipePage 
            
          >
            <MagazinePageWrapper><CoverPage /></MagazinePageWrapper>
            <MagazinePageWrapper><Page12 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page4 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page78Part2 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page910 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page910Part2 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1112 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1112Part2 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1314 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1314Part2 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1516 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1516Part2 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1718 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1718Part2 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1920 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page1920Part2 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2021 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2122 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2324 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2526 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2728 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page2930 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3132 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page3334 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page33 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page34 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page35 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page36 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page37 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page38 /></MagazinePageWrapper>

          </SwipePage>
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