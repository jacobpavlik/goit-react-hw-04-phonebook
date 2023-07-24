import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  // const [state, setState] = useState({
  //   name: '',
  //   number: '',
  // });
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleName = () => {
    setName(prevName => prevName, name.value);
  };
  const handleNumber = () => {
    setNumber(number);
  };

  let idNanoid = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    handleName();
    handleNumber();
    // setState(prevState => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    idNanoid = nanoid();
    addContact({ name, number, id: idNanoid });
    console.log(`Dane zostały wysłane ${JSON.stringify(name, number)}`);
    setName('');
    setNumber('');
    // setState({ name: '', number: '' });
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
          value={name}
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
          value={number}
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
