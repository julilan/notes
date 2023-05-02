import React from "react";
import "./Notes.css";

const Notes = (props) => {
  return (
    <div className="notes">
      <h2>Note Listing</h2>
      <ul>
        {props.data.map((note) => (
          <li key={note.id}>
            {note.firstname} {note.lastname} ({note.role}), {note.phone}:{" "}
            {note.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
