// import { useEffect, useState } from "react";
// import uuid from "react-uuid";
// import "./App.css";
// import Main from "./Components/Main/Main.js";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import Navbar from './Containers/NavigationItems/Navbar/Navbar';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Register from '../src/Components/Register/Register';

// function App() {
//   const [notes, setNotes] = useState(
//     localStorage.notes ? JSON.parse(localStorage.notes) : []
//   );
//   const [activeNote, setActiveNote] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   const onAddNote = () => {
//     const newNote = {
//       id: uuid(),
//       title: "Untitled Note",
//       body: "",
//       lastModified: Date.now(),
//     };

//     setNotes([newNote, ...notes]);
//     setActiveNote(newNote.id);
//   };

//   const onDeleteNote = (noteId) => {
//     setNotes(notes.filter(({ id }) => id !== noteId));
//   };

//   const onUpdateNote = (updatedNote) => {
//     const updatedNotesArr = notes.map((note) => {
//       if (note.id === updatedNote.id) {
//         return updatedNote;
//       }

//       return note;
//     });

//     setNotes(updatedNotesArr);
//   };

//   const getActiveNote = () => {
//     return notes.find(({ id }) => id === activeNote);
//   };

//   return (
//     <div className="App" style={{marginTop:'60px'}}>
//       <Router>
//       <Navbar/> 
     
//        <Sidebar
//         notes={notes}
//         onAddNote={onAddNote}
//         onDeleteNote={onDeleteNote}
//         activeNote={activeNote}
//         setActiveNote={setActiveNote}
//       />
//        <Switch>
//         <Route path="/register" component={Register}/>
//       </Switch>
//       <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
//       </Router>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React from 'react';
import Navbar from './Containers/navbar/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages
import Home from './Components/pages/home'
import About from './Components/pages/about';
import Footer from './Containers/footer/footer';
import Array from '../src/Components/pages/array';
import String from '../src/Components/pages/stiring';
import Stack from '../src/Components/pages/stack';
import Matrix from '../src/Components/pages/matrix';


//answers
import One from '../src/Components/Answers/Array/one';

function App() {
  return (

    <Router >
    
    <Navbar/>

    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path='/about' component={About} />
      <Route path='/array' component={Array} />
      <Route path='/matrix' component={Matrix} />
      <Route path='/string' component={String} />
      <Route path='/stack' component={Stack} />


      {/* //answers  */}
      <Route path='/one' component={One}/>
    </Switch>
    <Footer/>
    </Router>
  
  );
}

export default App;
