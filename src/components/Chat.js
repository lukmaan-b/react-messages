import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatProvider';
import { RecipientContext } from '../context/RecipientProvider';

import { Button, Form, InputGroup } from 'react-bootstrap';

const Chat = ({ userId }) => {
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { chat, handleSendMessage } = useContext(ChatContext);
  const { recipients } = useContext(RecipientContext);
  const ChatListComponent = chat.map((msg, i) => (
    <div
      key={i}
      className={` bg-primary mt-3 ${
        msg.author === userId ? 'align-self-end' : 'align-self-start'
      }`}
      style={{ borderRadius: '10px' }}
    >
      <p
        className="m-0 text-light p-3 "
        style={{
          wordBreak: 'break-word',
        }}
      >
        {msg.body}
      </p>
      <p className="text-light p-3 m-0">{msg.author}</p>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipients.length > 0) {
      const payload = { author: userId, body: message, recipients };
      handleSendMessage(payload);
    }
  };

  useEffect(() => {
    recipients.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [recipients]);

  return (
    <>
      <div
        className="d-flex flex-column "
        style={{ height: '75vh', overflow: 'auto' }}
      >
        {ChatListComponent}
      </div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
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
