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
import Stack_Queue from './Components/pages/stack_q';
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

//<------------------------------------------------>


//String
//<------------------------------------------------>
import s_1 from '../src/Components/Answers/String/s_1'
import s_2 from '../src/Components/Answers/String/s_2'
import s_3 from '../src/Components/Answers/String/s_3'
import s_4 from '../src/Components/Answers/String/s_4'
import s_5 from '../src/Components/Answers/String/s_5'
import s_6 from '../src/Components/Answers/String/s_6'
import s_7 from '../src/Components/Answers/String/s_7'
import s_8 from '../src/Components/Answers/String/s_8'
import s_9 from '../src/Components/Answers/String/s_9'
import s_10 from '../src/Components/Answers/String/s_10'

import s_11 from '../src/Components/Answers/String/s_11'
import s_12 from '../src/Components/Answers/String/s_12'
import s_13 from '../src/Components/Answers/String/s_13'
import s_14 from '../src/Components/Answers/String/s_14'
import s_15 from '../src/Components/Answers/String/s_15'
import s_16 from '../src/Components/Answers/String/s_16'
import s_17 from '../src/Components/Answers/String/s_17'
import s_18 from '../src/Components/Answers/String/s_18'
import s_19 from '../src/Components/Answers/String/s_19'
import s_20 from '../src/Components/Answers/String/s_20'

// import s_1 from '../src/Components/Answers/String/s_'
// import s_2 from '../src/Components/Answers/String/s_'
// import s_3 from '../src/Components/Answers/String/s_'
// import s_4 from '../src/Components/Answers/String/s_'
// import s_5 from '../src/Components/Answers/String/s_'
// import s_6 from '../src/Components/Answers/String/s_'
// import s_7 from '../src/Components/Answers/String/s_'
// import s_8 from '../src/Components/Answers/String/s_'
// import s_9 from '../src/Components/Answers/String/s_'
// import s_0 from '../src/Components/Answers/String/s_'

// import s_1 from '../src/Components/Answers/String/s_'
// import s_2 from '../src/Components/Answers/String/s_'
// import s_3 from '../src/Components/Answers/String/s_'
// import s_4 from '../src/Components/Answers/String/s_'
// import s_5 from '../src/Components/Answers/String/s_'
// import s_6 from '../src/Components/Answers/String/s_'
// import s_7 from '../src/Components/Answers/String/s_'
// import s_8 from '../src/Components/Answers/String/s_'
// import s_9 from '../src/Components/Answers/String/s_'
// import s_0 from '../src/Components/Answers/String/s_'

//<------------------------------------------------>



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


//Searching_Sorting
//<------------------------------------------------>

import ss_1 from '../src/Components/Answers/Search_Sort/ss_1';
import ss_2 from '../src/Components/Answers/Search_Sort/ss_2';
import ss_3 from '../src/Components/Answers/Search_Sort/ss_3';
import ss_4 from '../src/Components/Answers/Search_Sort/ss_4';
import ss_5 from '../src/Components/Answers/Search_Sort/ss_5';
import ss_6 from '../src/Components/Answers/Search_Sort/ss_6';
import ss_7 from '../src/Components/Answers/Search_Sort/ss_7';
import ss_8 from '../src/Components/Answers/Search_Sort/ss_8';
import ss_9 from '../src/Components/Answers/Search_Sort/ss_9';
import ss_10 from '../src/Components/Answers/Search_Sort/ss_10';
import ss_11 from '../src/Components/Answers/Search_Sort/ss_11';
import ss_12 from '../src/Components/Answers/Search_Sort/ss_12';
import ss_13 from '../src/Components/Answers/Search_Sort/ss_13';
import ss_14 from '../src/Components/Answers/Search_Sort/ss_14';
import ss_15 from '../src/Components/Answers/Search_Sort/ss_15';
import ss_16 from '../src/Components/Answers/Search_Sort/ss_16';
import ss_17 from '../src/Components/Answers/Search_Sort/ss_17';
import ss_18 from '../src/Components/Answers/Search_Sort/ss_18';
import ss_19 from '../src/Components/Answers/Search_Sort/ss_19';
import ss_20 from '../src/Components/Answers/Search_Sort/ss_20';
import ss_21 from '../src/Components/Answers/Search_Sort/ss_21';
import ss_22 from '../src/Components/Answers/Search_Sort/ss_22';
import ss_23 from '../src/Components/Answers/Search_Sort/ss_23';
import ss_24 from '../src/Components/Answers/Search_Sort/ss_24';
import ss_25 from '../src/Components/Answers/Search_Sort/ss_25';
import ss_26 from '../src/Components/Answers/Search_Sort/ss_26';
import ss_27 from '../src/Components/Answers/Search_Sort/ss_27';
import ss_28 from '../src/Components/Answers/Search_Sort/ss_28';
import ss_29 from '../src/Components/Answers/Search_Sort/ss_29';
import ss_30 from '../src/Components/Answers/Search_Sort/ss_30';
import ss_31 from '../src/Components/Answers/Search_Sort/ss_31';
import ss_32 from '../src/Components/Answers/Search_Sort/ss_32';
import ss_33 from '../src/Components/Answers/Search_Sort/ss_33';
import ss_34 from '../src/Components/Answers/Search_Sort/ss_34';
import ss_35 from '../src/Components/Answers/Search_Sort/ss_35';
import ss_36 from '../src/Components/Answers/Search_Sort/ss_36';



