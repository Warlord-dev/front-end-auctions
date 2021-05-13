import React, { forwardRef } from 'react'
import windowSize from 'react-window-size'
import styled from 'styled-components'
import styles from './styles.module.scss'

const MagazinePageWrapperDiv = styled.div`
  background-color: black;
  border-color: red;
  overflow: hidden;

  width: ${props => `${props.zoom * props.windowHeight / 1497 * 960}px`};
  min-width: ${props => `${props.zoom * props.windowHeight / 1497 * 960}px`};
  max-width: ${props => `${props.zoom * props.windowHeight / 1497 * 960}px`};
  height: ${props => `${props.zoom * props.windowHeight }px`};
`

const ContentWrapperDiv = styled.div`
  width: 1920px;
  height: 1497px;
  transform-origin: 0 0;
  transform: ${props => `scale(${props.zoom * props.windowHeight / 1497})`};

  margin-left: ${props => props.secondPart ? '-100%' : '0'};
`

const MagazinePageWrapper = forwardRef((props, ref) => {
  const {
    zoom,
    secondPart,
    windowHeight
  } = props

  // console.log('windowHeight: ', windowHeight)

  return (
    <MagazinePageWrapperDiv zoom={zoom || 1} ref={ref} windowHeight={windowHeight - 20} >
      <ContentWrapperDiv
        zoom={zoom || 1}
        windowHeight={windowHeight - 20}
        secondPart={secondPart}
      >
      { props.children }
      </ContentWrapperDiv>
    </MagazinePageWrapperDiv>
  )
  // return (
  //   <div ref={ref} className={styles.magazinePageWrapper}>
  //     <div className={
  //       [
  //         styles.contentWrapper, 
  //         secondPart && styles.secondPart
  //       ].join(' ')
  //     }>
  //     { props.children }
  //     </div>
  //   </div>
  // )
})

export default MagazinePageWrapper