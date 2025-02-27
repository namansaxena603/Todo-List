import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const result = prevNotes.filter((noteItem, index) => index !== id);
      localStorage.setItem("notes", JSON.stringify(result));
      return result;
    });
  }

  function editNote(id, newContent) {
    const updatedNotes = notes.map((note, index) =>
      index === id ? { ...note, content: newContent } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes && notes.length > 0 ? (
        notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            color: "gray",
          }}
        >
          No notes available.
        </p>
      )}
      <Footer />
    </div>
  );
}

export default App;
