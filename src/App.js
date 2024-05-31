import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home';
import About from './about';
import Projects from './projects';
import Shop from './shop';
import Contact from './contact';
import Signup from './signup';
import Login from './login';
import Navbar from  './navbar';
import ViewCart from './viewcart'
import Checkout from './checkout';
import Discover from './discover';
import Discover2 from './discover2';
import Discover3 from './discover3';
import OTPVerification from './OTPVerification';





function App() {

  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/view-cart' element={<ViewCart />} />     
        <Route exact path='/checkout' element={< Checkout/>} />  
        <Route exact path='/discover' element={<Discover />} />
        <Route exact path='/discover2' element={<Discover2 />} />
        <Route exact path='/discover3' element={<Discover3 />} />
       
        <Route path="/verify-otp" element={<OTPVerification />} />

        

    </Routes>

    </Router>
  );
}

export default App