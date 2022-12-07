import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({id, imagen, precio, nombre, stock}) => {

    return (
            <Card className='p-3 cards'>
                
            <Card.Img variant="top" className="cardSize" src={imagen}/>
            <Card.Body>
            <Card.Text>$ {precio}</Card.Text>
            <Card.Title>{nombre}</Card.Title>
            
            <Card.Text className="stockText">Stock {stock}</Card.Text>
            <Button as={Link} to={`/item/${id}`} variant="primary" className='botonDetalle'>Detalle</Button>
            </Card.Body>
            </Card>
    );
}