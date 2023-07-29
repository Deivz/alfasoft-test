import { NavLink } from 'react-router-dom'
import styles from './NavMenu.module.css'

export default function NavMenu() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to='/'>Contacts</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to='/add'>Add Contact</NavLink>
      </li>
    </ul>
  );
}