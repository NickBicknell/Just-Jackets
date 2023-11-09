import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';

import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProductCarousel = () => {
  // const { data, loading, error } = useQuery(QUERY_PRODUCTS);
  // const products = data?.products || [];

  // if (loading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>

  // useEffect(() => {
  //   if (data) {
  //     console.log(data)
  //   } else if (error) {
  //     console.log(error)
  //   }
  // }, [data, loading, error])

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
      <Carousel.Item>
        <img src="./img/jacket-1.jpg" className="d-block w-100 rounded-5" alt="" />
        <Carousel.Caption className="bg-product rounded-pill">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./img/jacket-2.jpg" className="d-block w-100 rounded-5" alt="" />
        <Carousel.Caption className="bg-product rounded-pill">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./img/jacket-3.jpg" className="d-block w-100 rounded-5" alt="" />
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
