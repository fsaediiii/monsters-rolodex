import React,{ChangeEvent} from "react";
import "./SearchBox.styles.css";

interface SearchBoxProps{
  placeholderTitle:string
  onChangeFilter:(event:ChangeEvent<HTMLInputElement>)=>void,
}

function SearchBox({ onChangeFilter, placeholderTitle}:SearchBoxProps) {
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
