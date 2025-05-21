import React from "react";
import Header from "./components/header/Header";
import HomeContent from "./components/homecontent/Homecontent";
import Footer from './components/footer/Footer';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';
import Plan from "./pages/Plans/Plan";

function App() {

  return (
    <Router>
      <div className="main">
        <Routes>
          <Route path="/" element={<>
          <Header/>
            <HomeContent/>
          <Footer/>
          </>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/plans" element={<Plan/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App