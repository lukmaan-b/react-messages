import React, { useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { SocketContext } from './SocketProvider';

const ChatContext = React.createContext();
const ChatProvider = ({ children }) => {
  const socket = useContext(SocketContext);
  console.log(socket);
  const [chat, setChat] = useLocalStorage('chat', []);

  const handleClearMessages = () => {
    setChat([]);
  };

  const handleSendMessage = (message) => {
    setChat((prevState) => [...prevState, message]);
    socket && socket.emit('send-message', message);
  };

  const handleRecieveMessage = (message) => {
    setChat((prevState) => [...prevState, message]);
  };

  useEffect(() => {
    socket &&
      socket.on('message-recieve', (message) => {
        handleRecieveMessage(message);
      });
  }, [socket]);

  const value = { chat, setChat, handleSendMessage, handleClearMessages };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export { ChatProvider, ChatContext };
