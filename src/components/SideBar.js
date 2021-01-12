import React, { useContext } from 'react';
import { RecipientContext } from '../context/RecipientProvider';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const SideBar = ({ userId }) => {
  const { recipients, handleDeleteRecipient } = useContext(RecipientContext);
  console.log(recipients);
  const recipientComponentList = recipients.map((r) => (
    <div key={r.id} className="mt-2 d-flex flex-row-reverse">
      <Button className="rounded-0" onClick={() => handleDeleteRecipient(r.id)}>
        X
      </Button>
      <span className="p-1">{r.id}</span>
    </div>
  ));

  return (
    <>
      <div style={{ height: '90vh', overflow: 'auto' }}>
        {recipientComponentList}
      </div>
      <p className="text-muted">{`User ID: ${userId}`}</p>
    </>
  );
};

export default SideBar;
