import React, { useState } from 'react'
import { useRouter } from 'next/router'
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
}

export default MagazinePages