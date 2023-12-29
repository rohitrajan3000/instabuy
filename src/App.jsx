import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Logo from './assets/7.png';
import Home from './components/Home';
import Login from './components/Login';
import ProductGallary from './components/ProductGallary';
import Signup from './components/Signup';

function App() {
  const navigate = useNavigate();
  const [user,setUser] = useState('');

  useEffect(() =>{
    const userEmail  = localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail)
    }
  },[])
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
          <Button onClick={() => navigate('/login')}>{user ?'Logout' :'login'}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path='/' element={<Home user ={user}/>}/>
      <Route path='/Login' element={<Login setUser={setUser}/>}/>
      <Route path='/Signup' element={<Signup setUser = {setUser}/>}/>
      <Route path='/products' element={<ProductGallary/>}/>

    </Routes>
   
   
    </div>
  );
}

export default App
