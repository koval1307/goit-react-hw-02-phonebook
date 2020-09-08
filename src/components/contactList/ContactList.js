import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./contacts-list.module.css";

function ContactList({ contactList, deleteContact }) {
  return (
    <ul className={styles.contact__list}>
      {contactList.map((el) => {
        return (
          <li key={el.id} className={styles.contactList__item}>
            <div className={styles.contacts}>
              <span className={styles.name}>{el.name}</span>
              <span className={styles.tel}>: {el.number}</span>
            </div>
            <Button
              className={styles.btn}
              variant="contained"
              color="secondary"
              type="button"
              onClick={() => deleteContact(el.id)}
            >
              delete Contact
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
