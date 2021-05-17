import React from 'react'
import SwipePage from '../../components/swipe'
import CoverPage from '@components/magazines-mobile/issue-1/CoverPage'
import Page12 from '@components/magazines-mobile/issue-1/Page12'
import Page3 from '@components/magazines-mobile/issue-1/Page3'
import Page4 from '@components/magazines-mobile/issue-1/Page4'
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
            <MagazinePageWrapper><Page5 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page6 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page7 /></MagazinePageWrapper>
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
            <MagazinePageWrapper><Page39 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page40 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page41 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page43 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page44 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page45 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page46 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page47 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page48 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page49 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page50 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page51 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page52 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page53 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page54 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page55 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page57 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page58 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page59 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page60 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page61 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page62 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page63 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page64 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page65 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page66 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page67 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page68 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page69 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page70 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page71 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page72 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page73 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page74 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page75 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page76 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page77 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page79 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page80 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page81 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page82 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page83 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page84 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page85 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page86 /></MagazinePageWrapper>
            <MagazinePageWrapper><Page87 /></MagazinePageWrapper>

          </SwipePage>
        </div>
      </div>
      <ViewerSwitch 
        viewers={['exit', 'mapview']}
        onSwitchViewer={onSwitchViewer}
      />
    </>
  )
}

export default MagazineViewer