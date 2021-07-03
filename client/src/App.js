import './App.css';
import Navbar from './Containers/navbar/navbar';
import './App.css';
import React,{createContext,useReducer} from 'react';
// import Chat from './Chat';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
import LinkedList from './Components/pages/linkedlist';
import SearchSort from './Components/pages/search_sort';
import BinaryTree from './Components/pages/binarytree';
import BST from './Components/pages/bst';


//Answers

//<------------------------------------------------>

//Array
//<------------------------------------------------>

import a_1 from '../src/Components/Answers/Array/a_1'
import a_2 from '../src/Components/Answers/Array/a_2'
import a_3 from '../src/Components/Answers/Array/a_3'
import a_4 from '../src/Components/Answers/Array/a_4'
import a_5 from '../src/Components/Answers/Array/a_5'
import a_6 from '../src/Components/Answers/Array/a_6'
import a_7 from '../src/Components/Answers/Array/a_7'
import a_8 from '../src/Components/Answers/Array/a_8'
import a_9 from '../src/Components/Answers/Array/a_9'
import a_10 from '../src/Components/Answers/Array/a_10'
import a_11 from '../src/Components/Answers/Array/a_11'
import a_12 from '../src/Components/Answers/Array/a_12'
import a_13 from '../src/Components/Answers/Array/a_13'
import a_14 from '../src/Components/Answers/Array/a_14'
import a_15 from '../src/Components/Answers/Array/a_15'
import a_16 from '../src/Components/Answers/Array/a_16'
import a_17 from '../src/Components/Answers/Array/a_17'
import a_18 from '../src/Components/Answers/Array/a_18'
import a_19 from '../src/Components/Answers/Array/a_19'
import a_20 from '../src/Components/Answers/Array/a_20'
import a_21 from '../src/Components/Answers/Array/a_21'
import a_22 from '../src/Components/Answers/Array/a_22'
import a_23 from '../src/Components/Answers/Array/a_23'
import a_24 from '../src/Components/Answers/Array/a_24'
import a_25 from '../src/Components/Answers/Array/a_25'
import a_26 from '../src/Components/Answers/Array/a_26'
import a_27 from '../src/Components/Answers/Array/a_27'
import a_28 from '../src/Components/Answers/Array/a_28'
import a_29 from '../src/Components/Answers/Array/a_29'
import a_30 from '../src/Components/Answers/Array/a_30'
import a_31 from '../src/Components/Answers/Array/a_31'
import a_32 from '../src/Components/Answers/Array/a_32'
import a_33 from '../src/Components/Answers/Array/a_33'
import a_34 from '../src/Components/Answers/Array/a_34'
import a_35 from '../src/Components/Answers/Array/a_35'
import a_36 from '../src/Components/Answers/Array/a_36'

//Matrix
//<------------------------------------------------>

import m_1 from '../src/Components/Answers/Matrix/m_1';
import m_2 from '../src/Components/Answers/Matrix/m_2';
import m_3 from '../src/Components/Answers/Matrix/m_3';
import m_4 from '../src/Components/Answers/Matrix/m_4';
import m_5 from '../src/Components/Answers/Matrix/m_5';
import m_6 from '../src/Components/Answers/Matrix/m_6';
import m_7 from '../src/Components/Answers/Matrix/m_7';
import m_8 from '../src/Components/Answers/Matrix/m_8';
import m_9 from '../src/Components/Answers/Matrix/m_9';
import m_10 from '../src/Components/Answers/Matrix/m_10';

//Stack_Queue
//<------------------------------------------------>

import sq_31 from '../src/Components/Answers/Stack_Queue/31';
import sq_32 from '../src/Components/Answers/Stack_Queue/32';
import sq_33 from '../src/Components/Answers/Stack_Queue/33';

//Linked List
//<------------------------------------------------>

import ll1 from './Components/Answers/Linked List/ll1'
import ll2 from './Components/Answers/Linked List/ll2'
import ll3 from './Components/Answers/Linked List/ll3'
import ll4 from './Components/Answers/Linked List/ll4'
import ll5 from './Components/Answers/Linked List/ll5'
import ll6 from './Components/Answers/Linked List/ll6'
import ll7 from './Components/Answers/Linked List/ll7'
import ll8 from './Components/Answers/Linked List/ll8'
import ll9 from './Components/Answers/Linked List/ll9'
import ll10 from './Components/Answers/Linked List/ll10'
import ll11 from './Components/Answers/Linked List/ll11'
import ll12 from './Components/Answers/Linked List/ll12'
import ll13 from './Components/Answers/Linked List/ll13'
import ll14 from './Components/Answers/Linked List/ll14'
import ll15 from './Components/Answers/Linked List/ll15'
import ll16 from './Components/Answers/Linked List/ll16'


