import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
export class Filter extends Component {
  state = {
    filter: '',
  };
  render() {
    return (
      <div className={css.filterContainer}>
        <label className={css.filterLabel}>
          Find contacts by name
          <input
            className={css.filterInput}
            onChange={this.props.handleFilter}
            type="text"
            name="filter"
            title="Filter contacts"
            value={this.props.filter}
          />
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  filter: PropTypes.string,
};
