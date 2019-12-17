import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const UseDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select name={id}
              id={id}
              onChange={evt => setState(evt.target.value)}
              onBlur={evt => setState(evt.target.value)}
              disabled={options.length === 0}
      >
        <option value="all">All</option>
        {
          options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        }
      </select>
    </label>
  );

  return [Dropdown, state, setState];
};

// UseDropdown.propTypes = {};

export default UseDropdown;