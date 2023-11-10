import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import HighestBidCard from "../components/HighestBidCard";
import ProductBidsCard from "../components/ProductBidsCard";

import { QUERY_SINGLE_PRODUCT } from "../utils/queries";

const SingleProduct = ({ user }) => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { productId } = useParams();
  const { data, loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { productId: productId },
  });
  const [productData, setProductData] = useState();

  useEffect(() => {
    if (data) {
      console.log("Data:", data);
      setProductData(data.product);
    } else if (error) {
      console.log(error);
    }
  }, [data, loading, error]);


  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <ProductCard productData={productData} user={user} />
        </Col>
        <Col>
          <HighestBidCard productData={productData} />
        </Col>
        <Col>
          <ProductBidsCard productData={productData} />
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
