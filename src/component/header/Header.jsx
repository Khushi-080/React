import React from 'react'
import  styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3>khushi</h3>
        <button className={styles.header}>Login</button>
    </div>
  )
}

export default Header;