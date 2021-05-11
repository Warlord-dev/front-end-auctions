import React, { forwardRef } from 'react'
import windowSize from 'react-window-size'
import styles from './styles.module.scss'
import MapItem from '../../components/magazines/common/MapItem'
import ViewerSwitch from '../../components/magazines/common/ViewerSwitch'

const mapList = [
  {
    issueId: '1',
    content: [
      {
        pageNum: 7,
        x: '10',
        y: '20',
        rotate: '10',
      },
      {
        pageNum: 21,
        x: '30',
        y: '10',
        rotate: '0',
      },
      {
        pageNum: 29,
        x: '44',
        y: '20',
        rotate: '-10',
      },
      {
        pageNum: 35,
        x: '57',
        y: '30',
        rotate: '20',
      },
      {
        pageNum: 43,
        x: '80',
        y: '25',
        rotate: '-16',
      },
      {
        pageNum: 57,
        x: '18',
        y: '60',
        rotate: '-10',
      },
      {
        pageNum: 69,
        x: '23',
        y: '40',
        rotate: '20',
      },
      {
        pageNum: 73,
        x: '32',
        y: '72',
        rotate: '-20',
      },
      {
        pageNum: 79,
        x: '45',
        y: '50',
        rotate: '10',
      },
      {
        pageNum: 87,
        x: '70',
        y: '60',
        rotate: '-15',
      }
    ]
  }
]

const MapViewer = forwardRef((props, ref) => {
  const { issueId, windowWidth, onClickItem, onSwitchViewer } = props
  const currentMap = mapList.find(item => item.issueId === issueId)
  return (
    <>
      <div className={styles.mapViewerWrapper}>
        <div className={styles.contentWrapper}>
          <img src='./magazine/digi_fizzy_map.jpg' alt='map-background' className={styles.mapImage}/>
          {
            currentMap && currentMap.content && 
            currentMap.content.map((item, index) => {
              return (
                <MapItem
                  key={index}
                  windowWidth={windowWidth}
                  itemData={item}
                  issueId={issueId}
                  onClick={() => {
                    onClickItem(item.pageNum)
                  }}
                />
              )
            })
          }
        </div>
      </div>
      <ViewerSwitch 
        mapSwitch
        viewers={['webview', 'magazineview']}
        onSwitchViewer={onSwitchViewer}
      />
    </>
  )
})

export default windowSize(MapViewer)