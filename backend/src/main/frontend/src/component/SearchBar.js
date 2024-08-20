import React from "react";
import "../styles/SearchBar.css";
<<<<<<< HEAD
=======
import RG from "../assets/검색창아이콘.png";
>>>>>>> 6ff903770e183f99d0e35ef4f82102483efa26de

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="검색해주세요" className="search-input" />
      <button className="search-button">
<<<<<<< HEAD
        <img alt="search" />
=======
        <img src={RG} alt="search" />
>>>>>>> 6ff903770e183f99d0e35ef4f82102483efa26de
      </button>
    </div>
  );
};

export default SearchBar;
