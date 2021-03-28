import React from 'react';

interface Props {
  onClose: () => void;
  backdropName: string;
}

export const Backdrop: React.FC<Props> = ({ onClose, backdropName }) => {
  return (
    <div
      className={`backdrop ${backdropName ? 'backdrop__' + backdropName : ''}`}
      onClick={onClose}
    ></div>
  );
};
