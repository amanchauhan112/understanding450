import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin ,faGithub,faWordpress,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        
        <div className="footer">
<div style={{width:"100%",color:"white"}}><h2>FOLLOW ME :</h2></div>
         <div style={{display:"flex",justifyContent:"center"}}>
<a href="https://github.com/amanchauhan112">
      <FontAwesomeIcon icon={faGithub} style={{color:"red"}}/> </a>

      </div>

        </div>

    )
}

export default footer
