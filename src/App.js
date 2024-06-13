import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import Projects from './Projects';
import BmiCalculator from './bmicalculator/BmiCalculator';
import Dictionary from './dictionary/Dictionary';
import Calculator from './calculator/Calculator';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/projects/bmicalculator' element={<BmiCalculator/>}/>
            <Route path='/projects/dictionary' element={<Dictionary/>}/>
            <Route path='/projects/calculator' element={<Calculator/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


