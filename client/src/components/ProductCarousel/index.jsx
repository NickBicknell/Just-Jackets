import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const ProductCarousel = () => {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS);
  const [products, setProducts] = useState();

  useEffect(() => {
    if (data) {
      console.log(data);
      setProducts(data.products);
    } else if (error) {
      console.log(error);
    } else if (loading) {
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>;
    }
  }, [data, loading, error]);

  // console.log("Products: ", products)

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col xs={8}>
            <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
              {products &&
                products.map((product) => {
                  return (
                    <Carousel.Item key={product._id} className="p-2">
                      <img
                        src={"img/" + product.image}
                        className="d-block w-100 rounded-5"
                        alt=""
                      />
                      <Carousel.Caption className="bg-product rounded-pill">
                        <a
                          href={`/products/${product._id}`}
                          className="text-decoration-none product-name"
                        >
                          <h3>{product.name}</h3>
                        </a>
                        <p className="product-desc">
                          {product.size} | {product.brand}
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProductCarousel;
