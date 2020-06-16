import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../../FormElements/Button/Button';

const Modal = ({ children, onClose }) => {
  return (
    <>
      <Backdrop onClose={onClose} backdropName="modal" />
      <div className="modal">
        <Button type="special--close" onClick={onClose}>
          +
        </Button>
        {children}
      </div>
    </>
  );
};

export default Modal;
