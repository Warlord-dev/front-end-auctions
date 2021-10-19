import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const UserList = props => {
  const { userLimit, className, users, onClickSeeAll } = props
  const length = Math.min(users.length, userLimit || 1)
  
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <div className={styles.background}></div>
      <div className={styles.usersWrapper}>
        {
          users.slice(0, length).map((item, index) => {
            const { avatar } = item
            return (
              item.wallet ?
              <Link href={`/user/${item.wallet}`} key={item.name}>
                <a target='_self'>
                  <img 
                    className={avatar && avatar != '' ? styles.rounded : ''}
                    src={`${avatar && avatar != '' ? avatar : '/images/user-profile/user-avatar-black.png'}`} 
                  />
                </a>
              </Link>
              :
              <img 
                className={avatar && avatar != '' ? styles.rounded : ''}
                src={`${avatar && avatar != '' ? avatar : '/images/user-profile/user-avatar-black.png'}`} 
                key={item.name}
              />
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