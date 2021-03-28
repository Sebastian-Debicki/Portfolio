import React from 'react';

interface Props {
  type: 'input' | 'textarea';
  inputType?: string;
  name?: string;
  required?: boolean;
  minLength?: number;
  onChange: (e: any) => void;
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
  const input = {
    input: (
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
    ),
    textarea: (
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
    ),
  }[type];

  return (
    <div className="input-box">
      {input}
      <label className="label" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
