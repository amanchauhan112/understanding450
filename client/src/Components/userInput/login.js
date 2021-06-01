import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';

// import {Link,useHistory} from 'react-router-dom';
// import M from 'materialize-css'
import {UserContext} from '../../App'

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

export default function Login(){


    const {dispatch} = useContext(UserContext)

    const history = useHistory();
    const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    async function handleClick(){
        // console.log(email)
      try{  
    //    const res = await 
       fetch('https://understanding450.herokuapp.com/login',{
            method:'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                console.log("error")
            //    M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
 
                 localStorage.setItem("jwt",data.token)
                 localStorage.setItem("user",JSON.stringify(data.user))//Since user is an object we need to stringify it
                 dispatch({type:"USER",payload:data.user})
                console.log("good")

                //  M.toast({html:"Signedin success",classes:"#43a047 green darken-1"})
                history.push('/')
            }
         }).catch(err=>{
             console.log(err)
         })

        // const res2 = await fetch('/gooo/',{
        //     method:'GET',
           
        // });
        //    const jsondata= await res2.json();
        //     if( res2.status!=='400'){
        //     console.log(jsondata[0].displayName)
        //     setName(jsondata[0].displayName)
        //     // history.push("/login")
        //     }
        //     else {
        //        //  alert("incorrect")
        //         console.log("incorrect")
        //     }
            // if( res2.status!==400){
           
          
            // // history.push("/")
            // }
            // else {
            //     alert("incorrect")
            //     console.log("incorrect")
            // }
      }
      catch{
          console.log("incorrect details")
      }    
    }

    const classes = useStyles()
    return(
        <div className={classes.container}>
        <Paper elevation={2} className={classes.loginForm}>
          <div className={classes.textfields}>
            <AccountCircleIcon className={classes.loginIcon} fontSize='large'/>
            <TextField 
                type="email"
                className={classes.textfield} 
                name="email"
                id="standard-basic" 
                label="Email" 
                value={email}

                onChange={(e)=>setEmail(e.target.value)}/>

            <TextField 
                type="password"
                className={classes.textfield}
                name="password" 
                id="standard-basic" 
                label="Password" 
                value={password}

                onChange={(e)=>setPassword(e.target.value)}/>

            <Button 
                className={classes.loginButton}
                onClick={handleClick}>
                    login
            </Button>
            {/* <h4>{name} </h4> */}
            <Button 
                className={classes.loginButton}
                href="https://understanding450.herokuapp.com/auth/google">
                   Login With Google
            </Button>
          </div>    
        </Paper>
        </div>
    )

}