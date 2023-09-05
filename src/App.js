import './App.css'
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Charts from './pages/Charts'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Register' element={ <Register />}></Route>
      <Route path='/Login' element={ <Login />}></Route>
      <Route path='/Cart' element={ <Cart />}></Route>
      <Route path='/Charts' element={ <Charts />}></Route>


    </Routes>
  </Router>

  )
}
