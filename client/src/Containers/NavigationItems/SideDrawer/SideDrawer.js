import React from 'react';
import './SideDrawer.css';
const drawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className="SideDrawer">
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
          <i class="fas fa-bars"></i>
        </div>
    )
}
export default drawerToggle