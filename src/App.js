
import './App.css';
import Markdown from 'marked-react';

import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const updatePreview = () => {
    document.getElementById("preview").innerHTML = <Markdown value={document.getElementById("editor").value}/>;
  }
   
  return (
      <Container fluid>
        <Row >
          <Col className="text-center"> 
            <h1 >Markdown Previewer by Alexander R.</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <textarea id="editor" onKeyUp={updatePreview()}></textarea>
          </Col>
          <Col xs={6}>
            <div id="preview">{}</div>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
