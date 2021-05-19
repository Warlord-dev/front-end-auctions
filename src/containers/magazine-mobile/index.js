import React, { useState } from 'react'
import SwipePage from '@components/swipe'
import getPageList from '@components/magazines-mobile/PageList'
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
        <div className={styles.leftLine}></div>
        <div className={styles.rightLine}></div>
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
          </SwipePage>
        </div>

      </div>

    </>
  )
}

export default MobileViewer