import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();
const SocketProvider = ({ children, userId }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io('https://message-server-react.herokuapp.com', {
      query: { userId },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [userId]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, SocketContext };
