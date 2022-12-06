import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item && item.thumbnail
            ?
            <>
            <div className='product-wrapper'>
                <div className="product-image">
                    <img className='' src={item.imagen} alt="" />
                </div>
                <div className="product-text">
                    <p className='product-title'>{item.nombre}</p>
                    <p>Precio: S/. {item.precio}</p>
                    <p>Unidades en stock: {item.stock}</p>
                    <Button className='pb-1'>Agregar al carrito</Button>
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