import React, { useEffect } from 'react'
import styles from './Contacts.module.css'
import Card from '../../components/Card/Card'
import photo from '../../assets/photo.jpg'

export default function Contacts() {

  // const { contactsList, getContactsList } = useContext(ContactsContext);

  // useEffect(() => {
  //   getContactsList();
  // }, []);

  return (
    <div className='container'>
      <div className={styles.contacts}>
        {/* {
          contactsList.map((contact) => {
            return <Card key={contact.name} name={contact.name} email={contact.email} contact={contact.contact} picture={photo} />
          })
        } */}
        <Card name='Carlos Davi' email='carlos@email.com' contact='99999-9999' picture={photo} />
        <Card name='Carlos Davi' email='carlos@email.com' contact='99999-9999' picture={photo} />
        <Card name='Carlos Davi' email='carlos@email.com' contact='99999-9999' picture={photo} />
      </div>
    </div>
  )
}
