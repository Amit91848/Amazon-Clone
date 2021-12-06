import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders';

const promise = loadStripe('pk_test_51K3YjqHr7OIFpmihATmWdbOfGqhuRc5nNxrjxdAGoZ3wwyfFNVtSyQ3O1zmsVu2CV0kpwdReXm3neufP0QGjcESj00biRGMSKw');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path='payment' element={<Elements stripe={promise}> <Payment/> </Elements>}/> 
          <Route path="/" element={<Home/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
