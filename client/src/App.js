import './App.css';
import React from 'react';
import Navbar from './Containers/navbar/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages
import Home from './Components/pages/home'
import About from './Components/pages/about';
import Footer from './Containers/footer/footer';
import Array from '../src/Components/pages/array';
import String from '../src/Components/pages/string';
import Stack from '../src/Components/pages/stack';
import Matrix from '../src/Components/pages/matrix';
import Error from '../src/Components/pages/error';


//answers
import One from '../src/Components/Answers/Array/one';

function App() {
  return (

    <Router >
    
    <Navbar/>

    <Switch>
      <Route exact path="/" exact component={Home}></Route>
      <Route exact path='/about' component={About} />
      <Route exact path='/array' component={Array} />
      <Route exact path='/matrix' component={Matrix} />
      <Route exact path='/string' component={String} />
      <Route exact path='/stack' component={Stack} />
      <Route component={Error} />


      {/* //answers  */}

      <Route path='/one' component={One}/>

      
    </Switch>
    {/* <Footer/> */}
    </Router>
  
  );
}

export default App;
