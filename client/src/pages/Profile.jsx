// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Info from "../components/Info";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import { useState, useEffect } from "react";

// import Spinner from 'react-bootstrap/Spinner';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

const Profile = ({ user }) => {
  
  const { data, loading, error } = useQuery(QUERY_USER, {variables: {username: user?.username}});
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (data) {
      console.log("Data:", data);
      setUserData(data.user);
    } else if (error) {
      console.log(error);
    }
  }, [data, loading, error]);

  return (
    // <div>
    //   <div className="flex-row justify-center mb-3">
    //     <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
    //       Viewing {userParam ? `${user.username}'s` : 'your'} profile.
    //     </h2>

    //     <div className="col-12 col-md-10 mb-5">
    //       <ThoughtList
    //         thoughts={user.thoughts}
    //         title={`${user.username}'s thoughts...`}
    //         showTitle={false}
    //         showUsername={false}
    //       />
    //     </div>
    //     {!userParam && (
    //       <div
    //         className="col-12 col-md-10 mb-3 p-3"
    //         style={{ border: '1px dotted #1a1a1a' }}
    //       >
    //         <ThoughtForm />
    //       </div>
    //     )}
    //   </div>
    // </div>

    // <p className='text-center text-white fs-2'>{ user? 'If working, this will appear.'
    // : 'You need to be logged in to see this. Use the navigation links above to sign up or log in!'}</p>
    <Container>
      <Row className="justify-content-center">
        <Col xs={10}>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            variant="tabs"
            justify
          >
            <Tab eventKey="profile" title="Info">
              <Info userData={userData} />
            </Tab>
            <Tab eventKey="bids" title="Bid History">
              View your bid history
            </Tab>
            <Tab eventKey="orders" title="Order History">
              View your order history
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
