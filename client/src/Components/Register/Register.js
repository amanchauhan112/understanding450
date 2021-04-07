import React from 'react'
import axios from 'axios';

class Register extends React.Component{

   

    constructor(props){
    
        super(props)
    
        this.state = {
           name:'',
           email:'',
           password:'',
           password2:'',
    
          };
    
         }
    
    changeHandler= e => {
        this.setState({ [e.target.name]:e.target.value} )
        
    }
    resetUserInput=()=>{
      this.setState ( {
        name:'',
        email:'',
        password:'',
        password2:'',
  
       });
    };
    submitHandler = e => {
        e.preventDefault()  //to prevent refresh
    
        console.log(this.state)
    
        //now we make post request
    
        axios
        .post('http://localhost:3001/api/register',this.state)
        .then(response => {
            console.log(response)
        this.resetUserInput();
        }) 
        .catch(error => {
            console.log(error)
        })
       
    }
 
    render() {

        const{ name, email, password,password2}=this.state
    
      
        return(
          <div className="app" style={{marginTop:"50px"}}>
            <form onSubmit={this.submitHandler}>
              <div className="form-input">
                <input 
                  type="text"
                  name="name"
                  placeholder="name"
                  value={name}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-input">
                <input
                  placeholder="email"
                  name="email"
                  cols="30"
                  rows="10"
                  value={email}
                  onChange={this.changeHandler}
                />
                  
                
              </div>
              <div className="form-input">
                <input 
                  type="password"
                  name="password"
                  placeholder="pass"
                  value={password}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-input">
                <input 
                  type="password"
                  name="password2"
                  placeholder="pass2"
                  value={password2}
                  onChange={this.changeHandler}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
    
          
          </div>
        );
      }
}

export default Register
