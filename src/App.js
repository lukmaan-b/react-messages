import { v4 as uuidv4 } from 'uuid';
import Chat from './components/Chat';
import SideBar from './components/SideBar';
import useLocalStorage from './hooks/useLocalStorage';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { RecipientProvider } from './context/RecipientProvider';
import RecipientInput from './components/RecipientInput';
import { ChatProvider } from './context/ChatProvider';
import { SocketProvider } from './context/SocketProvider';

function App() {
  const [userId] = useLocalStorage('userId', () => uuidv4());

  return (
    <SocketProvider userId={userId}>
      <RecipientProvider>
        <ChatProvider>
          <Container fluid>
            <Row>
              <Col xs={4}>
                <SideBar userId={userId} />
              </Col>
              <Col
                style={{ paddingTop: '1rem' }}
                className="d-flex flex-column justify-content-between min-vh-100"
              >
                <RecipientInput />
                <Chat userId={userId} />
              </Col>
            </Row>
          </Container>
        </ChatProvider>
      </RecipientProvider>
    </SocketProvider>
  );
}

export default App;
