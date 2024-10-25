import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PostForm = () => {
  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      const formElement = event.target;
      const formData = new FormData(formElement);
      const response = await axiosInstance.post('/messages', formData);
      if (response.status === 201) {
        setMessages((prev) => [response.data, ...prev]);
        formElement.reset();
      }
    } catch (error) {
      console.log(error);
      alert(`Что-то пошло не так: ${error?.response?.data?.text}`);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <Row className="mb-4">
          <Col>
            <h2>Загрузи часы</h2>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control name="name" placeholder="Название часов" required />
          </Col>
          <Col md={6}>
            <Form.Control name="image" type="file" accept="image/*" />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Описание"
              rows={3}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Загрузить
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default PostForm;
