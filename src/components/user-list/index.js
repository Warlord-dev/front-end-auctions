import React from 'react'
import styles from './styles.module.scss'

const UserList = props => {
  const { userLimit, className, onClickSeeAll } = props
  const users = [1,2,3,4,5,6,7,8,9,10]
  const length = Math.min(users.length, userLimit || 1)
  
  console.log('length: ', users.slice(0, length - 1))
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <div className={styles.background}></div>
      <div className={styles.usersWrapper}>
        {
          users.slice(0, length - 1).map((item, index) => {
            return (
              <a href=''>
                <img src='/images/user-avatar.png' key={index} />
              </a>
            )
          })
        }
      </div>
      <button type='button' className={styles.seeAllButton} onClick={onClickSeeAll}>
        See All
      </button>
    </div>
  )
}

export default UserList