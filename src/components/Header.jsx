import React from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function Header() {
  return (
    <header>
      <h1>
        <TextSnippetIcon
          sx={{ fontSize: "2rem", position: "relative", top: "5px" }}
        />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
