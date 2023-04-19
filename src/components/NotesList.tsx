import * as React from "react";
import "../components/NotesList.css";
import { Notes } from "../models/interface";
import NoteCard from "./NoteCard";

interface INotesProps {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const NotesList: React.FunctionComponent<INotesProps> = ({
  notes,
  setNotes,
}) => {
  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNoteList = () => {
    return (
      notes &&
      notes.map((note) => {
        return (
          <NoteCard
            key={note.id}
            note={note}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })
    );
  };
  return (
    <>
      <h2>My Notes</h2>
      <div>{renderNoteList()}</div>
    </>
  );
};

export default NotesList;
