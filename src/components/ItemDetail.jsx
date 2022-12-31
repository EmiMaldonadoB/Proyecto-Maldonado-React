import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const ctx = useContext(CartContext);

    function swalqty (qty) {
        const swalQty = withReactContent(Swal)
        if (qty > 1) {
            swalQty.fire({
                title: `Has seleccionado ${qty} productos`,
                })
        } else {
            swalQty.fire({
                title: `Has seleccionado ${qty} productos`,
                })
        }
    } 

    const onAdd = (qty) => {
        if ((qty) > 0) {
        swalqty(qty)
        setItemCount(qty);
        ctx.addToCart(item, qty);
    }}

    


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
                    <p>Unidades en stock: {item.stock}</p>{
                         itemCount === 0
                         ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                         : <Link to='/cart' style={{textDecoration: "none"}}><Button>Chequear Carrito</Button></Link>
                    }
                    
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