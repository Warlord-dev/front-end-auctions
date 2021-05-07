import React, { useState } from 'react'
import dynamic from 'next/dynamic'

// import KeyboardEventHandler from 'react-keyboard-event-handler'
import CoverPage from '../../components/magazines/issue-1/CoverPage'
import Page12 from '../../components/magazines/issue-1/Page12'
import Page34 from '../../components/magazines/issue-1/Page34'
import Page56 from '../../components/magazines/issue-1/Page56'
import WebPageWrapper from '../../components/magazines/common/WebPageWrapper'
import styles from './styles.module.scss'

const KeyboardEventHandler = dynamic(() => import('react-keyboard-event-handler'), {
  ssr: false,
})

const WebViewer = props => {
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
    <div className={styles.webViewerWrapper}>
      <div className={styles.contentWrapper}>
       <WebPageWrapper zoom={zoom}><CoverPage /></WebPageWrapper>
        <WebPageWrapper zoom={zoom}><Page12 /></WebPageWrapper>
        <WebPageWrapper secondPart zoom={zoom}><Page12 /></WebPageWrapper>
        <WebPageWrapper zoom={zoom}><Page34 /></WebPageWrapper>
        <WebPageWrapper secondPart zoom={zoom}><Page34 /></WebPageWrapper>
        <WebPageWrapper zoom={zoom}><Page56 /></WebPageWrapper>
        <WebPageWrapper secondPart zoom={zoom}><Page56 /></WebPageWrapper>
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
  )
}

export default WebViewer