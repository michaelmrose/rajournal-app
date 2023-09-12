import React, { useState } from 'react';
import './style.css';

const ButtonRadioGroup = ({ options, value, onChange, name }) => {
  return (
    <div>
      <div className="button-group">
        {options.map((option, index) => (
          <button
            key={index}
            className={`btn ${value === option ? 'selected' : ''}`}
            onClick={(evt) => {
                evt.preventDefault()
                onChange({ target: { name, value: option } })}}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonRadioGroup;
