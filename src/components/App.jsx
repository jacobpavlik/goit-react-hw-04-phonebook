import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilter = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
    console.log('handleFilter', e.target.value);
  };

  addContact = newContact => {
    console.log('newContact', newContact);
    if (
      newContact.name !== '' &&
      this.state.contacts.find(contact => contact.name === newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log('Dodajemy nasz kontakt', this.state.contacts);
  };

  deleteContact = index => {
    console.log('Usuwanie kontaktu', index);
    this.setState(prevState => {
      const updateContacts = [...prevState.contacts];
      updateContacts.splice(index, 1);
      return { contacts: updateContacts };
    });
  };
  componentDidMount() {
    if ('contacts' in localStorage) {
      const localStorageContacts = localStorage.getItem('contacts');
      console.log(localStorageContacts);
      this.setState({
        contacts: JSON.parse(localStorageContacts),
      });
    }
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.contacts);
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts </h2>
        <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
