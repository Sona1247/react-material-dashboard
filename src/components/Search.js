import React from 'react';
import "../styles/Search.scss";
import addIcon from "../images/add.png";
import filter from "../images/filter.png";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';

const Search = () => {
    return (
        <div className="search-content">
            <div className="search-content-first-side">
                <button className="filter">
                    <img src={filter} alt="icon"/>
    <h2>FILTER</h2></button>
                <TextField className="text-field"
  placeholder="Search users by name, id"
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
            </div>
           <div className="search-content-buttons"> <button className="add"><img src={addIcon} alt="icon"/> <h2>Add User</h2></button>
            <button className="filter-mob">
                    <img src={filter} alt="icon"/>
    <h2>FILTER</h2></button></div>
        </div>
    )
}

export default Search
