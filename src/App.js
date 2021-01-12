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

function App() {
  const [userId] = useLocalStorage('userId', () => uuidv4());

  return (
    <RecipientProvider>
      <ChatProvider>
        <Container fluid>
          <Row>
            <Col xs={4}>
              <SideBar userId={userId} />
            </Col>
            <Col>
              <RecipientInput />
              <Chat userId={userId} />
            </Col>
          </Row>
        </Container>
      </ChatProvider>
    </RecipientProvider>
  );
}

export default App;
