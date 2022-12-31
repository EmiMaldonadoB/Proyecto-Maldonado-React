import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'
import './App.css';
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
        <Route path='/Cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;