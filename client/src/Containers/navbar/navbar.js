// import React, { useState } from 'react';

import {
    Nav,
    NavLink,
    // Bars,
    NavMenu,
    // NavBtn,
    // NavBtnLink
  } from './navbarElements';
  import Sidebarr from '../sidebar/Sidebar';

import './navbar.css';
// import { IconContext } from 'react-icons';


    function Navbar() {

    return (
        <div className="container">
            
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      <Sidebarr />

        <Nav className="navbar">
        <h1 style={{color:"white"}}>Understanding 450</h1>
<NavMenu>

{/* <NavLink to="/" activeStyle>
<img src={require('../../images/gg.png')} alt='Home' />
</NavLink> */}
<NavLink to="/" >
    Home
</NavLink>

<NavLink to="/about" >
    About
</NavLink>

{/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}

</NavMenu>
{/* <NavBtn>
    <NavBtnLink to="/signin">Sign In</NavBtnLink>
</NavBtn> */}

</Nav>
        {/* </IconContext.Provider> */}
        </div>
    )
}

export default Navbar
