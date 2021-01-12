import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ChatContext = React.createContext();
const ChatProvider = ({ children }) => {
  const [chat, setChat] = useLocalStorage('chat', [
    {
      id: 0,
      body:
        'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext',
      author: 'author',
      recipients: [],
    },
    { id: 2, body: 'text', author: 'author', recipients: [] },
    { id: 3, body: 'text', author: 'author', recipients: [] },
  ]);

  const handleSendMessage = (message) => {
    setChat((prevState) => [...prevState, message]);
  };

  const value = { chat, setChat, handleSendMessage };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export { ChatProvider, ChatContext };
