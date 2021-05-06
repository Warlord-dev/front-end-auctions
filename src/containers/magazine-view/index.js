import React, { memo, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from '../../components/magazines/issue-1/CoverPage'
import Page1 from '../../components/magazines/issue-1/Page1'
import PageWrapper from '../../components/magazines/common/PageWrapper'

const MagazineViewer = props => {
  const {
    issueId,
    pageNumber,
    children
  } = props
  return (
    <div style={{
      flex: 1,
      background: 'green',
      marginTop: 100,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        background: 'gray',
        // transform: 'scale(0.5)'
      }}>
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
          <CoverPage></CoverPage>
          <PageWrapper><Page1 /></PageWrapper>
          <PageWrapper secondPart><Page1 /></PageWrapper>
          <PageWrapper>test123123123</PageWrapper>
          <PageWrapper>test123123123</PageWrapper>
          <PageWrapper>test123123123</PageWrapper>
          {/* <CoverPage>test</CoverPage> */}
          {/* <Page1></Page1> */}
          {/* <div className="demoPage">Page 3</div>
          <div className="demoPage">Page 4</div> */}
        </HTMLFlipBook>
      </div>
    </div>
  )
}

export default MagazineViewer