import React, { useState } from 'react'
import SwipePage from '@components/swipe'
import getPageList from '@components/magazines-mobile/PageList'
import CoverPage from '@components/magazines-mobile/issue-1/CoverPage'
import Page12 from '@components/magazines-mobile/issue-1/Page1'
import Page3 from '@components/magazines-mobile/issue-1/Page2'
import Page4 from '@components/magazines-mobile/issue-1/Page3'
import Page5 from '@components/magazines-mobile/issue-1/Page5'
import Page6 from '@components/magazines-mobile/issue-1/Page6'
import Page7 from '@components/magazines-mobile/issue-1/Page7'
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
import Page39 from '@components/magazines-mobile/issue-1/Page39'
import Page40 from '@components/magazines-mobile/issue-1/Page40'
import Page41 from '@components/magazines-mobile/issue-1/Page41'
import Page43 from '@components/magazines-mobile/issue-1/Page43'
import Page44 from '@components/magazines-mobile/issue-1/Page44'
import Page45 from '@components/magazines-mobile/issue-1/Page45'
import Page46 from '@components/magazines-mobile/issue-1/Page46'
import Page47 from '@components/magazines-mobile/issue-1/Page47'
import Page48 from '@components/magazines-mobile/issue-1/Page48'
import Page49 from '@components/magazines-mobile/issue-1/Page49'
import Page50 from '@components/magazines-mobile/issue-1/Page50'
import Page51 from '@components/magazines-mobile/issue-1/Page51'
import Page52 from '@components/magazines-mobile/issue-1/Page52'
import Page53 from '@components/magazines-mobile/issue-1/Page53'
import Page54 from '@components/magazines-mobile/issue-1/Page54'
import Page55 from '@components/magazines-mobile/issue-1/Page55'
import Page56 from '@components/magazines-mobile/issue-1/Page56'
import Page57 from '@components/magazines-mobile/issue-1/Page57'
import Page58 from '@components/magazines-mobile/issue-1/Page58'
import Page59 from '@components/magazines-mobile/issue-1/Page59'
import Page60 from '@components/magazines-mobile/issue-1/Page60'
import Page61 from '@components/magazines-mobile/issue-1/Page61'
import Page62 from '@components/magazines-mobile/issue-1/Page62'
import Page63 from '@components/magazines-mobile/issue-1/Page63'
import Page64 from '@components/magazines-mobile/issue-1/Page64'
import Page65 from '@components/magazines-mobile/issue-1/Page65'
import Page66 from '@components/magazines-mobile/issue-1/Page66'
import Page67 from '@components/magazines-mobile/issue-1/Page67'
import Page68 from '@components/magazines-mobile/issue-1/Page68'
import Page69 from '@components/magazines-mobile/issue-1/Page69'
import Page70 from '@components/magazines-mobile/issue-1/Page70'
import Page71 from '@components/magazines-mobile/issue-1/Page71'
import Page72 from '@components/magazines-mobile/issue-1/Page72'
import Page73 from '@components/magazines-mobile/issue-1/Page73'
import Page74 from '@components/magazines-mobile/issue-1/Page74'
import Page75 from '@components/magazines-mobile/issue-1/Page75'
import Page76 from '@components/magazines-mobile/issue-1/Page76'
import Page77 from '@components/magazines-mobile/issue-1/Page77'
import Page78 from '@components/magazines-mobile/issue-1/Page78'
import Page79 from '@components/magazines-mobile/issue-1/Page79'
import Page80 from '@components/magazines-mobile/issue-1/Page80'
import Page81 from '@components/magazines-mobile/issue-1/Page81'
import Page82 from '@components/magazines-mobile/issue-1/Page82'
import Page83 from '@components/magazines-mobile/issue-1/Page83'
import Page84 from '@components/magazines-mobile/issue-1/Page84'
import Page85 from '@components/magazines-mobile/issue-1/Page85'
import Page86 from '@components/magazines-mobile/issue-1/Page86'
import Page87 from '@components/magazines-mobile/issue-1/Page87'

import MobilePageWrapper from '@components/magazines-mobile/common/MobilePageWrapper'
import ViewerSwitch from '@components/magazines-mobile/common/ViewerSwitch'

import styles from './styles.module.scss'

