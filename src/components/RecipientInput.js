import React, { useContext, useState } from 'react';

import { Button, Form, InputGroup } from 'react-bootstrap';
import { RecipientContext } from '../context/RecipientProvider';

const RecipientInput = ({ userId }) => {
  const [input, setInput] = useState('');

  const { handleAddRecipient } = useContext(RecipientContext);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (input !== userId) handleAddRecipient(input);
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