//Stack_Queue
//<------------------------------------------------>

import sq_1 from '../src/Components/Answers/Stack_Queue/sq_1';
import sq_2 from '../src/Components/Answers/Stack_Queue/sq_2';
import sq_3 from '../src/Components/Answers/Stack_Queue/sq_3';
import sq_4 from '../src/Components/Answers/Stack_Queue/sq_4';
import sq_5 from '../src/Components/Answers/Stack_Queue/sq_5';
import sq_6 from '../src/Components/Answers/Stack_Queue/sq_6';
import sq_7 from '../src/Components/Answers/Stack_Queue/sq_7';
import sq_8 from '../src/Components/Answers/Stack_Queue/sq_8';
import sq_9 from '../src/Components/Answers/Stack_Queue/sq_9';
import sq_10 from '../src/Components/Answers/Stack_Queue/sq_10';

import sq_11 from '../src/Components/Answers/Stack_Queue/sq_11';
import sq_12 from '../src/Components/Answers/Stack_Queue/sq_12';
import sq_13 from '../src/Components/Answers/Stack_Queue/sq_13';
import sq_14 from '../src/Components/Answers/Stack_Queue/sq_14';
import sq_15 from '../src/Components/Answers/Stack_Queue/sq_15';
import sq_16 from '../src/Components/Answers/Stack_Queue/sq_16';
import sq_17 from '../src/Components/Answers/Stack_Queue/sq_17';
import sq_18 from '../src/Components/Answers/Stack_Queue/sq_18';
import sq_19 from '../src/Components/Answers/Stack_Queue/sq_19';
import sq_20 from '../src/Components/Answers/Stack_Queue/sq_20';

import sq_21 from '../src/Components/Answers/Stack_Queue/sq_21';
import sq_22 from '../src/Components/Answers/Stack_Queue/sq_22';
import sq_23 from '../src/Components/Answers/Stack_Queue/sq_23';
import sq_24 from '../src/Components/Answers/Stack_Queue/sq_24';
import sq_25 from '../src/Components/Answers/Stack_Queue/sq_25';
import sq_26 from '../src/Components/Answers/Stack_Queue/sq_26';
import sq_27 from '../src/Components/Answers/Stack_Queue/sq_27';
import sq_28 from '../src/Components/Answers/Stack_Queue/sq_28';
import sq_29 from '../src/Components/Answers/Stack_Queue/sq_29';
import sq_30 from '../src/Components/Answers/Stack_Queue/sq_30';

