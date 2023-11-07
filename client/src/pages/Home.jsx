// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_PRODUCTS } from '../utils/queries';

import { useState } from 'react';
import ProductCarousel from '../components/ProductCarousel';


const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
  


  return (
    <main>
      <ProductCarousel />
    </main>
  );
};

export default Home;
