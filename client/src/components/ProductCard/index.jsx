import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { useMutation } from "@apollo/client";
import { ADD_BID } from "../../utils/mutations";

const ProductCard = ({ productData, user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [addBid, { error, data }] = useMutation(ADD_BID);

  const handleFormSubmit = async (event) => {
    console.log("HELLO SUBMIT!");
    event.preventDefault();
    console.log({
      productId: productData._id,
      userId: user._id
    })
    const mutationResponse = await addBid({
      variables: {
        productId: productData._id,
        userId: user._id
      },
    });
    handleClose();
    console.log("mutationResponse", mutationResponse)
  }

  return (
    <>
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src={"../../public/img/" + productData?.image} />
      <Card.Body>
        <Card.Title>{productData?.name}</Card.Title>
        <Card.Text>Brand: {productData?.brand} <br /> Size: {productData?.size}</Card.Text>
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
              <Form.Label className="fs-3">Current Bid: ${productData?.price}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fs-3">Your Bid: ${productData?.price + 10}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" className="d-none" name="userId" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="close-btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="form-btn" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default ProductCard;
