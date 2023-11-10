
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Info = ({ userData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Container>
        <Row className="mb-5">
            <Button style={{ width: "30rem" }} className="form-btn" onClick={handleShow}>
              Update Account Information
            </Button>
        </Row>
        <Row className="mb-3">
            <Col xs={2} className="border-end">
                <h5 className="text-white">Username:</h5>
            </Col>
            <Col xs={4}>
            <h4 className="text-white">{userData?.username}</h4>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xs={2} className="border-end">
                <h5 className="text-white">Email:</h5>
            </Col>
            <Col xs={4}>
            <h4 className="text-white">{userData?.email}</h4>
            </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Coming Soon</Form.Label>
              {/* <Form.Control
                type="number"
                placeholder="$$$"
                autoFocus
              /> */}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="form-btn" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Info;
