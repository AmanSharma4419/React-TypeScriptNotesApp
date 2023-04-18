import "./App.css";
import React from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Notes } from "./models/interface";
function App() {
  const [notes, setNotes] = React.useState<Notes[]>([
    {
      id: new Date().toString() + 1,
      title: "Ts Notes",
      text: "Scheduled meeting fot ts and react",
      color: "rgb(197, 203, 206)",
      date: new Date().toString(),
    },
    {
      id: new Date().toString() + 2,
      title: "Ts Notes",
      text: "Scheduled meeting fot ts and react",
      color: "rgb(197, 203, 206)",
      date: new Date().toString(),
    },
    {
      id: new Date().toString() + 3,
      title: "Ts Notes",
      text: "Scheduled meeting for ts and react",
      color: "rgb(197, 203, 206)",
      date: new Date().toString(),
    },
  ]);
  return (
    <div className="App">
      <Header />
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