import sq_31 from '../src/Components/Answers/Stack_Queue/sq_31';
import sq_32 from '../src/Components/Answers/Stack_Queue/sq_32';
import sq_33 from '../src/Components/Answers/Stack_Queue/sq_33';
import sq_34 from '../src/Components/Answers/Stack_Queue/sq_34';
import sq_35 from '../src/Components/Answers/Stack_Queue/sq_35';
import sq_36 from '../src/Components/Answers/Stack_Queue/sq_36';
import sq_37 from '../src/Components/Answers/Stack_Queue/sq_37';
import sq_38 from '../src/Components/Answers/Stack_Queue/sq_38';

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
import ll_17 from './Components/Answers/Linked List/ll_17'
import ll_18 from './Components/Answers/Linked List/ll_18'
import ll_19 from './Components/Answers/Linked List/ll_19'
import ll_20 from './Components/Answers/Linked List/ll_20'
import ll_21 from './Components/Answers/Linked List/ll_21'
import ll_22 from './Components/Answers/Linked List/ll_22'
import ll_23 from './Components/Answers/Linked List/ll_23'
import ll_24 from './Components/Answers/Linked List/ll_24'
import ll_25 from './Components/Answers/Linked List/ll_25'
import ll_26 from './Components/Answers/Linked List/ll_26'
import ll_27 from './Components/Answers/Linked List/ll_27'
import ll_28 from './Components/Answers/Linked List/ll_28'
import ll_29 from './Components/Answers/Linked List/ll_29'
import ll_30 from './Components/Answers/Linked List/ll_30'
import ll_31 from './Components/Answers/Linked List/ll_31'
import ll_32 from './Components/Answers/Linked List/ll_32'
import ll_33 from './Components/Answers/Linked List/ll_33'
import ll_34 from './Components/Answers/Linked List/ll_34'
import ll_35 from './Components/Answers/Linked List/ll_35'
import ll_36 from './Components/Answers/Linked List/ll_36'

//<---------------------------------------------------------------->


//BT
//<------------------------------------------------>

import bt_1 from './Components/Answers/Binary Trees/bt_1'
import bt_2 from './Components/Answers/Binary Trees/bt_2'
import bt_3 from './Components/Answers/Binary Trees/bt_3'
import bt_4 from './Components/Answers/Binary Trees/bt_4'
import bt_5 from './Components/Answers/Binary Trees/bt_5'
import bt_6 from './Components/Answers/Binary Trees/bt_6'
import bt_7 from './Components/Answers/Binary Trees/bt_7'
import bt_8 from './Components/Answers/Binary Trees/bt_8'
import bt_9 from './Components/Answers/Binary Trees/bt_9'
import bt_10 from './Components/Answers/Binary Trees/bt_10'

import bt_11 from './Components/Answers/Binary Trees/bt_11'
import bt_12 from './Components/Answers/Binary Trees/bt_12'
import bt_13 from './Components/Answers/Binary Trees/bt_13'
import bt_14 from './Components/Answers/Binary Trees/bt_14'
import bt_15 from './Components/Answers/Binary Trees/bt_15'
import bt_16 from './Components/Answers/Binary Trees/bt_16'
import bt_17 from './Components/Answers/Binary Trees/bt_17'
import bt_18 from './Components/Answers/Binary Trees/bt_18'
import bt_19 from './Components/Answers/Binary Trees/bt_19'
import bt_20 from './Components/Answers/Binary Trees/bt_20'

import bt_21 from './Components/Answers/Binary Trees/bt_21'
import bt_22 from './Components/Answers/Binary Trees/bt_22'
import bt_23 from './Components/Answers/Binary Trees/bt_23'
import bt_24 from './Components/Answers/Binary Trees/bt_24'
import bt_25 from './Components/Answers/Binary Trees/bt_25'
import bt_26 from './Components/Answers/Binary Trees/bt_26'
import bt_27 from './Components/Answers/Binary Trees/bt_27'
import bt_28 from './Components/Answers/Binary Trees/bt_28'
import bt_29 from './Components/Answers/Binary Trees/bt_29'
import bt_30 from './Components/Answers/Binary Trees/bt_30'

import bt_31 from './Components/Answers/Binary Trees/bt_31'
import bt_32 from './Components/Answers/Binary Trees/bt_32'
import bt_33 from './Components/Answers/Binary Trees/bt_33'
import bt_34 from './Components/Answers/Binary Trees/bt_34'
import bt_35 from './Components/Answers/Binary Trees/bt_35'

//BST
//<------------------------------------------------>

