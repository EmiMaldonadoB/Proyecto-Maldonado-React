import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({id, imagen, precio, nombre}) => {

    return (
            <Card className='p-3'>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>S/. {precio}</Card.Text>
            <Button as={Link} to={`/item/${id}`} variant="primary">Detalle</Button>
            </Card.Body>
            </Card>
    );
}