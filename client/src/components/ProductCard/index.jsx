import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ProductCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src="../img/example-jacket.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>Product Desc</Card.Text>
        <Button className="form-btn" onClick={handleShow}>
          Bid
        </Button>
      </Card.Body>
    </Card>
    {/* change input amount to a +10 button */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-3">Current Bid: $</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-3">Your Bid: $</Form.Label>
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

export default ProductCard;
