import React from 'react';

const Input = ({ type, inputType, name, required, minLength, onChange, value }) => {
  let input;
  switch (type) {
    case 'input':
      input = (
        <input
          className="input"
          type={inputType}
          id={name}
          placeholder={name}
          required={required}
          minLength={minLength}
          onChange={onChange}
          value={value}
        />
      );
      break;
    case 'textarea':
      input = (
        <textarea
          className="input"
          id={name}
          placeholder={name}
          cols="30"
          rows="10"
          required={required}
          minLength={minLength}
          onChange={onChange}
          value={value}
        ></textarea>
      );
      break;
    default:
      return new Error('Wrong input type!');
  }

  return (
    <div className="input-box">
      {input}
      <label className="label" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default Input;
