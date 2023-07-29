import React from 'react'
import styles from './Card.module.css'
import { BsTrash3 } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

export default function Card({ picture, name, contact, email }) {
  return (
    <div className={styles.card}>
      <div className={styles.buttons}>
        <BiEdit />
        <BsTrash3 />
      </div>
      <div className={styles.details}>
        <div className={styles.picture}>
          <img src={picture} />
        </div>
        <div className={styles.infos}>
          <h4>{name}</h4>
          <p>Phone: {contact}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  )
}
