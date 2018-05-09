import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Navbar = () => (
 <header className="App-header">
    <Link to="/"><img className="logo" alt="Locus Logo with 12-color segmented orange for the 'o' character" src="/locus.png"/></Link>
 </header>
)

export default Navbar;