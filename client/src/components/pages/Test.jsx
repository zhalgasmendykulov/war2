import React, { useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import CardComponent from '../ui/CardComponent';
import axiosInstance from '../api/axiosInstance';

export default function TestPage() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axiosInstance.get('/watches').then(({ data }) => {
      setWatches(data);
    });
  }, []);


  
  return (
    <>
      <Row className="mt-3">
        {watches.map((watch) => (
          <Col key={watch.id} md={4} className="mt-3">
            <CardComponent watch={watch} />
          </Col>
        ))}
      </Row>
    </>
  );
}