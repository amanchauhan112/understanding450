import React, { useState } from 'react';

// import {
    // Nav,
    // NavLink,
    // Bars,
    // NavMenu,
    // NavBtn,
    // NavBtnLink
  // } from '../navbar/navbarElements';
//-----------------------
import './Sidebar.css';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../sidebar/SidebarData';
// import './navbar.css';

import { IconContext } from 'react-icons';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

    function Sidebarr() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="container" >
            
      <IconContext.Provider value={{ color: '#fff' }}>

   
        
<Link to="#" className="menu-bars" style={{'margin':'10px'}}>
<FaIcons.FaBars onClick={showSidebar} className="menu-bars" style={{'margin':'10px'}}/>

</Link>
<nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
             {SidebarData.map((item, index) => {
           return ( 
               <li key={index} className={item.cName}> 
                  <Link to={item.path}>
                     {item.icon}
                   <span>{item.title}</span>
                  </Link> 
                </li> 
               ); 
             })}  
          </ul>
        </nav>
     

        </IconContext.Provider>
        </div>
    )
}

export default Sidebarr;
