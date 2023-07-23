import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  let idNanoid = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    idNanoid = nanoid();
    addContact({ ...state, id: idNanoid });
    console.log(`Dane zostały wysłane ${JSON.stringify(state)}`);
    setState({ name: '', number: '' });
  };

  return (
    <div className={css.formContainer}>
      <form className={css.formContact} onSubmit={handleSubmit}>
        <label className={css.formLabel} htmlFor={idNanoid}>
          Name
        </label>
        <input
          className={css.formInput}
          onChange={handleChange}
          id={idNanoid}
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа]+(([' \-][a-zA-Zа])?[a-zA-Zа]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.formLabel} htmlFor={idNanoid}>
          Number
        </label>
        <input
          className={css.formInput}
          onChange={handleChange}
          id={idNanoid}
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
