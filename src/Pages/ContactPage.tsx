import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const ContactContainer = styled(Column)`
  width: 30vw;
  padding: 30px 60px;
    align-items: center;

  background-color: #121212;
  border-radius: 10px;
  color: white;
  
  @media (max-width: 768px) {
    width: 70vw;
    padding: 10px 30px;
  }
`;
const Title = styled.h2`
  margin: 30px;
  
  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #1da851;
  }
`;

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!name || !message) {
      alert('Please fill out all fields.');
      return;
    }

    setSending(true);

    try {
  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
    { from_name: name, message },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
);


      alert('✅ Message sent successfully!');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Email send failed:', error);
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <CenterContainer>
      <ContactContainer>
        <Title>Contact Me</Title>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSubmit}>Send Email</Button>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;