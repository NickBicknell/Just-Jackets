import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Timer = ({ productData }) => {
  //   const [days, setDays] = useState(0);
  //   const [hours, setHours] = useState(0);
  //   const [minutes, setMinutes] = useState(0);
  //   const [seconds, setSeconds] = useState(0);
  //   const [deadline, setDeadline] = useState(0);
  //   console.log('productData: ', productData)

  //   const getTime = () => {
  //     if (!deadline) return;
  //     console.log('deadline', deadline)
  //     console.log('Date', Date.now())
  //     const time = parseInt(deadline) - Date.now();
  //     console.log(time)
  //     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  //     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
  //     setMinutes(Math.floor((time / 1000 / 60) % 60));
  //     setSeconds(Math.floor((time / 1000) % 60));
  //   };

  //   useEffect(() => {
  //     setDeadline(productData?.expiresAt)
  //     const interval = setInterval(() => getTime(), 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <>
      <div className="timer pb-1" role="timer">
        <Col xs={3}>
          <h1 className="text-white">Bidding ends:</h1>
        </Col>
        {/* <div className="box border-end">
          <p id="day">{days < 10 ? "0" + days : days}</p>
          <span className="fs-4">Days</span>
        </div>
        <div className="box border-end">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
          <span className="fs-4">Hours</span>
        </div>
        <div className="box border-end">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="fs-4">Minutes</span>
        </div>
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="fs-4">Seconds</span>
        </div> */}
        <Col xs={9} className="border-start">
          <div className="box py-4">
            <p>{productData?.expiresAt}</p>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Timer;
