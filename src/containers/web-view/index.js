import React, { useState } from 'react'
import dynamic from 'next/dynamic'

// import KeyboardEventHandler from 'react-keyboard-event-handler'
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
import WebPageWrapper from '../../components/magazines/common/WebPageWrapper'
import ViewerSwitch from '../../components/magazines/common/ViewerSwitch'
import styles from './styles.module.scss'

const KeyboardEventHandler = dynamic(() => import('react-keyboard-event-handler'), {
  ssr: false,
})

const WebViewer = props => {
  const { onSwitchViewer } = props
  const [zoom, setZoom] = useState(1)

  const zoomList = [0.05, 0.1, 0.25, 0.5, 0.75, 1]

  const handleAnswerChange = (key, e) => {
    const zoomIndex = zoomList.indexOf(zoom)
    if (key === '=') {
      if (zoomIndex < 0 || zoomIndex >= zoomList.length - 1) {
        if (zoom >= 16) return
        setZoom(zoom * 2)  
      } else setZoom(zoomList[zoomIndex + 1])
    }
    else if (key === '-') {
      if (zoomIndex === 0) return
      if (zoomIndex > 0) setZoom(zoomList[zoomIndex - 1])
      else setZoom(zoom / 2)
    }
  }
  return (
    <>
      <div className={styles.webViewerWrapper}>
        <div className={styles.contentWrapper}>
        <WebPageWrapper zoom={zoom}><CoverPage /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page12 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page12 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page34 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page34 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page56 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page56 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page78 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page78 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page910 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page910 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page1112 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page1112 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page1314 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page1314 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page1516 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page1516 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page1718 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page1718 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page1920 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page1920 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page2122 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page2122 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page2324 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page2324 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page2526 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page2526 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page2728 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page2728 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page2930 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page2930 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page3132 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page3132 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page3334 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page3334 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page3536 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page3536 /></WebPageWrapper>
          <WebPageWrapper zoom={zoom}><Page3738 /></WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}><Page3738 /></WebPageWrapper>
        </div>
        <div className={styles.zoomViewer}>
          {
            zoom * 100 + '%'
          }
        </div>
        <KeyboardEventHandler
          handleKeys={['-', '=']}
          onKeyEvent={handleAnswerChange} />
      </div>
      <ViewerSwitch 
        viewers={['magazineview', 'mapview']}
        onSwitchViewer={onSwitchViewer}
      />
    </>
  )
}

export default WebViewer