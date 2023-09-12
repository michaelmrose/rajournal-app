import React, { useState } from 'react';
import './style.css';

const ButtonRadioGroup = ({options}) => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="button-group">
        {options.map((option, index) => (
          <button
            key={index}
            className={`btn ${selected === option ? 'selected' : ''}`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonRadioGroup;
