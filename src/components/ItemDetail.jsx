import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item && item.imagen
            ?
            <>
            <div className='product-wrapper divContainerDetail'>
                <div className="product-image">
                    <img className='tamañoImg' src={item.imagen} alt="" />
                </div>
                <div className="product-text">
                    <p className='product-title'> <b>{item.nombre.toUpperCase()}</b></p>
                    <p>Precio:  {item.precio}</p>
                    <p>Unidades en stock: {item.stock}</p>
                    <Button className='pb-1 botonComprar'>Agregar al carrito</Button>
                    <p><b>Sobre el producto:</b></p>
                    <p className='bottom'>{item.descripcion}</p>
                </div>
            </div>
            </>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;