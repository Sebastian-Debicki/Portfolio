import React from 'react';

interface Props {
  type: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ type, children, onClick }) => {
  return (
    <button className={`btn btn__${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
