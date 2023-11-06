import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };



  return (
    <Navbar expand="lg">
    <Container className="mb-5">
      <Link className="text-decoration-none" to="/">
        <Navbar.Brand className="fs-1 text-white">Just Jackets</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <Row>
          {Auth.loggedIn() ? (
            <>
              <Col>
              <Link className="btn fs-5" to="/me">
                Profile
              </Link>
              </Col>
              <Col>
              <button className="btn fs-5" onClick={logout}>
                Logout
              </button>
              </Col>
            </>
          ) : (
            <>
              <Col>
              <Link className="btn fs-5" to="/login">
                Login
              </Link>
              </Col>
              <Col>
              <Link className="btn fs-5" to="/signup">
                Signup
              </Link>
              </Col>
            </>
          )}
          </Row>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
};

export default Header;
