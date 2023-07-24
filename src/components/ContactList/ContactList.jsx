import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, deleteContact, filter }) => {
  if (contacts.length === 0) {
    return <p className={css.info}>Contacts list is empty</p>;
  } else {
    if (filter === '') {
      return (
        <div>
          <ul>
            {contacts.map(contact => (
              <ContactListItem
                key={contact.id}
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
          {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      );
    }
  }
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
};
