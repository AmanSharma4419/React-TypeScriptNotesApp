import React, { useState } from "react";
import "../components/CreateNotes.css";
import { Notes } from "../models/interface";

interface ICreateNotesFormProps {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const CreateNotesForm: React.FunctionComponent<ICreateNotesFormProps> = ({
  notes,
  setNotes,
}) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [backgroundColor, setbackgroundColor] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleSubmitNotes = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !text || !backgroundColor) {
      return setError("All feilds are mandatory");
    }
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title,
        text: text,
        color: backgroundColor,
        date: new Date().toString(),
      },
    ]);
  };
  return (
    <>
      <h2>Create Notes</h2>
      <p>{error ? error : ""}</p>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            handleSubmitNotes(e);
          }}
        >
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="Title">Text</label>
          <input
            type="text"
            placeholder="Enter text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <label htmlFor="Title">Background Color</label>
          <input
            type="color"
            placeholder="Choose background color"
            onChange={(e) => {
              setbackgroundColor(e.target.value);
            }}
          />
          <button className="form_submit_btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateNotesForm;
