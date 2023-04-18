import * as React from "react";
import { Notes } from "../models/interface";
import "../components/NoteCard.css";
interface INoteCardProps {
  note: Notes;
  handleDeleteNote: (id: any) => void;
}

const NoteCard: React.FunctionComponent<INoteCardProps> = ({
  note,
  handleDeleteNote,
}) => {
  const { id, title, text, color, date } = note;
  return (
    <>
      <section style={{ background: note.color }}>
        <ul>
          <span>Meetings</span>
          <li>Title:- {title}</li>
          <li>About:- {text}</li>
          <li> Background:- {color}</li>
          <li>Date:- {date}</li>
          <button
            onClick={() => {
              handleDeleteNote(id);
            }}
          >
            Delete
          </button>
        </ul>
      </section>
    </>
  );
};

export default NoteCard;
