import React, { useState } from 'react'
import { useRouter } from 'next/router'
import WebViewer from '../../../containers/web-view'
import MagazineViewer from '../../../containers/magazine-view'
import MapViewer from '../../../containers/map-view'

const MagazinePages = props => {
  const router = useRouter()
  const { id } = router.query;

  const [viewMethod, setViewMethod] = useState('magazineview')
  
  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={id}
        onSwitchViewer={
          viewer => {
            setViewMethod(viewer)
          }
        }
      >
      </WebViewer>
    )
  } else if (viewMethod === 'magazineview') {
    return (
      <MagazineViewer
        issueId={id}
        onSwitchViewer={
          viewer => {
            setViewMethod(viewer)
          }
        }
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
      onSwitchViewer={
        viewer => {
          setViewMethod(viewer)
        }
      }
    >
    </MapViewer>
  )
}

export default MagazinePages