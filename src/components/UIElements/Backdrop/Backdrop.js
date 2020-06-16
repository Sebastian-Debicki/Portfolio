import React from 'react';

const Backdrop = ({ onClose, backdropName }) => {
  return (
    <div
      className={`backdrop ${backdropName ? 'backdrop__' + backdropName : ''}`}
      onClick={onClose}
    ></div>
  );
};

export default Backdrop;
