import React from 'react';
import { Backdrop } from './Backdrop';
import { Button } from './Button';

interface Props {
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ children, onClose }) => {
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
