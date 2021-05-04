import React, { memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from '../../../components/magazines/issue-1/CoverPage'
import Page from '../../../components/magazines/common/Page'


const MagazinePage = props => {
  const router = useRouter()
  const slug = router.query.slug || []
  const issueId = slug[0]
  const pageNum = slug.length > 1 ? slug[1] : -1
  console.log('pageNum: ', pageNum)
  return (
    <div style={{
      flex: 1,
      background: 'green',
      marginTop: 100
    }}>
      <div style={{
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        background: 'gray',
      }}>
        <HTMLFlipBook 
          width={550}
          height={733}
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
          <CoverPage>test</CoverPage>
          <Page><a href='https://google.com'>google</a></Page>
          <Page>test123</Page>
          <Page>test123123123</Page>
          <CoverPage>test</CoverPage>
          {/* <Page1></Page1> */}
          {/* <div className="demoPage">Page 3</div>
          <div className="demoPage">Page 4</div> */}
        </HTMLFlipBook>
      </div>
    </div>
  )
}

export default MagazinePage