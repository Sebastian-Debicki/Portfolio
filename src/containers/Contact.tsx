import React, { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

import { Heading } from '../common/components/Heading';
import { Input } from '../common/components/Input';
import { Button } from '../common/components/Button';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_mf3xaxq',
        'template_0c8ykfd',
        {
          name,
          title,
          email,
          message,
        },
        'user_g20yo9uzVTrxwnYMfYlEq'
      )
      .then(() => {
        setEmail('');
        setName('');
        setTitle('');
        setMessage('');
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="contact">
      <div className="u-center u-margin-bottom-small contact__heading-box">
        <Heading type="secondary">
          Contact<span className="color">.</span>
        </Heading>
      </div>

      <form className="contact__form" onSubmit={sendEmail}>
        <div className="contact__info">
          <ul className="contact__info__list">
            <li className="contact__info__item">Sebastian Dębicki</li>
            <li className="contact__info__item">
              sebastian.debicki5@gmail.com
            </li>
          </ul>
        </div>

        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="input"
          inputType="email"
          name="Email"
          required
        />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="input"
          inputType="text"
          name="Name"
        />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="input"
          inputType="text"
          name="Title"
          required
          minLength={3}
        />
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="textarea"
          name="Message"
          required
          minLength={6}
        />
        <Button type="primary">Send</Button>
      </form>

      <div className="contact__color-box"></div>
    </section>
  );
};
