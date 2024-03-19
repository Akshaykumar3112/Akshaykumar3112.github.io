import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Restorent from './restorent/pages/Restorent';
import OurServices from './restorent/pages/OurServices';
import AboutUs from './restorent/pages/AboutUs';
import ContactUs from './restorent/pages/ContactUs';
import Menu from './restorent/pages/Menu';
import Cart from './restorent/pages/Cart';
import Home from './Home';
import Projects from './Projects';
import BmiCalculator from './bmicalculator/BmiCalculator';
import Dictionary from './dictionary/Dictionary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/projects/restorent' element={<Restorent/>}/>
            <Route path='/projects/bmicalculator' element={<BmiCalculator/>}/>
            <Route path='/projects/dictionary' element={<Dictionary/>}/>
        
            <Route path='/restorent/ourservices' element={<OurServices/>}/>
            <Route path='/restorent/aboutus' element={<AboutUs/>} />
            <Route path='/restorent/contactus' element={<ContactUs/>} />
            <Route path='/restorent/services/menu' element={<Menu/>} />
            <Route path='/restorent/cart' element={<Cart/>}/>
            
            
           
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


