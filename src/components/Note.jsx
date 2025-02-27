import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(props.content);

  function handleClick() {
    props.onDelete(props.id);
  }

  function editNote() {
    props.onEdit(props.id, newContent);
    setIsEditing(false);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      {isEditing ? (
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <p>{props.content}</p>
      )}

      {isEditing ? (
        <CheckIcon
          onClick={editNote}
          sx={{ color: "#f5ba13", cursor: "pointer" }}
        />
      ) : (
        <EditIcon
          onClick={() => setIsEditing(true)}
          sx={{ color: "#f5ba13", cursor: "pointer" }}
        />
      )}

      <DeleteOutlineIcon
        onClick={handleClick}
        sx={{ float: "right", color: "#f5ba13", cursor: "pointer" }}
      />
    </div>
  );
}

export default Note;
