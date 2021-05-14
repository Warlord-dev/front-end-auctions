import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import WebViewer from '../../../containers/web-view'
import MagazineViewer from '../../../containers/magazine-view'
import MagazineMobile from '../../../containers/magazine-mobile'
import MapViewer from '../../../containers/map-view'

const MagazinePages = props => {
  const router = useRouter()
  const { id } = router.query;

  const [viewMethod, setViewMethod] = useState('magazineview')
  const [currentPage, setCurrentPage] = useState(0)
  const width = window.innerWidth

  const switchViewer = viewer => {
    if (viewer === 'exit') {
      Router.push('/')
      return;
    }
    setViewMethod(viewer)
  }
  
  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={id}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
        onChangePageNumber={
          number => {
            setCurrentPage(number)
          }
        }
      >
      </WebViewer>
    )
  } else if (viewMethod === 'magazineview') {
    if(width > 768) {
      return (
        <MagazineViewer
        issueId={id}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
      >
      </MagazineViewer>
      );
    }else {
      return (
        <MagazineMobile
        issueId={id}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
      >
      </MagazineMobile>
      )
    }
  }

  return (
    <MapViewer
      issueId={id}
      onClickItem={pageNumber => {
        setViewMethod('webview')
      }}
      onSwitchViewer={switchViewer}
    >
    </MapViewer>
  )
}

export default MagazinePages