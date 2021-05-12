import React from 'react'
import styles from './styles.module.scss'

const viewerList = [
  {
    id: 'mapview',
    caption: 'Map View'
  },
  {
    id: 'magazineview',
    caption: 'Magazine View'
  },
  {
    id: 'webview',
    caption: 'Web View'
  }
]

const ViewerSwitch = props => {
  const { viewers, onSwitchViewer, mapSwitch } = props
  const width = window.innerWidth
  const selectedViewers = viewerList.filter(
    item => 
      viewers.findIndex(
        viewerItem => viewerItem === item.id
      ) >= 0
  )
  
  return (
    <div className={mapSwitch 
      ? styles.switchViewerWrapperForMap 
      : styles.switchViewerWrapper
      }
    >
      {
        selectedViewers.map((item, index) => {
          if(!(item.id === 'webview' && width < 768)) {
            return (
              <button
                key={index}
                onClick={() => onSwitchViewer(item.id)}
              >
                {
                  item.caption
                }
              </button>
            )
          }
        })
      }
    </div>
  )
}

export default ViewerSwitch

