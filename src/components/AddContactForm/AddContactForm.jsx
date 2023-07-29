import React from 'react'
import styles from './AddContactForm.module.css'

export default function AddContactForm() {
  return (
    <div className={styles.addContactForm}>
      <h2 className={styles.title}>Add a Contact</h2>
      <form className={styles.form}>
        <label htmlFor='contactName'>Name:</label>
        <input type='text' id='contactName' name='contactName' placeholder='Full name' />

        <label htmlFor='contact'>Contact:</label>
        <input type='phone' id='contact' name='contact' placeholder='Phone Number' />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' placeholder='your@email.com'/>

        <label htmlFor='picture'>Picture:</label>
        <input type='' id='picture' name='picture' />

        <button className={styles.button}>Add</button>
      </form>
    </div>
  )
}
