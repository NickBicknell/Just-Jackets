// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_PRODUCTS } from '../utils/queries';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProductCarousel = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
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
      <Carousel.Item>
        <img src="./img/example-jacket.jpg" className="d-block w-100 rounded-5" alt="" />
        <Carousel.Caption className="bg-product rounded-pill">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./img/example-jacket.jpg" className="d-block w-100 rounded-5" alt="" />
        <Carousel.Caption className="bg-product rounded-pill">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./img/example-jacket.jpg" className="d-block w-100 rounded-5" alt="" />
        <Carousel.Caption className="bg-product rounded-pill">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
    </main>
  );
};

export default ProductCarousel;