import "./App.css";
import React from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotesForm from "./components/CreateNotes";
import { Notes } from "./models/interface";
function App() {
  const staticNote = {
    id: new Date().toString() + 1,
    title: "Ts With Reactjs Notes",
    text: "Scheduled meeting for ts and react",
    color: "rgb(197, 203, 206)",
    date: new Date().toString(),
  };
  const [notes, setNotes] = React.useState<Notes[]>([staticNote]);
  return (
    <div className="App">
      <Header />
      <NotesList notes={notes} setNotes={setNotes} />
      <CreateNotesForm {...{ notes, setNotes }} />
    </div>
  );
}

export default App;
