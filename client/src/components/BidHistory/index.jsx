import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const BidHistory = ({ userData }) => {
  console.log("userData", userData);

  return (
    <Row className="justify-content-center">
      <Card style={{ width: "60rem" }} className="p-0">
        <Card.Body>
          <Card.Text className="d-flex flex-wrap justify-content-evenly">
            {userData?.bids &&
              userData?.bids.map((bid, index) => {
                return (
                  <Col key={index} xs={6} className="p-4">
                    <span className="p-4 border-start border-end bidHistory">
                      ${bid?.amount} on {bid?.product.name}
                    </span>
                  </Col>
                );
              })}
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default BidHistory;
