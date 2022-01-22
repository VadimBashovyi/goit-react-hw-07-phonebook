import { useSelector } from 'react-redux';
import styles from "./Contacts.module.css";
import ContactItem from "../ContactItem/ContactItem";

export default function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
    return (
      <ul className={styles.list}>
        {filteredContacts.map((el) => (
          <li className={styles.item} key={el.id}>
            <ContactItem
              id={el.id}
              name={el.name}
              number={el.number}
            />
          </li>
        ))}
      </ul>
    );
    
  
}




