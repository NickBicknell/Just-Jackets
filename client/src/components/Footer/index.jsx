import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row>
        <Col xs={2}><p>Developed by:</p></Col>
        {/* link names to github */}
        <Col xs={2}><p>Nicholas Bicknell</p></Col>
        <Col xs={2}><p>Zikos Antonios</p></Col>
        <Col xs={4}></Col>
        <Col xs={2}><a href="https://github.com/NickBicknell/Just-Jackets"><img className="icon m-2" src="../img/github-icon.png" /></a></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
