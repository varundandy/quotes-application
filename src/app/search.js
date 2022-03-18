import React from "react";
import InputWithLabel from "./inputwithlabel";

const Search = (props) => {
  return (
    <div>
      <InputWithLabel id='search' type='text' value={props.value} onChange={props.onSearch}>
      <b>Search:</b>
        </InputWithLabel>
    </div>
  );
};

export default Search;
