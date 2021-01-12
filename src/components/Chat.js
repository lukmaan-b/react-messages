import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatProvider';
import { RecipientContext } from '../context/RecipientProvider';

import { Button, Form, InputGroup } from 'react-bootstrap';

const Chat = ({ userId }) => {
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { chat, handleSendMessage, handleClearMessages } = useContext(
    ChatContext
  );
  const { recipients } = useContext(RecipientContext);
  const ChatListComponent = chat.map((msg, i) => (
    <div
      key={i}
      className={` bg-primary mt-3 ${
        msg.author === userId
          ? 'align-self-end bg-primary'
          : 'align-self-start bg-success'
      }`}
      style={{ borderRadius: '10px' }}
    >
      <p
        className="m-0 text-light pt-3 px-3"
        style={{
          wordBreak: 'break-word',
        }}
      >
        {msg.body}
      </p>
      <p className="text-light px-3 pb-1 m-0">
        <small>{msg.author}</small>
      </p>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipients.length > 0) {
      const payload = { author: userId, body: message, recipients };
      handleSendMessage(payload);
      setMessage('');
    }
  };

  useEffect(() => {
    recipients.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [recipients]);

  return (
    <>
      <div className="d-flex flex-column " style={{ overflow: 'auto' }}>
        {ChatListComponent}
      </div>
      <Form style={{ marginTop: '1rem' }} onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Prepend>
            <Button onClick={handleClearMessages} variant="danger">
              Clear Messages
            </Button>
          </InputGroup.Prepend>
          <Form.Control
            disabled={disabled}
            onChange={({ target: { value } }) => setMessage(value)}
            as="textarea"
            rows={5}
          />
          <InputGroup.Append>
            <Button disabled={disabled} type="submit">
              Enter
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
};

export default Chat;
