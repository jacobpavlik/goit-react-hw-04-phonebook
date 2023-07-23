// import { Component } from 'react';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleFilter, filter }) => (
  // export class Filter extends Component {
  //   state = {
  //     filter: '',
  //   };
  //   render() {
  // return (
  // const [filter, setFilter] = useState('');
  <div className={css.filterContainer}>
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        onChange={handleFilter}
        type="text"
        name="filter"
        title="Filter contacts"
        value={filter}
      />
    </label>
  </div>
);
// )
// }
Filter.propTypes = {
  filter: PropTypes.string,
};