//<------------------------------------------------>

//Graph
//<------------------------------------------------>

import g_1 from '../src/Components/Answers/Graph/1';
import g_2 from '../src/Components/Answers/Graph/2';
import g_3 from '../src/Components/Answers/Graph/3';
import g_4 from '../src/Components/Answers/Graph/4';
import g_5 from '../src/Components/Answers/Graph/5';
import g_6 from '../src/Components/Answers/Graph/6';

export const UserContext =createContext()


const Routing=()=>{
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
      {/* //answers  */}
      
      {/* Array */}
      <Route  path='/a_1' component={a_1} />
      <Route  path='/a_2' component={a_2} />
      <Route  path='/a_3' component={a_3} />
      <Route  path='/a_4' component={a_4} />
      <Route  path='/a_5' component={a_5} />
      <Route  path='/a_6' component={a_6} />
      <Route  path='/a_7' component={a_7} />
      <Route  path='/a_8' component={a_8} />
      <Route  path='/a_9' component={a_9} />
      <Route  path='/a_10' component={a_10} />

      <Route  path='/a_11' component={a_11} />
      <Route  path='/a_12' component={a_12} />
      <Route  path='/a_13' component={a_13} />
      <Route  path='/a_14' component={a_14} />
      <Route  path='/a_15' component={a_15} />
      <Route  path='/a_16' component={a_16} />
      <Route  path='/a_17' component={a_17} />
      <Route  path='/a_18' component={a_18} />
      <Route  path='/a_19' component={a_19} />
      <Route  path='/a_20' component={a_20} />   

      <Route  path='/a_21' component={a_21} />
      <Route  path='/a_22' component={a_22} />
      <Route  path='/a_23' component={a_23} />
      <Route  path='/a_24' component={a_24} />
      <Route  path='/a_25' component={a_25} />
      <Route  path='/a_26' component={a_26} />
      <Route  path='/a_27' component={a_27} />
      <Route  path='/a_28' component={a_28} />
      <Route  path='/a_29' component={a_29} />
      <Route  path='/a_30' component={a_30} />     

      <Route  path='/a_31' component={a_31} />
      <Route  path='/a_32' component={a_32} />
      <Route  path='/a_33' component={a_33} />
      <Route  path='/a_34' component={a_34} />
      <Route  path='/a_35' component={a_35} />
      <Route  path='/a_36' component={a_36} />   

      {/* Matrix */}

      <Route  path='/m_1' component={m_1} />
      <Route  path='/m_2' component={m_2} />
      <Route  path='/m_3' component={m_3} />
      <Route  path='/m_4' component={m_4} />
      <Route  path='/m_5' component={m_5} />
      <Route  path='/m_6' component={m_6} />
      <Route  path='/m_7' component={m_7} />
      <Route  path='/m_8' component={m_8} />
      <Route  path='/m_9' component={m_9} />
      <Route  path='/m_10' component={m_10} />


      
      {/* Stack_Queue */}

      <Route  path='/sq_31' component={sq_31}/>
      <Route  path='/sq_32' component={sq_32}/>
      <Route  path='/sq_33' component={sq_33}/>
      
      {/* Linked List */}
      <Route path='/ll_1' component={ll1} />
      <Route path='/ll_2' component={ll2} />
      <Route path='/ll_3' component={ll3} />
      <Route path='/ll_4' component={ll4} />
      <Route path='/ll_5' component={ll5} />
      <Route path='/ll_6' component={ll6} />
      <Route path='/ll_7' component={ll7} />
      <Route path='/ll_8' component={ll8} />
      <Route path='/ll_9' component={ll9} />
      <Route path='/ll_10'component={ll10} />
      <Route path='/ll_11'component={ll11} />
      <Route path='/ll_12'component={ll12} />
      <Route path='/ll_13'component={ll13} />
      <Route path='/ll_14'component={ll14} />
      <Route path='/ll_15'component={ll15} />
      <Route path='/ll_16'component={ll16} />

     {/* Graph */}
      <Route  path='/g_1' component={g_1}/>
      <Route  path='/g_2' component={g_2}/>
      <Route  path='/g_3' component={g_3}/>
      <Route  path='/g_4' component={g_4}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_6' component={g_6}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
      <Route  path='/g_5' component={g_5}/>
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
