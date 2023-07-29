import { createContext, useContext, useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { contactsCollectionRef } from "../config/firebase";
import { AuthContext } from "./AuthContext";

export const ContactsContext = createContext();

export default function ContactContextProvider({ children }) {

  const { user } = useContext(AuthContext);

  const [contactsList, setContactsList] = useState();

  async function getContactsList() {

    try {
      const docsArray = await getDocs(contactsCollectionRef);
      const contactsArray = docsArray.docs.map((doc) => ({
        id: doc.id,
        contact: doc.data().contact,
        email: doc.data().email,
        name: doc.data().name,
      }));

      setContactsList(contactsArray);
    } catch (error) {
      setContactsList([]);
      console.error(error);
    }
  }

  useEffect(() => {
    getContactsList();
  }, [contactsList, user]);

  return (
    <ContactsContext.Provider value={{ contactsList, getContactsList }}>
      {children}
    </ContactsContext.Provider>
  );
}