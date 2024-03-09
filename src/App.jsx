import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About';
import Lodging from './pages/Lodging';
import Error from './pages/404/404';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

// Configuring application routing with the function declaration that creates the functional component App
function App() {
    return ( 
    <BrowserRouter>
            {/* Using the Header component in all views (pages) of the application */}
            <Header />
        <Routes>
            {/* Use of the Home component to display all elements of the Home page */}
            <Route path="/" element={<Home />} /> 
            
            {/* Use of the About component to display all elements of the About page */}
            <Route path="/about" element={<About />} /> 
            
            {/* Use of the Lodging component to display all elements of the Lodging page */}
            <Route path="/logement/:id" element={<Lodging />} /> 
            
            {/* Use of the Error component to display all elements of the 404 page */}
            <Route path="*" element={<Error />} /> 
        </Routes>
            {/* Using the Footer component in all views (pages) of the application */}
            <Footer />
    </BrowserRouter> 
    );
};

export default App;