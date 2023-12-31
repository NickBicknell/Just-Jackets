import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { Outlet } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { useQuery } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from './utils/queries';
import { useParams } from "react-router-dom";

import Auth from "./utils/auth";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [user, setUser] = useState();
  const { username: userParam } = useParams();

  // const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  useEffect(() => {
    console.log("User: ", user);
  }, [user]);

  useEffect(() => {
    if (Auth.loggedIn() && Auth.getProfile()) {
      setUser(Auth.getProfile().data);
    }
  }, []);

  // navigate to personal profile page if username is yours

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="app">
          <Header />
          <div>
            {/* <Outlet /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/me" element={<Profile user={user} />} />
              <Route path="/*" element={<ErrorPage />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/signup" element={<Signup setUser={setUser} />} />
              <Route
                path="/products/:productId"
                element={<SingleProduct user={user} />}
              />
              {/* <Route path="/products/dev" element={<SingleProduct />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
