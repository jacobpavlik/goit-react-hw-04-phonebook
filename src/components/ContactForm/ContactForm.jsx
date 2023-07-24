import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

let idNanoidLabel1 = nanoid();
let idNanoidLabel2 = nanoid();

export const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const idNanoid = nanoid();
    addContact({ ...state, id: idNanoid });
    setState({ name: '', number: '' });
  };

  return (
    <div className={css.formContainer}>
      <form className={css.formContact} onSubmit={handleSubmit}>
        <label className={css.formLabel} htmlFor={idNanoidLabel1}>
          Name
        </label>
        <input
          className={css.formInput}
          onChange={handleChange}
          id={idNanoidLabel1}
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа]+(([' \-][a-zA-Zа])?[a-zA-Zа]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.formLabel} htmlFor={idNanoidLabel2}>
          Number
        </label>
        <input
          className={css.formInput}
          onChange={handleChange}
          id={idNanoidLabel2}
          value={state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
