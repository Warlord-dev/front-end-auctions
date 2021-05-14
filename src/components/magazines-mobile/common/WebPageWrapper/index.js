import React, { forwardRef } from 'react'
import styles from './styles.module.scss'
import styled from 'styled-components'

const WebPageWrapperDiv = styled.div`
  background-color: green;
  border-color: red;
  overflow: hidden;

  width: ${props => `calc(320px * ${props.zoom})`};
  min-width: ${props => `calc(320px * ${props.zoom})`};
  height: ${props => `calc(1497px * 640 / 1920 * ${props.zoom})`};

  @media (min-width: 1481px) {
    width: ${props => `calc(700px * ${props.zoom})`};
    min-width: ${props => `calc(700px * ${props.zoom})`};
    height: ${props => `calc(1497px * 1400 / 1920 * ${props.zoom})`};
  }

  @media (min-width: 1281px) and (max-width: 1480px) {
    width: ${props => `calc(600px * ${props.zoom})`};
    min-width: ${props => `calc(600px * ${props.zoom})`};
    height: ${props => `calc(1497px * 1200 / 1920 * ${props.zoom})`};
  }

  @media (min-width: 961px) and (max-width: 1280px) {
    width: ${props => `calc(425px * ${props.zoom})`};
    min-width: ${props => `calc(425px * ${props.zoom})`};
    height: ${props => `calc(1497px * 850 / 1920 * ${props.zoom})`};
  }

  @media (min-width: 641px) and (max-width: 960px) {
    width: ${props => `calc(320px * ${props.zoom})`};
    min-width: ${props => `calc(320px * ${props.zoom})`};
    height: ${props => `calc(1497px * 640 / 1920 * ${props.zoom})`};
  }
`

const ContentWrapperDiv = styled.div`
  width: 1920px;
  height: 1497px;
  transform-origin: 0 0;
  transform: ${props => `scale(calc(640 / 1920 * ${props.zoom}))`};

  margin-left: ${props => props.secondPart ? '-100%' : '0'};

  @media (min-width: 1481px) {
    transform: ${props => `scale(calc(1400 / 1920 * ${props.zoom}))`};
  }

  @media (min-width: 1281px) and (max-width: 1480px) {
    transform: ${props => `scale(calc(1200 / 1920 * ${props.zoom}))`};
  }

  @media (min-width: 961px) and (max-width: 1280px) {
    transform: ${props => `scale(calc(850 / 1920 * ${props.zoom}))`};
  }

  @media (min-width: 641px) and (max-width: 960px) {
    transform: ${props => `scale(calc(640 / 1920 * ${props.zoom}))`};
  }
`


const WebPageWrapper = forwardRef((props, ref) => {
  const {
    zoom,
    secondPart
  } = props

  return (
    // <div ref={ref} className={styles.webPageWrapper}>
    <WebPageWrapperDiv zoom={zoom || 1} ref={ref} >
      <ContentWrapperDiv
        zoom={zoom || 1}
        secondPart={secondPart}
      >
      { props.children }
      </ContentWrapperDiv>
    </WebPageWrapperDiv>
  )
})

export default WebPageWrapper