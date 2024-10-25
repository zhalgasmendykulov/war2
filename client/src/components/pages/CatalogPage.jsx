/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import CardComp from '../ui/CardComp';
import axiosInstance from '../api/axiosInstance';
import { Col, Container, Row } from 'react-bootstrap';

export default function MainPage() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axiosInstance.get('/watches').then(({ data }) => setWatches(data));
  }, []);
  console.log(watches);

  return (
    <Container>
      <Row>
        {watches.map((watch) => (
          <Col>
            <CardComp key={watch.id} watch={watch} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
