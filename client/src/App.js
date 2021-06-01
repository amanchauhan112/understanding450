import './App.css';
import Navbar from './Containers/navbar/navbar';
import './App.css';
import React,{useEffect,createContext,useReducer,useContext} from 'react';
// import Chat from './Chat';
import {BrowserRouter as Router, Route, Switch,useHistory} from 'react-router-dom';
import {reducer,initialState} from './reducers/userReducer';
// import Profile from './components/pages/Profile';

//pages
import Home from './Components/pages/home'
import About from './Components/pages/about';
// import Footer from './Containers/footer/footer';
import Array from '../src/Components/pages/array';
import String from '../src/Components/pages/string';
import Stack_Queue from '../src/Components/pages/stack';
import Matrix from '../src/Components/pages/matrix';
import Graph from '../src/Components/pages/graph';
import Error from '../src/Components/pages/error';


//Answers

//<------------------------------------------------>

//Array
//<------------------------------------------------>

import One from '../src/Components/Answers/Array/one';

import LinkedList from './Components/pages/linkedlist';
import SearchSort from './Components/pages/search_sort';
import BinaryTree from './Components/pages/binarytree';
import BST from './Components/pages/bst';

//Stack_Queue
//<------------------------------------------------>

import thirty_one from '../src/Components/Answers/Stack_Queue/31';
import thirty_two from '../src/Components/Answers/Stack_Queue/32';
import thirty_three from '../src/Components/Answers/Stack_Queue/33';

//Graph
//<------------------------------------------------>

import g_1 from '../src/Components/Answers/Graph/1';
import g_2 from '../src/Components/Answers/Graph/2';
import g_3 from '../src/Components/Answers/Graph/3';
import g_4 from '../src/Components/Answers/Graph/4';
import g_5 from '../src/Components/Answers/Graph/5';



import Register from './Components/userInput/register';
import Login from './Components/userInput/login';
import Logout from './Components/userInput/logout';


export const UserContext =createContext()


const Routing=()=>{
  const history=useHistory()
  const {dispatch} = useContext(UserContext)

useEffect(()=>{

  const user = JSON.parse(localStorage.getItem("user"))

  if(user){
    dispatch({type:"USER",payload:user})
    // history.push('/')

  }else{
         history.push('/')
  }


},[]);

  return(
  
  <Switch>
 <Route exact path="/" component={Home}></Route>
      <Route exact path='/about' component={About} />
      <Route exact path='/array' component={Array} />
      <Route exact path='/matrix' component={Matrix} />
      <Route exact path='/search_sort' component={SearchSort} />
      <Route exact path='/string' component={String} />
      <Route exact path='/linkedlist' component={LinkedList} />
      <Route exact path='/binarytree' component={BinaryTree} />
      <Route exact path='/bst' component={BST} />
      <Route exact path='/stack_queue' component={Stack_Queue} />
      <Route exact path='/graph' component={Graph} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/logout' component={Logout} />
      
      {/* //answers  */}
      
      {/* Array */}
      <Route  path='/one' component={One}/>
      
      
    




      
      {/* Stack_Queue */}
      <Route  path='/31' component={thirty_one}/>
      <Route  path='/32' component={thirty_two}/>
      <Route  path='/33' component={thirty_three}/>
      

     {/* Graph */}
     <Route  path='/g_1' component={g_1}/>
      <Route  path='/g_2' component={g_2}/>
      <Route  path='/g_3' component={g_3}/>
      <Route  path='/g_4' component={g_4}/>
      <Route  path='/g_5' component={g_5}/>
      



      <Route component={Error} />
      

 
</Switch>
  )
}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
  return (
<UserContext.Provider value={{state,dispatch}}>
    <Router >
    <Navbar/>
<Routing/>
    
    </Router>

  </UserContext.Provider>
  );
}


export default App;
