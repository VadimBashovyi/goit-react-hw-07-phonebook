import { useDispatch } from "react-redux";
import styles from "./ContactItem.module.css";
import { deleteContacts} from "../../redux/phonebook/slice-items"

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch()
  
  return (
    <>
      <span className={styles.itemText}>{name}</span>
      <span className={styles.itemText}>{number}</span>
      <button
        type="button"
        className={styles.button}
        data-id={id}
        onClick={() => dispatch(deleteContacts(id))}
      >
        Delete
      </button>
    </>
  );
}




