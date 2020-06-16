import { useState } from 'react';
import axios from 'axios';

const useContactState = () => {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [showSentMessageIcon, setShowSetMessageIcon] = useState(false);

  const formSubmitionHandler = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_ASSET_URL}/sendEmail`, {
      email: emailValue,
      title: titleValue,
      message: messageValue,
      name: nameValue,
    });
    setEmailValue('');
    setNameValue('');
    setTitleValue('');
    setMessageValue('');
    setShowSetMessageIcon(true);

    setTimeout(() => {
      setShowSetMessageIcon(false);
    }, 5500);
  };

  const changeEmailInputHandler = (e) => setEmailValue(e.target.value);
  const changeNameInputHandler = (e) => setNameValue(e.target.value);
  const changeTitleInputHandler = (e) => setTitleValue(e.target.value);
  const changeMessageInputHandler = (e) => setMessageValue(e.target.value);

  return {
    emailValue,
    nameValue,
    titleValue,
    messageValue,
    changeEmailInputHandler,
    changeNameInputHandler,
    changeTitleInputHandler,
    changeMessageInputHandler,
    formSubmitionHandler,
    showSentMessageIcon,
  };
};

export default useContactState;
