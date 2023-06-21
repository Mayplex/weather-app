import search from "../assets/images/search.png";
import s from "../modules/Search.module.scss";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    console.log("Search value:", value);
  };

  return (
    <div className={s.search}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter the location name"
      />
      <button className={s.button} onClick={handleSearch}>
        <BsSearch className={s.icon} />
      </button>
    </div>
  );
};

export default Search;
