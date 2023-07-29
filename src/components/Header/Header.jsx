import React, { useState } from 'react'
import styles from './Header.module.css'
import menuStyles from '../NavMenu/NavMenu.module.css'
import MenuButton from '../MenuButton/MenuButton'
import NavMenu from '../NavMenu/NavMenu'

export default function Header() {
  
  const [active, setActive] = useState(false);

   function ToggleMenu() {
      setActive(!active);
   }

  return (
    <header className={active ? `${styles.header} container ${styles.active} ${menuStyles.active}` : `${styles.header} container`}>
      <h1>
        <img src='https://www.alfasoft.pt/assets/images/logo.png' alt='Alfasoft Logo' />
      </h1>
      <div className={styles.overlay} onClick={ToggleMenu}></div>
      <MenuButton active={active} event={ToggleMenu} />
      <NavMenu active={active} />
    </header>
  )
}
