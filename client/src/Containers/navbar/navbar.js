// import React, { useState } from 'react';

import {
    Nav,
    NavLink,
    NavMenu,
    NavHead
 
  } from './navbarElements';
  import Sidebarr from '../sidebar/Sidebar';

  // import {useHistory} from 'react-router-dom';
  import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch';
import './navbar.css';

    function Navbar() {
      
      // const history = useHistory();
    //   async function handleClick(){
    //     // console.log(email)
    //   try{  
    //    const res = await fetch('/logintemp',{
    //         method:'GET',
    //         // body: JSON.stringify({
    //         //     email: email,
    //         //     password: password
    //         // }),
    //         // headers: {
    //         //     "content-type": "application/json; charset=UTF-8"
    //         // }
    //     });
        
    //         if( res.status===400){
           
    //           history.push("/login")
          
    //         }
    //         else if( res.status===200){
    //             // alert("incorrect")
    //             history.push("/")

    //             // console.log("incorrect")
    //         }
    //   }
    //   catch{
    //       console.log("incorrect details")
    //   }    
    // }

    return (

        <div className="container" >
            
      <Sidebarr />

        <Nav className="navbar">
        {/* <NavHead to="/"  > */}
  <h1 style={{display:"inline" }}  className="headddd"><a href ="/" className="headaa">Understanding 450</a></h1>
{/* </NavHead> */}

<NavMenu >
  


<NavLink to="/" >   Home</NavLink>
<NavLink to="/about" >   About</NavLink>
<NavLink to="/register" > Register</NavLink>
{/* <Button  href="" 
onClick={handleClick}
>Login</Button> */}
<NavLink to="/login" >Login</NavLink>
<NavLink to="/logout" > Logout</NavLink>

</NavMenu>

<ToggleSwitch/>

</Nav>
        </div>
    )
}

export default Navbar
