import React, { forwardRef, useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from '@components/magazines/issue-1/CoverPage'
import Page12 from '@components/magazines/issue-1/Page12'
import Page34 from '@components/magazines/issue-1/Page34'
import Page56 from '@components/magazines/issue-1/Page56'
import Page78 from '@components/magazines/issue-1/Page78'
import Page910 from '@components/magazines/issue-1/Page910'
import Page1112 from '@components/magazines/issue-1/Page1112'
import Page1314 from '@components/magazines/issue-1/Page1314'
import Page1516 from '@components/magazines/issue-1/Page1516'
import Page1718 from '@components/magazines/issue-1/Page1718'
import Page1920 from '@components/magazines/issue-1/Page1920'
import Page2122 from '@components/magazines/issue-1/Page2122'
import Page2324 from '@components/magazines/issue-1/Page2324'
import Page2526 from '@components/magazines/issue-1/Page2526'
import Page2728 from '@components/magazines/issue-1/Page2728'
import Page2930 from '@components/magazines/issue-1/Page2930'
import Page3132 from '@components/magazines/issue-1/Page3132'
import Page3334 from '@components/magazines/issue-1/Page3334'
import Page3536 from '@components/magazines/issue-1/Page3536'
import Page3738 from '@components/magazines/issue-1/Page3738'
import Page3940 from '@components/magazines/issue-1/Page3940'
import Page4142 from '@components/magazines/issue-1/Page4142'
import Page4344 from '@components/magazines/issue-1/Page4344'
import Page4546 from '@components/magazines/issue-1/Page4546'
import Page4748 from '@components/magazines/issue-1/Page4748'
import Page4950 from '@components/magazines/issue-1/Page4950'
import Page5152 from '@components/magazines/issue-1/Page5152'
import Page5354 from '@components/magazines/issue-1/Page5354'
import Page5556 from '@components/magazines/issue-1/Page5556'
import Page5758 from '@components/magazines/issue-1/Page5758'
import Page5960 from '@components/magazines/issue-1/Page5960'
import Page6162 from '@components/magazines/issue-1/Page6162'
import Page6364 from '@components/magazines/issue-1/Page6364'
import Page6566 from '@components/magazines/issue-1/Page6566'
import Page6768 from '@components/magazines/issue-1/Page6768'
import Page6970 from '@components/magazines/issue-1/Page6970'
import Page7172 from '@components/magazines/issue-1/Page7172'
import Page7374 from '@components/magazines/issue-1/Page7374'
import Page7576 from '@components/magazines/issue-1/Page7576'
import Page7778 from '@components/magazines/issue-1/Page7778'
import Page7980 from '@components/magazines/issue-1/Page7980'
import Page8182 from '@components/magazines/issue-1/Page8182'
import Page8384 from '@components/magazines/issue-1/Page8384'
import Page8586 from '@components/magazines/issue-1/Page8586'
import Page8788 from '@components/magazines/issue-1/Page8788'
import Backcover from '@components/magazines/issue-1/Backcover'

import MagazinePageWrapper from '@components/magazines/common/MagazinePageWrapper'
import getPageList from '@components/magazines/PageList'
import ViewerSwitch from '@components/magazines/common/ViewerSwitch'
import windowSize from 'react-window-size'
import styles from './styles.module.scss'

const MagazineViewer = forwardRef((props, refs) => {
  const {
    issueId,
    initPage,
    children,
    onSwitchViewer,
    // windowHeight
  } = props

  const [zoom, setZoom] = useState(1)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const pageList = getPageList(issueId)

  console.log('init page number: ', initPage)

  const getChildrenList = () => {
    return pageList.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} zoom={zoom} windowHeight={windowHeight}>
            {item}
          </MagazinePageWrapper>
          {
            index > 0 && index < pageList.length - 1 &&
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart zoom={zoom} windowHeight={windowHeight}>
              {item}
            </MagazinePageWrapper>
          }
        </React.Fragment>
      )
    })
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
 

  return (
    <>
      <div className={styles.magazineViewerWrapper}>
        <div className={styles.contentWrapper}
          style={{
            width: `${zoom * (windowHeight - 20) / 1497 * 1920}px`
          }}
        >
          <HTMLFlipBook 
            width={960}
            height={1497}
            size="stretch"
            startPage={initPage}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            disableFlipByClick={true}
            swipeDistance={100}
          >
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><CoverPage /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page12 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page12 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page34 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page34 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page56 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page78 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page910 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page910 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page1112 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page1112 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page1314 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page1314 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page1516 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page1516 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page1718 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page1718 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page1920 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page1920 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page2122 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page2122 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page2324 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page2324 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page2526 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page2526 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page2728 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page2728 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page2930 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page2930 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page3132 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page3132 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page3334 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page3334 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page3536 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page3536 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page3738 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page3738 /></MagazinePageWrapper>

            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page3940 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page3940 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page4142 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page4142 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page4344 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page4344 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page4546 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page4546 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page4748 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page4748 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page4950 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page4950 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page5152 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page5152 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page5354 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page5354 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page5556 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page5556 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page5758 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page5758 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page5960 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page5960 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page6162 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page6162 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page6364 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page6364 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page6566 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page6566 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page6768 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page6768 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page6970 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page6970 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page7172 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page7172 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page7374 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page7374 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page7576 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page7576 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page7778 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page7778 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page7980 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page7980 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page8182 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page8182 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page8384 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page8384 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page8586 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page8586 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Page8788 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart><Page8788 /></MagazinePageWrapper>
            <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight}><Backcover /></MagazinePageWrapper> 
          </HTMLFlipBook>
        </div>
      </div>
      <ViewerSwitch 
        viewers={['webview', 'mapview', 'exit']}
        onSwitchViewer={onSwitchViewer}
      />
    </>
  )
})

export default MagazineViewer