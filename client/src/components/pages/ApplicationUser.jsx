
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ApplicationUser() {
    const redirectToOtherPage = () => {
        window.location.assign('/account/application/message')}
    
  return (
    <div style={{backgroundColor: '#EFEFEF' , background: 'linear-gradient(to bottom, white, black)', height: '800px'}}>
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Оставить заявку</h3>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Имя</Form.Label>
            <Form.Control name="name" type="text" placeholder="Введите имя" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="hashpass">
            <Form.Text>Комментарии</Form.Text>
            <Form.Control name="coomment" type="text" style={{height: '200px'}}/>
          </Form.Group>
      <Button variant="outline-dark" onClick={redirectToOtherPage}>Отправить заказ</Button>
        </Form>
      </Col>
    </Row>
    </div>
  )
}
