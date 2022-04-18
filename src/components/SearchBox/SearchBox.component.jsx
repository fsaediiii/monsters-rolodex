import React from "react";
import "./SearchBox.styles.css";

function SearchBox({ onChangeFilter, placeholderTitle }) {
  return (
    <input
      className="search-box"
      type="text"
      placeholder={placeholderTitle}
      onChange={onChangeFilter}
    />
  );
}

export default SearchBox;