const MobileViewer = props => {
  const {
    issueId,
    pageNumber,
    children,
    onSwitchViewer
  } = props
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const pageList = getPageList(issueId)

  const getChildrenList = () => {
    const childrenList = []

    pageList.forEach((item, index) => {
      childrenList.push(
        <MobilePageWrapper>
          {item}
        </MobilePageWrapper>
      )
    })
    return childrenList
  }

  return (
    <>
      <div className={styles.mobileViewerWrapper}>
        <ViewerSwitch 
          viewers={['exit', 'mapview']}
          onSwitchViewer={onSwitchViewer}
        />
        <div 
          className={styles.contentWrapper}
          style={{
            width: '100%',
          }}
        >
          <SwipePage 
          >
            {
              getChildrenList()
            }
            {/*
            <MobilePageWrapper><CoverPage /></MobilePageWrapper>
            <MobilePageWrapper><Page12 /></MobilePageWrapper>
            <MobilePageWrapper><Page3 /></MobilePageWrapper>
            <MobilePageWrapper><Page4 /></MobilePageWrapper>
            <MobilePageWrapper><Page5 /></MobilePageWrapper>
            <MobilePageWrapper><Page6 /></MobilePageWrapper>
            <MobilePageWrapper><Page7 /></MobilePageWrapper>
            <MobilePageWrapper><Page910 /></MobilePageWrapper>
            <MobilePageWrapper><Page910Part2 /></MobilePageWrapper>
            <MobilePageWrapper><Page1112 /></MobilePageWrapper>
            <MobilePageWrapper><Page1112Part2 /></MobilePageWrapper>
            <MobilePageWrapper><Page1314 /></MobilePageWrapper>
            <MobilePageWrapper><Page1314Part2 /></MobilePageWrapper>
            <MobilePageWrapper><Page1516 /></MobilePageWrapper>
            <MobilePageWrapper><Page1516Part2 /></MobilePageWrapper>
            <MobilePageWrapper><Page1718 /></MobilePageWrapper>
            <MobilePageWrapper><Page1718Part2 /></MobilePageWrapper>
            <MobilePageWrapper><Page1920 /></MobilePageWrapper>
            <MobilePageWrapper><Page1920Part2 /></MobilePageWrapper>
            <MobilePageWrapper><Page2021 /></MobilePageWrapper>
            <MobilePageWrapper><Page2122 /></MobilePageWrapper>
            <MobilePageWrapper><Page2324 /></MobilePageWrapper>
            <MobilePageWrapper><Page2526 /></MobilePageWrapper>
            <MobilePageWrapper><Page2728 /></MobilePageWrapper>
            <MobilePageWrapper><Page2930 /></MobilePageWrapper>
            <MobilePageWrapper><Page3132 /></MobilePageWrapper>
            <MobilePageWrapper><Page3334 /></MobilePageWrapper>
            <MobilePageWrapper><Page33 /></MobilePageWrapper>
            <MobilePageWrapper><Page34 /></MobilePageWrapper>
            <MobilePageWrapper><Page35 /></MobilePageWrapper>
            <MobilePageWrapper><Page36 /></MobilePageWrapper>
            <MobilePageWrapper><Page37 /></MobilePageWrapper>
            <MobilePageWrapper><Page38 /></MobilePageWrapper>
            <MobilePageWrapper><Page39 /></MobilePageWrapper>
            <MobilePageWrapper><Page40 /></MobilePageWrapper>
            <MobilePageWrapper><Page41 /></MobilePageWrapper>
            <MobilePageWrapper><Page43 /></MobilePageWrapper>
            <MobilePageWrapper><Page44 /></MobilePageWrapper>
            <MobilePageWrapper><Page45 /></MobilePageWrapper>
            <MobilePageWrapper><Page46 /></MobilePageWrapper>
            <MobilePageWrapper><Page47 /></MobilePageWrapper>
            <MobilePageWrapper><Page48 /></MobilePageWrapper>
            <MobilePageWrapper><Page49 /></MobilePageWrapper>
            <MobilePageWrapper><Page50 /></MobilePageWrapper>
            <MobilePageWrapper><Page51 /></MobilePageWrapper>
            <MobilePageWrapper><Page52 /></MobilePageWrapper>
            <MobilePageWrapper><Page53 /></MobilePageWrapper>
            <MobilePageWrapper><Page54 /></MobilePageWrapper>
            <MobilePageWrapper><Page55 /></MobilePageWrapper>
            <MobilePageWrapper><Page56 /></MobilePageWrapper>
            <MobilePageWrapper><Page57 /></MobilePageWrapper>
            <MobilePageWrapper><Page58 /></MobilePageWrapper>
            <MobilePageWrapper><Page59 /></MobilePageWrapper>
            <MobilePageWrapper><Page60 /></MobilePageWrapper>
            <MobilePageWrapper><Page61 /></MobilePageWrapper>
            <MobilePageWrapper><Page62 /></MobilePageWrapper>
            <MobilePageWrapper><Page63 /></MobilePageWrapper>
            <MobilePageWrapper><Page64 /></MobilePageWrapper>
            <MobilePageWrapper><Page65 /></MobilePageWrapper>
            <MobilePageWrapper><Page66 /></MobilePageWrapper>
            <MobilePageWrapper><Page67 /></MobilePageWrapper>
            <MobilePageWrapper><Page68 /></MobilePageWrapper>
            <MobilePageWrapper><Page69 /></MobilePageWrapper>
            <MobilePageWrapper><Page70 /></MobilePageWrapper>
            <MobilePageWrapper><Page71 /></MobilePageWrapper>
            <MobilePageWrapper><Page72 /></MobilePageWrapper>
            <MobilePageWrapper><Page73 /></MobilePageWrapper>
            <MobilePageWrapper><Page74 /></MobilePageWrapper>
            <MobilePageWrapper><Page75 /></MobilePageWrapper>
            <MobilePageWrapper><Page76 /></MobilePageWrapper>
            <MobilePageWrapper><Page77 /></MobilePageWrapper>
            <MobilePageWrapper><Page78 /></MobilePageWrapper>
            <MobilePageWrapper><Page79 /></MobilePageWrapper>
            <MobilePageWrapper><Page80 /></MobilePageWrapper>
            <MobilePageWrapper><Page81 /></MobilePageWrapper>
            <MobilePageWrapper><Page82 /></MobilePageWrapper>
            <MobilePageWrapper><Page83 /></MobilePageWrapper>
            <MobilePageWrapper><Page84 /></MobilePageWrapper>
            <MobilePageWrapper><Page85 /></MobilePageWrapper>
            <MobilePageWrapper><Page86 /></MobilePageWrapper>
            <MobilePageWrapper><Page87 /></MobilePageWrapper> */}
          </SwipePage>
        </div>

      </div>

    </>
  )
}

export default MobileViewer