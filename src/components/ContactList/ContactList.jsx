// import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, deleteContact, filter }) => {
  // export class ContactList extends Component {
  //   render() {
  //     const { contacts, deleteContact, filter } = this.props;
  //     console.log('contacts.length', contacts.length);
  if (contacts.length === 0) {
    return <p className={css.info}>Contacts list is empty</p>;
  } else {
    if (filter === '') {
      return (
        <div>
          <ul>
            {contacts.map((contact, index) => (
              <ContactListItem
                key={index}
                contact={contact}
                deleteContact={deleteContact}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return (
        <ul>
          {filteredContacts.map((contact, index) => (
            <ContactListItem
              key={index}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      );
    }
  }
  // } // to render
}; // to koniec funkcji
ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
};
