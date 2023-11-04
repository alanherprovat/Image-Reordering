import React from "react";
import "../Styles.css";
function Nav({ count, deleteSelectedImages }) {
  return (
    <nav className="nav">
      <h1>Gallery</h1>
      {count > 0 && (
        <span>
          <input type="checkbox" checked={true} readOnly />
          <p>{count} Files are Selected</p>
          <button onClick={deleteSelectedImages}>Delete Files</button>
        </span>
      )}
    </nav>
  );
}

export default Nav;
