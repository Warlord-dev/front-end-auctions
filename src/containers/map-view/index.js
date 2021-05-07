import React, { forwardRef } from 'react'
import windowSize from 'react-window-size'
import styles from './styles.module.scss'
import MapItem from '../../components/magazines/common/MapItem'

const mapList = [
  {
    issueId: '1',
    content: [
      {
        pageNum: 0,
        image: 'cover.jpg',
        x: '10',
        y: '20',
        rotate: '10',
      },
      {
        pageNum: 1,
        image: 'cover.jpg',
        x: '20',
        y: '20',
        rotate: '0',
      },
      {
        pageNum: 3,
        image: 'cover.jpg',
        x: '10',
        y: '40',
        rotate: '-10',
      },
      {
        pageNum: 5,
        image: 'cover.jpg',
        x: '20',
        y: '40',
        rotate: '20',
      }
    ]
  }
]

const MapViewer = forwardRef((props, ref) => {
  const { issueId, windowWidth, onClickItem } = props
  const currentMap = mapList.find(item => item.issueId === issueId)
  return (
    <div className={styles.mapViewerWrapper}>
      <div className={styles.contentWrapper}>
        <img src='./images/magazine/digi_fizzy_map.jpg' alt='map-background' className={styles.mapImage}/>
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
  )
})

export default windowSize(MapViewer)