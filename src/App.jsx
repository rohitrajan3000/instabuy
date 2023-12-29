import { useEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Logo from './assets/7.png';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import ProductGallary from './components/ProductGallary';
import Productdetails from './components/Productdetails';
import Signup from './components/Signup';



function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail)
    }
  }, [])


  const handleAddtocart = (item) => {
    setCartItems({ ...cartItems, ...item });
  }


  return (
    <div>

      <Navbar className="instabuy-navbar">
        <Container>

          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{' '}
            InstaBuy!
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {user && (
              <Button>
                Cart &nbsp;
                {Object.keys(cartItems).length > 0 && (
                  <Badge>{Object.keys(cartItems).length}</Badge>
                )}
              </Button>
            )}


            <Button onClick={() => navigate('/login')}>{user ? 'Logout' : 'login'}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/Login' element={<Login setUser={setUser} />} />
        <Route path='/Signup' element={<Signup setUser={setUser} />} />
        <Route path='/products' element={<ProductGallary />} />
        <Route path='/product/:id' element={<Productdetails handleAddtocart={handleAddtocart} cartItems={cartItems} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/checkout' element={<Checkout />} />





      </Routes>


    </div>
  );
}

export default App
