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
]

const ViewerSwitch = props => {
  const { viewers, onSwitchViewer, mapSwitch } = props
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
        })
      }
    </div>
  )
}

export default ViewerSwitch

