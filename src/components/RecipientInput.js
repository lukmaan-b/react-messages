import React, { useContext, useState } from 'react';

import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { RecipientContext } from '../context/RecipientProvider';

const RecipientInput = () => {
  const [input, setInput] = useState('');

  const { handleAddRecipient } = useContext(RecipientContext);

  console.log(input);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(input);
        handleAddRecipient(input);
      }}
    >
      <Form.Group>
        <Form.Label className="text-muted">Recipient ID</Form.Label>
        <InputGroup>
          <Form.Control onChange={({ target: { value } }) => setInput(value)} />
          <InputGroup.Append>
            <Button type="submit">+</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default RecipientInput;
