import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const addContact = newContact => {
    if (
      newContact.name !== '' &&
      contacts.find(contact => contact.name === newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    const contactsLocal = [...contacts, newContact];
    setContacts([...contactsLocal]);
    localStorage.setItem('contacts', JSON.stringify(contactsLocal));
  };

  const deleteContact = evt => {
    const id = evt.target.dataset.id;
    const contactsLocal = [...contacts];
    const index = contactsLocal.findIndex(element => element.id === id);
    if (index > -1) {
      contactsLocal.splice(index, 1);
      setContacts([...contactsLocal]);
      localStorage.setItem('contacts', JSON.stringify(contactsLocal));
    }
  };

  useEffect(() => {
    if ('contacts' in localStorage) {
      const localStorageContacts = localStorage.getItem('contacts');
      const contactsLocal = JSON.parse(localStorageContacts);
      setContacts([...contactsLocal]);
    }
  }, []);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts </h2>
      <Filter handleFilter={handleFilter} filter={filter} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        filter={filter}
      />
    </div>
  );
};
