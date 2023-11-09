// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';


import { useState } from 'react';
import ProductCarousel from '../components/ProductCarousel';

import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";


const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  console.log(products);
  


  return (
    <main>
      <ProductCarousel />
    </main>
  );
};

export default Home;
