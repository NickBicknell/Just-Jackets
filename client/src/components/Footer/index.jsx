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
        <Col xs={2}><a className='text-decoration-none' href="https://github.com/NickBicknell"><p>Nicholas Bicknell</p></a></Col>
        <Col xs={2}><a className='text-decoration-none' href="https://github.com/pcjitsu"><p>Antonios Zikos</p></a></Col>
        <Col xs={4}></Col>
        <Col xs={2}><a href="https://github.com/NickBicknell/Just-Jackets"><img className="icon m-2" src="../img/github-icon.png" /></a></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
