import { FormEvent, useState } from 'react';
import axios from 'axios';

const useContactState = () => {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [showSentMessageIcon, setShowSetMessageIcon] = useState(false);

  const formSubmitionHandler = (e: FormEvent) => {
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

  const changeEmailInputHandler = (e: Event) =>
    setEmailValue((e.target as HTMLInputElement).value);
  const changeNameInputHandler = (e: Event) =>
    setNameValue((e.target as HTMLInputElement).value);
  const changeTitleInputHandler = (e: Event) =>
    setTitleValue((e.target as HTMLInputElement).value);
  const changeMessageInputHandler = (e: Event) =>
    setMessageValue((e.target as HTMLInputElement).value);

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
