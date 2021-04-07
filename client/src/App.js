import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Components/Main/Main.js";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from './Containers/NavigationItems/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from '../src/Components/Register/Register';

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App" style={{marginTop:'60px'}}>
      <Router>
      <Navbar/> 
     
       <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
       <Switch>
        <Route path="/register" component={Register}/>
      </Switch>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </Router>
    </div>
  );
}

export default App;