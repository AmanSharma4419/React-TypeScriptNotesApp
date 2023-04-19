import { screen, render, fireEvent } from "@testing-library/react";
import { Notes } from "../../models/interface";
import NoteCard from "../NoteCard";

test("should render the note card", async () => {
  const note: Notes = {
    id: new Date().toString() + 1,
    title: "Ts With Reactjs Notes",
    text: "Scheduled meeting for ts and react",
    color: "rgb(197, 203, 206)",
    date: new Date().toString(),
  };

  render(<NoteCard note={note} handleDeleteNote={() => {}} />);
  const testingElement = screen.getByRole("button", { name: "Delete" });
  expect(testingElement).toBeInTheDocument();
});

// test("should delete the note card on pressing delete button", () => {
//   const note: Notes = {
//     id: new Date().toString() + 1,
//     title: "Ts With Reactjs Notes",
//     text: "Scheduled meeting for ts and react",
//     color: "rgb(197, 203, 206)",
//     date: new Date().toString(),
//   };
//   render(<NoteCard note={note} handleDeleteNote={() => {}} />);
//   const testingElement = screen.getByRole("button", { name: "Delete" });
//   fireEvent.click(testingElement);
//   const deletedItem = screen.queryByRole("button", { name: "Delete" });
//   expect(deletedItem).not.toBeInTheDocument();
// });