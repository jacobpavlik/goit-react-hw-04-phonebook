import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, deleteContact }) => (
  <li>
    <div className={css.listItemContainer}>
      <p className={css.contactName}>{contact.name}:</p>

      <p className={css.contactName}> {contact.number}</p>

      <button
        className={css.deleteButton}
        onClick={deleteContact}
        data-id={contact.id}
      >
        Delete
      </button>
    </div>
  </li>
);
ContactListItem.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
