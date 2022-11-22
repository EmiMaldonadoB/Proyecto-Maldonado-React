import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



const App = () => {
  return (
    <>
      
      <Navbar />
      <ItemListContainer mensaje="Proximamente, nuestra lista de nuestros productos"/>
    </>
  )
}

export default App;