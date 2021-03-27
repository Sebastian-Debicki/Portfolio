import React from 'react';

interface Props {
  type: string;
  inputType?: string;
  name?: string;
  required?: boolean;
  minLength?: number;
  onChange: () => void;
  value: string;
}

export const Input: React.FC<Props> = ({
  type,
  inputType,
  name,
  required,
  minLength,
  onChange,
  value,
}) => {
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
          cols={30}
          rows={10}
          required={required}
          minLength={minLength}
          onChange={onChange}
          value={value}
        ></textarea>
      );
      break;
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
