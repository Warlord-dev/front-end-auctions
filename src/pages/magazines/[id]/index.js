import React, { useState } from 'react'
import { useRouter } from 'next/router'
import HTMLFlipBook from 'react-pageflip'
import CoverPage from '../../../components/magazines/issue-1/CoverPage'
import Page1 from '../../../components/magazines/issue-1/Page1'
import Page from '../../../components/magazines/common/PageWrapper'
import WebViewer from '../../../containers/web-view'
import MagazineViewer from '../../../containers/magazine-view'
import MapViewer from '../../../containers/map-view'

const MagazinePages = props => {
  const router = useRouter()
  const { id } = router.query;

  const [viewMethod, setViewMethod] = useState('mapview')
  

  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={id}
      >

      </WebViewer>
    )
  } else if (viewMethod === 'magazineview') {
    return (
      <MagazineViewer
        issueId={id}
      >
      </MagazineViewer>
    )
  }

  return (
    <MapViewer
      issueId={id}
      onClickItem={pageNumber => {
        setViewMethod('webview')
      }}
    >

    </MapViewer>
  )

  // return (
  //   <div style={{
  //     flex: 1,
  //     background: 'green',
  //     marginTop: 100,
  //     display: 'flex',
  //     justifyContent: 'center',
  //   }}>
  //     <div style={{
  //       // display: 'flex',
  //       // justifyContent: 'center',
  //       width: '80%',
  //       borderWidth: 1,
  //       borderColor: 'black',
  //       borderStyle: 'solid',
  //       background: 'gray',
  //       // transform: 'scale(0.5)'
  //     }}>
  //       <HTMLFlipBook 
  //         width={960}
  //         height={1497}
  //         size="stretch"
  //         minWidth={315}
  //         maxWidth={1000}
  //         minHeight={400}
  //         maxHeight={1533}
  //         maxShadowOpacity={0.5}
  //         showCover={true}
  //         mobileScrollSupport={true}
  //         // onFlip={this.onPage}
  //         // onChangeOrientation={this.onChangeOrientation}
  //         // onChangeState={this.onChangeState}
  //         className="demo-book"
  //         // ref={(el) => (this.flipBook = el)}
  //       >
  //         <CoverPage></CoverPage>
  //         <Page><Page1 /></Page>
  //         <Page secondPart><Page1 /></Page>
  //         <Page>test123123123</Page>
  //         <Page>test123123123</Page>
  //         <Page>test123123123</Page>
  //         {/* <CoverPage>test</CoverPage> */}
  //         {/* <Page1></Page1> */}
  //         {/* <div className="demoPage">Page 3</div>
  //         <div className="demoPage">Page 4</div> */}
  //       </HTMLFlipBook>
  //     </div>
  //   </div>
  // )
}

export default MagazinePages