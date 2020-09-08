import React, { Component}from 'react';
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form"
import ContactList from "./components/contactList/ContactList"
import Filter from "./components/Filter/Filter"
import styles from "./components/global.module.css"


class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  
  getContact = (addedContact) => {
    this.state.contacts.find((el) => el.name.toLowerCase() === addedContact.name.toLowerCase())
      ? alert(`${addedContact.name} is already in contacts `)
      : this.setState((prevState) => {
          return {
            contacts: [...prevState.contacts, addedContact],
          };
        });
  };
  handleChange = event => {
    this.setState({ name: event.target.value })
  };

  getFilteredName = event => {
   this.setState({ filter: event.target.value})
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  getFilteredContacts = () => {
    return this.state.filter
      ? this.state.contacts.filter(el => 
        el.name.toLowerCase().includes(this.state.filter.toLowerCase())
      )
      : this.state.contacts;
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <Form getContact={this.getContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} getFilterName={this.getFilteredName} >
        </Filter>
        <ContactList contactList={this.getFilteredContacts()}
          deleteContact={this.deleteContact}>
          </ContactList>
      </div>
    );
  }
};

export default App;
