import React from 'react';
import { Link } from 'react-router-dom';

import './App.css'

const Navbar = () => (
 <header className="App-header">
    <h1 className="App-title"><Link to="/">Welcome to the great UI</Link></h1>
 </header>
)

export default Navbar;