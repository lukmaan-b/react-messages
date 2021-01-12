import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const RecipientContext = React.createContext();
const RecipientProvider = ({ children }) => {
  const [recipients, setRecipients] = useLocalStorage('recipients', []);

  const handleDeleteRecipient = (id) => {
    setRecipients((prevState) => prevState.filter((r) => r !== id));
  };

  const handleAddRecipient = (id) => {
    setRecipients((prevState) => [...prevState, id]);
  };

  const value = {
    recipients,
    setRecipients,
    handleDeleteRecipient,
    handleAddRecipient,
  };

  return (
    <RecipientContext.Provider value={value}>
      {children}
    </RecipientContext.Provider>
  );
};

export { RecipientProvider, RecipientContext };
