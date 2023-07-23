// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';

export const App = () => {
  // const [contacts, setContacts] = useState([])
  // const [filer, setFilter] = useState('')

  const [state, setState] = useState({
    contacts: [],
    filter: '',
  });

  // export class App extends Component {
  //   state = {
  //     contacts: [],
  //     filter: '',
  //   };

  const handleFilter = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
    console.log('handleFilter', e.target.value);
  };

  const addContact = newContact => {
    console.log('newContact', newContact);
    if (
      newContact.name !== '' &&
      state.contacts.find(contact => contact.name === newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    // const contactsLocal = [...contacts, newContact]
    // setContacts([...contactsLocal]);

    setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log('Dodajemy nasz kontakt', state.contacts);
  };

  const deleteContact = index => {
    console.log('Usuwanie kontaktu', index);
    setState(prevState => {
      const updateContacts = [...prevState.contacts];
      updateContacts.splice(index, 1);
      return { contacts: updateContacts };
    });
  };

  useEffect(() => {
    if ('contacts' in localStorage) {
      const localStorageContacts = localStorage.getItem('contacts');
      console.log(localStorageContacts);
      setState({
        contacts: JSON.parse(localStorageContacts),
      });
    }
  }, []);

  // componentDidMount() {
  //     if ('contacts' in localStorage) {
  //       const localStorageContacts = localStorage.getItem('contacts');
  //       console.log(localStorageContacts);
  //       setState({
  //         contacts: JSON.parse(localStorageContacts),
  //       });
  //     }
  //   }

  useEffect(() => {
    console.log('componentDidUpdate', state.contacts);
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
  }, [state.contacts]);

  // componentDidUpdate() {
  //     console.log('componentDidUpdate', this.state.contacts);
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts </h2>
      <Filter handleFilter={handleFilter} filter={state.filter} />
      <ContactList
        contacts={state.contacts}
        deleteContact={deleteContact}
        filter={state.filter}
      />
    </div>
  );
}; // tu jest koniec funkcji App
