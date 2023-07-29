import React, { useEffect } from 'react'
import styles from './Contacts.module.css'
import Card from '../../components/Card/Card'
import photo from '../../assets/muie.jpg'

export default function Contacts() {

  const { contactsList, getContactsList } = useContext(ContactsContext);

  useEffect(() => {
    getContactsList();
  }, []);

  return (
    <div className='container'>
      <div className={styles.contacts}>
        {
          contactsList.map((contact) => {
            return <Card key={contact.name} name={contact.name} email={contact.email} contact={contact.contact} picture={photo} />
          })
        }
      </div>
    </div>
  )
}
