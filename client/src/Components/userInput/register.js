import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
// import M from 'materialize-css'

const useStyles = makeStyles(()=>({
    container:{
        boxSizing: 'border-box',
    },
    loginForm:{
        maxWidth: '444px',
        width: '100%',
        display: 'block',
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '16px',
        paddingRight: '16px',
        background: '#f6f6f6'
    },
    textfields:{
        width:'100%',
        display: 'flex',
        marginTop: '64px',
        alignItems: 'center',
        flexDirection: 'column',
       
    },
    textfield:{
        marginTop: '16px',
        width:'75%',
    }
    ,
    loginButton:{
        width:'75%',
        marginTop: '26px',
        marginBottom: '16px',
        paddingLeft: '12px',
        paddingRight: '12px',
        backgroundColor: '#115293',
        color:'white',
        '&:hover':{
            backgroundColor: '#00ff99',
            color:'black'
        }
    },
    loginIcon:{
        marginTop: '16px',
        color:'#115293',
        fontSize:'55px'
    }
 
}))

const Register=()=>{

    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    async function handleClick(){
        // console.log(email);

        try{  
            const res = await fetch('/api/register/',{
                 method:'POST',
                 body: JSON.stringify({
                     name: name,
                     email: email,
                     password: password,
                     password2: password2
                 }),
                 headers: {
                     "content-type": "application/json; charset=UTF-8"
                 }
             });
             
                //  const jsondata= await res.json();
                 if( res.status!=='400'){
                    // console.log("incllorrect")
           
            //    M.toast({html:data.message,classes:"#43a047 green darken-1"})
                 history.push("/login")
                 }
                 else {
                    // M.toast({html: data.error,classes:"#c62828 red darken-3"})
                    //  alert("incorrect")
                     console.log("incorrect")
                 }
                }
                // else{
                //     alert("Fill all details")
                // }
        //    }
           catch(error){
            //    alert("incorrect")
            //    console.log("incorrect details")
               console.log(error)
               console.log("jj")
           }    
    }




    const classes = useStyles();

    return (
        <div className={classes.container}>
        <Paper elevation={2} className={classes.loginForm}>
          <div className={classes.textfields}>
            <AccountCircleIcon className={classes.loginIcon} fontSize='large'/>
            <TextField 
                type="text"
                className={classes.textfield} 
                name="name"
                id="standard-required" 
                label="Name" 
                required={true}
                onChange={(e)=>setName(e.target.value)}
                />

            <TextField 
                className={classes.textfield} 
                name="email"
                type="email"
                id="standard-required" 
                label="Email" 
                onChange={(e)=>setEmail(e.target.value)}
                />

            <TextField 
                type="password"
                className={classes.textfield}
                name="password" 
                id="standard-required"  
                label="Password" 
                required={true}
                onChange={(e)=>setPassword(e.target.value)}
                />

            <TextField 
                type="password"
                className={classes.textfield}
                name="password2" 
                id="standard-required"  
                label="Password" 
                onChange={(e)=>setPassword2(e.target.value)}
                />

            <Button 
                className={classes.loginButton}
                onClick={handleClick}
                >
                    Register
            </Button>
          </div>    
        </Paper>
            
        </div>
    )
}

export default Register;