import React from 'react'
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';


const searchbar = () => {
    return (
         <div>

          <FontAwesomeIcon icon={faSearchengin} style={{color:"white"}} />

          <input className="app-searchbar-note-edit" placeholder="Search">

          </input>
   
       </div>
    )
}

export default searchbar


// npm i --save @fortawesome/fontawesome-svg-core
//   npm install --save @fortawesome/free-solid-svg-icons
//   npm install --save @fortawesome/react-fontawesome
//   npm install --save @fortawesome/free-brands-svg-icons
//   npm install --save @fortawesome/free-regular-svg-icons