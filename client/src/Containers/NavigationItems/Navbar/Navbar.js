// import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import SideDrawer from '../SideDrawer/SideDrawer'


const navbar = (props)=> (
    <header className="Navbar">
<SideDrawer/>

    <Logo/>
    <h1 style={{color: "white"}}>Peek</h1>
     
    <Searchbar/>
<button ><a href="/register">Register</a></button>

    </header>
);
export default navbar;

