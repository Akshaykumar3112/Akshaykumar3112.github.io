
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './restorent/pages/Home';
import OurServices from './restorent/pages/OurServices';
import AboutUs from './restorent/pages/AboutUs';
import ContactUs from './restorent/pages/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ourservices' element={<OurServices/>}/>
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/contactus' element={<ContactUs/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
