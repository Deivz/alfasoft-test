import React from 'react'
import AddContactForm from '../../components/AddContactForm/AddContactForm'
import styles from './Add.module.css'
import contactImage from '../../assets/contact.png'

export default function Add() {
  return (
    <div className='container'>
      <div className={styles.addContainer}>
        <div className={styles.form}>
          <AddContactForm />
        </div>
        <div className={styles.illustration}>
          <img src={contactImage} alt='Illustration of a woman in her office using a computer and wearing a headset' />
        </div>
      </div>
    </div>
  )
}
