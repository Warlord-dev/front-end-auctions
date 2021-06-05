import React from 'react'
import { useSelector } from 'react-redux'
import styles from './page79.module.scss'
import UnlockPage from '../common/UnlockPage'

const Page79 = () => {
  const { contentUnlocked } = useSelector((state) => state.global.toJS());
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/79-01.png" className={styles.backImage} />
      {!contentUnlocked && <UnlockPage />}
    </div>
  )
}

export default Page79