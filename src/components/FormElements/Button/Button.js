import React from 'react';

const Button = ({ type, children, onClick }) => {
  return (
    <button className={`btn btn__${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
