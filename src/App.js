import { v4 as uuidv4 } from 'uuid';
import Chat from './components/Chat';
import SideBar from './components/SideBar';
import useLocalStorage from './hooks/useLocalStorage';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { RecipientProvider } from './context/RecipientProvider';

function App() {
  const [userId] = useLocalStorage('userId', () => uuidv4());

  return (
    <RecipientProvider>
      <Container fluid>
        <Row>
          <Col>
            <SideBar userId={userId} />
          </Col>
          <Col>
            <Chat />
          </Col>
        </Row>
      </Container>
    </RecipientProvider>
  );
}

export default App;
