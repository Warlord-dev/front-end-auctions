import React, { forwardRef, useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import HTMLFlipBook from 'react-pageflip'
import MagazinePageWrapper from '@components/magazines/common/MagazinePageWrapper'
import getPageList from '@components/magazines/PageList'
import ViewerSwitch from '@components/magazines/common/ViewerSwitch'
import magazineIssues from '@constants/magazines'
import { getCurrentPage } from '@selectors/global.selectors'
import globalActions from '@actions/global.actions'
import styles from './styles.module.scss'

const MagazineViewer = forwardRef((props, refs) => {
  const { issueId, initPage, onSwitchViewer } = props

  const { contentUnlocked } = useSelector((state) => state.global.toJS())
  const [zoom, setZoom] = useState(1)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const pageList = getPageList(issueId)
  const currentPage = useSelector(getCurrentPage)

  const currentIssue = magazineIssues.find((item) => item.issueId === issueId) || magazineIssues[0]

  const getChildrenList = () => {
    const childrenList = []
    let realPageNum = 0

    pageList.forEach((item, index) => {
      if (((realPageNum > currentIssue.freePageCount && !contentUnlocked) || (realPageNum > ((currentIssue.freePageCount + currentIssue.hiddenPageCount)) && contentUnlocked)) && index < pageList.length - 1 )
        return
      childrenList.push(
        <MagazinePageWrapper key={realPageNum} zoom={zoom} windowHeight={windowHeight}>
          {item}
        </MagazinePageWrapper>
      )
      realPageNum++

      if (index > 0 && index < pageList.length - 1) {
        childrenList.push(
          <MagazinePageWrapper zoom={zoom} windowHeight={windowHeight} secondPart key={realPageNum}>
            {item}
          </MagazinePageWrapper>
        )
        realPageNum++
      }
    })
    return childrenList
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const onFlip = useCallback((e) => {
    globalActions.setCurrentPage(e.data)
    console.log('Current page: ' + e.data)
}, []);

  return (
    <>
      <div className={styles.magazineViewerWrapper}>
        <div
          className={styles.contentWrapper}
          style={{
            width: `${((zoom * (windowHeight - 20)) / 1497) * 1920}px`,
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
            onFlip={onFlip}

          >
            {getChildrenList()}
          </HTMLFlipBook>
        </div>
      </div>
      <ViewerSwitch viewers={['webview', 'mapview', 'exit']} onSwitchViewer={onSwitchViewer} />
    </>
  )
})

export default MagazineViewer
