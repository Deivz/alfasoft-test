import { addDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db, contactsCollectionRef } from "../config/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { ContactsContext } from "../contexts/ContactContext";

export default function useFavorite(contact) {

  const { user } = useContext(AuthContext);
  const { getContactsList } = useContext(ContactsContext);

  const checkIfContactExists = async () => {
    const getContactByContact = query(contactsCollectionRef, where("contact", "==", contact.contact));
    const getContactByEmail = query(contactsCollectionRef, where("email", "==", contact.email));
    const checkIfContactExists = await getDocs(getContactByContact);
    const checkIfEmailExists = await getDocs(getContactByEmail);

    if (checkIfContactExists.size > 0) {
      return true;
    }

    if (checkIfEmailExists.size > 0) {
      return true;
    }

    return false;
  }

  const addContact = async (contact) => {
    const contactExists = await checkIfContactExists();

    if (!contactExists) {
      await addDoc(contactsCollectionRef, { contact: contact.contact, email: contact.email, name: contact.name, user: user?.email });
    }
    getGamesList();
  }

  return {
    addContact
  }

}