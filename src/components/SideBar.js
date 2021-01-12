import React, { useContext } from 'react';
import { RecipientContext } from '../context/RecipientProvider';
import { Button } from 'react-bootstrap';

const SideBar = ({ userId }) => {
  const { recipients, handleDeleteRecipient } = useContext(RecipientContext);
  const recipientComponentList = recipients.map((r) => (
    <div key={r} className="mt-2 d-flex flex-row-reverse">
      <Button
        variant="danger"
        className="rounded-right"
        style={{ borderRadius: '0' }}
        onClick={() => handleDeleteRecipient(r)}
      >
        X
      </Button>
      <span
        className="p-1 bg-light w-100 rounded-left text-dark"
        style={{ wordBreak: 'break-word' }}
      >
        {r}
      </span>
    </div>
  ));

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between border-right p-2">
      <div style={{ overflow: 'auto', paddingTop: '1rem' }}>
        {recipientComponentList}
      </div>
      <p className="text-muted">{`User ID: ${userId}`}</p>
    </div>
  );
};

export default SideBar;
