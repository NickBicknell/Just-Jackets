// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import CommentList from '../components/BidList';
// import CommentForm from '../components/CommentForm';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import HighestBidCard from "../components/HighestBidCard";
import ProductBidsCard from "../components/ProductBidsCard";

// import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const SingleProduct = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // const { thoughtId } = useParams();

  // const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
  //   // pass URL parameter
  //   variables: { thoughtId: thoughtId },
  // });

  // const thought = data?.thought || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <ProductCard />
        </Col>
        <Col>
          <HighestBidCard />
        </Col>
        <Col>
        <ProductBidsCard />
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
