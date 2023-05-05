import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css" 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContent/ItemDetailContent';
import Cart from "./components/Cart/Cart"
import { createContext } from 'react';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './Context/CartContext';
const App = () => {



	return (
		<div className='div-Root'>
  
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes><Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'} />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/> }></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
          <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>

		</div>
	);
}

export default App;
