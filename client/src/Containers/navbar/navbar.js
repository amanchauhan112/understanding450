// import React, { useState } from 'react';

import {
    Nav,
    NavLink,
    NavMenu,
 
  } from './navbarElements';
  import Sidebarr from '../sidebar/Sidebar';

import './navbar.css';



    function Navbar() {

    return (

        <div className="container" >
            
      <Sidebarr />

        <Nav className="navbar">

<NavMenu >
  
<NavLink to="/"  >
  <h1 >Understanding 450</h1>
</NavLink>
<NavLink to="/" >   Home</NavLink>
<NavLink to="/about" >   About</NavLink>
</NavMenu>


</Nav>
        </div>
    )
}

export default Navbar
