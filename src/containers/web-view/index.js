import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import WebPageWrapper from '@components/magazines/common/WebPageWrapper'
import ViewerSwitch from '@components/magazines/common/ViewerSwitch'
import getPageList from '@components/magazines/PageList'
import styles from './styles.module.scss'

const KeyboardEventHandler = dynamic(() => import('react-keyboard-event-handler'), {
  ssr: false,
})

const WebViewer = props => {
  const { onSwitchViewer, initPage, issueId, onChangePageNumber } = props
  const [zoom, setZoom] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)

  const zoomList = [0.05, 0.1, 0.25, 0.5, 0.75, 1]
  const viewerWrapperRef = useRef()
  const contentWrapperRef = useRef()
  const pageList = getPageList(issueId)
  const totalPageCount = (pageList.length - 1) * 2
  

  const handleZoom = (key, e) => {
    const zoomIndex = zoomList.indexOf(zoom)
    if (key === '=') {
      if (zoomIndex < 0 || zoomIndex >= zoomList.length - 1) {
        if (zoom >= 16) return
        setZoom(zoom * 2)
      } else setZoom(zoomList[zoomIndex + 1])
    } else if (key === '-') {
      if (zoomIndex === 0) return
      if (zoomIndex > 0) setZoom(zoomList[zoomIndex - 1])
      else setZoom(zoom / 2)
    }
  }

  const onScrollWrapper = () => {
    const pageWidth = contentWrapperRef.current.offsetWidth / totalPageCount
    const pageNumber = viewerWrapperRef.current.scrollLeft / pageWidth | 0
    setCurrentPage(pageNumber)
    onChangePageNumber && onChangePageNumber(pageNumber)
  }

  useEffect(() => {
    if (initPage !== currentPage) {
      setCurrentPage(initPage)
      const pageWidth = contentWrapperRef.current.offsetWidth / totalPageCount
      viewerWrapperRef.current.scrollLeft = initPage * pageWidth  
    }
  }, [initPage])

  return (
    <>
      <div className={styles.webViewerWrapper} ref={viewerWrapperRef} onScroll={onScrollWrapper}>
        <div className={styles.contentWrapper} ref={contentWrapperRef}>
          {
            pageList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <WebPageWrapper zoom={zoom}>
                    {item}
                  </WebPageWrapper>
                  {
                    index > 0 && index < pageList.length - 1 &&
                    <WebPageWrapper secondPart zoom={zoom}>
                      {item}
                    </WebPageWrapper>
                  }
                </React.Fragment>
              )
            })
          }
        </div>
        <KeyboardEventHandler handleKeys={['-', '=']} onKeyEvent={handleZoom} />
      </div>
      <ViewerSwitch viewers={['magazineview', 'mapview']} onSwitchViewer={onSwitchViewer} />
    </>
  )
}

export default WebViewer
