import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "_").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        disabled={!options.length}
        value={state}
        onBlur={event => setState(event.target.value)}
        onChange={event => setState(event.target.value)}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
