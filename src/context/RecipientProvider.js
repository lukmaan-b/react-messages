import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const RecipientContext = React.createContext();
const RecipientProvider = ({ children }) => {
  const [recipients, setRecipients] = useLocalStorage('recipients', [
    { id: 0 },
    { id: 2 },
    { id: 3 },
  ]);

  const handleDeleteRecipient = (id) => {
    setRecipients((prevState) => prevState.filter((r) => r.id !== id));
  };

  const value = { recipients, setRecipients, handleDeleteRecipient };

  return (
    <RecipientContext.Provider value={value}>
      {children}
    </RecipientContext.Provider>
  );
};

export { RecipientProvider, RecipientContext };
