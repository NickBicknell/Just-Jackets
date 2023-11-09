// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import CommentList from '../components/BidList';
// import CommentForm from '../components/CommentForm';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const SingleProduct = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    // <div className="my-3">
    //   <h3 className="card-header bg-dark text-light p-2 m-0">
    //     {thought.thoughtAuthor} <br />
    //     <span style={{ fontSize: '1rem' }}>
    //       had this thought on {thought.createdAt}
    //     </span>
    //   </h3>
    //   <div className="bg-light py-4">
    //     <blockquote
    //       className="p-4"
    //       style={{
    //         fontSize: '1.5rem',
    //         fontStyle: 'italic',
    //         border: '2px dotted #1a1a1a',
    //         lineHeight: '1.5',
    //       }}
    //     >
    //       {thought.thoughtText}
    //     </blockquote>
    //   </div>

    //   <div className="my-5">
    //     <CommentList comments={thought.comments} />
    //   </div>
    //   <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
    //     <CommentForm thoughtId={thought._id} />
    //   </div>
    // </div>
    <Container>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src="../img/example-jacket.jpg" />
            <Card.Body>
              <Card.Title>Product Name</Card.Title>
              <Card.Text>
                Product Desc
              </Card.Text>
              <Button className="form-btn">Bid</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2}>
        <Card style={{ width: "13rem" }}>
          <Card.Header as="h5" className="text-center">Higest Bidder</Card.Header>
            <Card.Body>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
        <Card style={{ width: "30rem" }}>
          <Card.Header as="h5" className="text-center">Bid History</Card.Header>
            <Card.Body>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
