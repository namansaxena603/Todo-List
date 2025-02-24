import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [exp, setExp] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    event.preventDefault(); // Prevent default form submission
    if (!note.title || !note.content) {
      alert("Note cannot be left blank");
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
  }

  // function submitNote(event) {
  //   if (!note) {
  //     alert("cannoty be left blank");
  //   } else {
  //     props.onAdd(note);
  //     setNote({
  //       title: "",
  //       content: "",
  //     });
  //   }

  //   event.preventDefault();
  // }

  function expanded() {
    setExp(true);
  }

  return (
    <div>
      <form className="create-note">
        {exp ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={expanded}
          rows={exp ? "3" : "1"}
        />
        <Zoom in={exp}>
          <Fab onClick={submitNote}>
            <AddTaskIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
