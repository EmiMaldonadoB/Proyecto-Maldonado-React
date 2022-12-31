import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore"
import { db } from "../utilidades/firebaseConfig"




 const Cart = () => {
    const ctx = useContext(CartContext);

    const createOrder = () => {
      const itemsForDB = ctx.cartList.map(item => ({
        id: item.idItem,
        title: item.titleItem,
        price: item.costItem,
        qty: item.qtyItem
      }));
  
      ctx.cartList.forEach(async (item) => {
        const itemRef = doc(collection (db, "Productos"), item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyItem)
        });
      });
  
      let order = {
        buyer: {
          name: "Paulo Quiroga",
          email: "pauloquiroga@gmail.com",
          phone: "+549264562156"
        },
        total: ctx.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
      };

      console.log(order)
      
      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(doc(db, "orders", "1"));
        return newOrderRef;
      }

      function swalorder (result) {
        const swalOrder = withReactContent(Swal)
            swalOrder.fire({
                title: `Tu orden a sido creada. `,
                text: `Porfavor toma nota del ID de tu compra \n\n\n Orden ID: ${result.id}`
                })
        }
    
      createOrderInFirestore()
        .then(result => swalorder(result))
        .catch(err => console.log(err));
    
      ctx.removeList();
      }

    return (
      <>
          <div className='container-tot'>
                Tu Carrito
                <Link to='/'>Continuar comprando</Link>
                {
                  (ctx.cartList.length > 0)
                  ? <Button onClick={ctx.removeList}>Eliminar todos los productos</Button>
                  : <p>Todavia no seleccionaste ningun producto</p>
                }
                </div>
                {
                  ctx.cartList.length > 0 &&
                  ctx.cartList.map(item => 
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                        <Card className='p-4'>
                        <Card.Img variant="top" src={item.imgItem}/>
                        <Card.Body>
                        
                        <Card.Text>Producto: {item.title}</Card.Text>
                        <Card.Text>Precio ${item.costItem}</Card.Text>
                        <Card.Text>Cantidad: {item.qtyItem}</Card.Text>
                        <Card.Text>Subtotal:  ${ctx.calcTotalPerItem(item.idItem)}</Card.Text>
                        <Button type="filled" onClick={() => ctx.deleteItem(item.idItem)}>ELIMINAR</Button>
                        </Card.Body>
                        </Card>
                      </div>
                    </div>
                    </>
                  )
                }
                {
                  ctx.cartList.length > 0 &&
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                        Total de la orden
                      <p> ${ctx.calcSubTotal()}</p>
                      <Button onClick={createOrder}>Ir a pagar</Button>
                      </div>
                    </div>
                    </>
                };
                
      </>
    );
}

export default Cart;