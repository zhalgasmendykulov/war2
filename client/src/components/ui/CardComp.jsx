import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

export default function CardComponent({ watch }) {
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <CardBody>
        <CardImg src={watch.image} alt="Card image cap" width={'500px'} />
        <CardTitle tag="h5">{watch.name}</CardTitle>
        <CardText>{watch.description}</CardText>
      </CardBody>
    </Card>
  );
}