import bst_1 from './Components/Answers/BST/bst_1'
import bst_2 from './Components/Answers/BST/bst_2'
import bst_3 from './Components/Answers/BST/bst_3'
import bst_4 from './Components/Answers/BST/bst_4'
import bst_5 from './Components/Answers/BST/bst_5'
import bst_6 from './Components/Answers/BST/bst_6'
import bst_7 from './Components/Answers/BST/bst_7'
import bst_8 from './Components/Answers/BST/bst_8'
import bst_9 from './Components/Answers/BST/bst_9'
import bst_10 from './Components/Answers/BST/bst_10'
import bst_11 from './Components/Answers/BST/bst_11'
import bst_12 from './Components/Answers/BST/bst_12'
import bst_13 from './Components/Answers/BST/bst_13'
import bst_14 from './Components/Answers/BST/bst_14'
import bst_15 from './Components/Answers/BST/bst_15'
import bst_16 from './Components/Answers/BST/bst_16'
import bst_17 from './Components/Answers/BST/bst_17'
import bst_18 from './Components/Answers/BST/bst_18'
import bst_19 from './Components/Answers/BST/bst_19'
import bst_20 from './Components/Answers/BST/bst_20'
import bst_21 from './Components/Answers/BST/bst_21'
import bst_22 from './Components/Answers/BST/bst_22'

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

      {/* String */}

      <Route  path='/s_1' component={s_1} />   
      <Route  path='/s_2' component={s_2} />   
      <Route  path='/s_3' component={s_3} />   
      <Route  path='/s_4' component={s_4} />   
      <Route  path='/s_5' component={s_5} />   
      <Route  path='/s_6' component={s_6} />   
      <Route  path='/s_7' component={s_7} />   
      <Route  path='/s_8' component={s_8} />   
      <Route  path='/s_9' component={s_9} />   
      <Route  path='/s_10' component={s_10} />   

      <Route  path='/s_11' component={s_11} />   
      <Route  path='/s_12' component={s_12} />   
      <Route  path='/s_13' component={s_13} />   
      <Route  path='/s_14' component={s_14} />   
      <Route  path='/s_15' component={s_15} />   
      <Route  path='/s_16' component={s_16} />   
      <Route  path='/s_17' component={s_17} />   
      <Route  path='/s_18' component={s_18} />   
      <Route  path='/s_19' component={s_19} />   
      <Route  path='/s_20' component={s_20} /> 

      {/* <Route  path='/s_1' component={s_1} />   
      <Route  path='/s_2' component={s_2} />   
      <Route  path='/s_3' component={s_3} />   
      <Route  path='/s_4' component={s_4} />   
      <Route  path='/s_5' component={s_5} />   
      <Route  path='/s_6' component={s_6} />   
      <Route  path='/s_7' component={s_7} />   
      <Route  path='/s_8' component={s_8} />   
      <Route  path='/s_9' component={s_9} />   
      <Route  path='/s_0' component={s_0} /> 

      <Route  path='/s_1' component={s_1} />   
      <Route  path='/s_2' component={s_2} />   
      <Route  path='/s_3' component={s_3} />   
      <Route  path='/s_4' component={s_4} />   
      <Route  path='/s_5' component={s_5} />   
      <Route  path='/s_6' component={s_6} />   
      <Route  path='/s_7' component={s_7} />   
      <Route  path='/s_8' component={s_8} />   
      <Route  path='/s_9' component={s_9} />   
      <Route  path='/s_0' component={s_0} /> 

      <Route  path='/s_1' component={s_1} />   
      <Route  path='/s_2' component={s_2} />   
      <Route  path='/s_3' component={s_3} />    */}



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

      {/* Searching_Sorting */}

      <Route  path='/ss_1' component={ss_1} />
      <Route  path='/ss_2' component={ss_2} />
      <Route  path='/ss_3' component={ss_3} />
      <Route  path='/ss_4' component={ss_4} />
      <Route  path='/ss_5' component={ss_5} />
      <Route  path='/ss_6' component={ss_6} />
      <Route  path='/ss_7' component={ss_7} />
      <Route  path='/ss_8' component={ss_8} />
      <Route  path='/ss_9' component={ss_9} />
      <Route  path='/ss_10' component={ss_10} />
     
      <Route  path='/ss_11' component={ss_11} />
      <Route  path='/ss_12' component={ss_12} />
      <Route  path='/ss_13' component={ss_13} />
      <Route  path='/ss_14' component={ss_14} />
      <Route  path='/ss_15' component={ss_15} />
      <Route  path='/ss_16' component={ss_16} />
      <Route  path='/ss_17' component={ss_17} />
      <Route  path='/ss_18' component={ss_18} />
      <Route  path='/ss_19' component={ss_19} />
      <Route  path='/ss_20' component={ss_20} />
    
      <Route  path='/ss_21' component={ss_21} />
      <Route  path='/ss_22' component={ss_22} />
      <Route  path='/ss_23' component={ss_23} />
      <Route  path='/ss_24' component={ss_24} />
      <Route  path='/ss_25' component={ss_25} />
      <Route  path='/ss_26' component={ss_26} />
      <Route  path='/ss_27' component={ss_27} />
      <Route  path='/ss_28' component={ss_28} />
      <Route  path='/ss_29' component={ss_29} />
      <Route  path='/ss_30' component={ss_30} />

      <Route  path='/ss_31' component={ss_31} />
      <Route  path='/ss_32' component={ss_32} />
      <Route  path='/ss_33' component={ss_33} />
      <Route  path='/ss_34' component={ss_34} />
      <Route  path='/ss_35' component={ss_35} />
      <Route  path='/ss_36' component={ss_36} />


      
      {/* Stack_Queue */}

      <Route  path='/sq_1' component={sq_1}/>
      <Route  path='/sq_2' component={sq_2}/>
      <Route  path='/sq_3' component={sq_3}/>
      <Route  path='/sq_4' component={sq_4}/>
      <Route  path='/sq_5' component={sq_5}/>
      <Route  path='/sq_6' component={sq_6}/>
      <Route  path='/sq_7' component={sq_7}/>
      <Route  path='/sq_8' component={sq_8}/>
      <Route  path='/sq_9' component={sq_9}/>
      <Route  path='/sq_10' component={sq_10}/>

      <Route  path='/sq_11' component={sq_11}/>
      <Route  path='/sq_12' component={sq_12}/>
      <Route  path='/sq_13' component={sq_13}/>
      <Route  path='/sq_14' component={sq_14}/>
      <Route  path='/sq_15' component={sq_15}/>
      <Route  path='/sq_16' component={sq_16}/>
      <Route  path='/sq_17' component={sq_17}/>
      <Route  path='/sq_18' component={sq_18}/>
      <Route  path='/sq_19' component={sq_19}/>
      <Route  path='/sq_20' component={sq_20}/>
     
      <Route  path='/sq_21' component={sq_21}/>
      <Route  path='/sq_22' component={sq_22}/>
      <Route  path='/sq_23' component={sq_23}/>
      <Route  path='/sq_24' component={sq_24}/>
      <Route  path='/sq_25' component={sq_25}/>
      <Route  path='/sq_26' component={sq_26}/>
      <Route  path='/sq_27' component={sq_27}/>
      <Route  path='/sq_28' component={sq_28}/>
      <Route  path='/sq_29' component={sq_29}/>
      <Route  path='/sq_30' component={sq_30}/>


      <Route  path='/sq_31' component={sq_31}/>
      <Route  path='/sq_32' component={sq_32}/>
      <Route  path='/sq_33' component={sq_33}/>
      <Route  path='/sq_34' component={sq_34}/>
      <Route  path='/sq_35' component={sq_35}/>
      <Route  path='/sq_36' component={sq_36}/>
      <Route  path='/sq_37' component={sq_37}/>
      <Route  path='/sq_38' component={sq_38}/>
      
      {/* Linked List */}
      <Route path='/ll_1'   component={ll1} />
      <Route path='/ll_2'   component={ll2} />
      <Route path='/ll_3'   component={ll3} />
      <Route path='/ll_4'   component={ll4} />
      <Route path='/ll_5'   component={ll5} />
      <Route path='/ll_6'   component={ll6} />
      <Route path='/ll_7'   component={ll7} />
      <Route path='/ll_8'   component={ll8} />
      <Route path='/ll_9'   component={ll9} />
      <Route path='/ll_10'  component={ll10} />
      <Route path='/ll_11'  component={ll11} />
      <Route path='/ll_12'  component={ll12} />
      <Route path='/ll_13'  component={ll13} />
      <Route path='/ll_14'  component={ll14} />
      <Route path='/ll_15'  component={ll15} />
      <Route path='/ll_16'  component={ll16} />
      <Route path='/ll_17'  component={ll_17} />
      <Route path='/ll_18'  component={ll_18} />
      <Route path='/ll_19'  component={ll_19} />
      <Route path='/ll_20'  component={ll_20} />
      <Route path='/ll_21'  component={ll_21} />
      <Route path='/ll_22'  component={ll_22} />
      <Route path='/ll_23'  component={ll_23} />
      <Route path='/ll_24'  component={ll_24} />
      <Route path='/ll_25'  component={ll_25} />
      <Route path='/ll_26'  component={ll_26} />
      <Route path='/ll_27'  component={ll_27} />
      <Route path='/ll_28'  component={ll_28} />
      <Route path='/ll_29'  component={ll_29} />
      <Route path='/ll_30'  component={ll_30} />
      <Route path='/ll_31'  component={ll_31} />
      <Route path='/ll_32'  component={ll_32} />
      <Route path='/ll_33'  component={ll_33} />
      <Route path='/ll_34'  component={ll_34} />
      <Route path='/ll_35'  component={ll_35} />
      <Route path='/ll_36'  component={ll_36} />

    {/* Binary Tree */}
    <Route path='/bt_1'  component={bt_1} />
    <Route path='/bt_2'  component={bt_2} />
    <Route path='/bt_3'  component={bt_3} />
    <Route path='/bt_4'  component={bt_4} />
    <Route path='/bt_5'  component={bt_5} />
    <Route path='/bt_6'  component={bt_6} />
    <Route path='/bt_7'  component={bt_7} />
    <Route path='/bt_8'  component={bt_8} />
    <Route path='/bt_9'  component={bt_9} />
    <Route path='/bt_10'  component={bt_10} />

    <Route path='/bt_11'  component={bt_11} />
    <Route path='/bt_12'  component={bt_12} />
    <Route path='/bt_13'  component={bt_13} />
    <Route path='/bt_14'  component={bt_14} />
    <Route path='/bt_15'  component={bt_15} />
    <Route path='/bt_16'  component={bt_16} />
    <Route path='/bt_17'  component={bt_17} />
    <Route path='/bt_18'  component={bt_18} />
    <Route path='/bt_19'  component={bt_19} />
    <Route path='/bt_20'  component={bt_20} />


    <Route path='/bt_21'  component={bt_21} />
    <Route path='/bt_22'  component={bt_22} />
    <Route path='/bt_23'  component={bt_23} />
    <Route path='/bt_24'  component={bt_24} />
    <Route path='/bt_25'  component={bt_25} />
    <Route path='/bt_26'  component={bt_26} />
    <Route path='/bt_27'  component={bt_27} />
    <Route path='/bt_28'  component={bt_28} />
    <Route path='/bt_29'  component={bt_29} />
    <Route path='/bt_30'  component={bt_30} />

    <Route path='/bt_31'  component={bt_31} />
    <Route path='/bt_32'  component={bt_32} />
    <Route path='/bt_33'  component={bt_33} />
    <Route path='/bt_34'  component={bt_34} />
    <Route path='/bt_35'  component={bt_35} />
    

    {/* BST */}
    <Route path='/bst_1'  component={bst_1} />
    <Route path='/bst_2'  component={bst_2} />
    <Route path='/bst_3'  component={bst_3} />
    <Route path='/bst_4'  component={bst_4} />
    <Route path='/bst_5'  component={bst_5} />
    <Route path='/bst_6'  component={bst_6} />
    <Route path='/bst_7'  component={bst_7} />
    <Route path='/bst_8'  component={bst_8} />
    <Route path='/bst_9'  component={bst_9} />
    <Route path='/bst_10'  component={bst_10} />
    <Route path='/bst_11'  component={bst_11} />
    <Route path='/bst_12'  component={bst_12} />
    <Route path='/bst_13'  component={bst_13} />
    <Route path='/bst_14'  component={bst_14} />
    <Route path='/bst_15'  component={bst_15} />
    <Route path='/bst_16'  component={bst_16} />
    <Route path='/bst_17'  component={bst_17} />
    <Route path='/bst_18'  component={bst_18} />
    <Route path='/bst_19'  component={bst_19} />
    <Route path='/bst_20'  component={bst_20} />
    <Route path='/bst_21'  component={bst_21} />
    <Route path='/bst_22'  component={bst_22} />



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
