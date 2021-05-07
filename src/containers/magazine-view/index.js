import React, { memo, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from '../../components/magazines/issue-1/CoverPage'
import Page12 from '../../components/magazines/issue-1/Page12'
import Page34 from '../../components/magazines/issue-1/Page34'
import Page56 from '../../components/magazines/issue-1/Page56'
import MagazinePageWrapper from '../../components/magazines/common/MagazinePageWrapper'
import styles from './styles.module.scss'

const MagazineViewer = props => {
  const {
    issueId,
    pageNumber,
    children
  } = props
  return (
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
          // onFlip={this.onPage}
          // onChangeOrientation={this.onChangeOrientation}
          // onChangeState={this.onChangeState}
          className="demo-book"
          // ref={(el) => (this.flipBook = el)}
        >
          <MagazinePageWrapper><CoverPage /></MagazinePageWrapper>
          <MagazinePageWrapper><Page12 /></MagazinePageWrapper>
          <MagazinePageWrapper secondPart><Page12 /></MagazinePageWrapper>
          <MagazinePageWrapper><Page34 /></MagazinePageWrapper>
          <MagazinePageWrapper secondPart><Page34 /></MagazinePageWrapper>
          <MagazinePageWrapper><Page56 /></MagazinePageWrapper>
          <MagazinePageWrapper secondPart><Page56 /></MagazinePageWrapper>
        </HTMLFlipBook>
      </div>
    </div>
  )
}

export default MagazineViewer