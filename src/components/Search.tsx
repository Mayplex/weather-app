import s from "../modules/Search.module.scss";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../context/Context";

const Search = () => {
  const contextData = useContext(Context);

  if (!contextData) {
    return null;
  }

  const { value, setValue, getData } = contextData;

  const handleSearch = () => {
    getData();
  };

  return (
    <div className={s.search}>
      <input
        className={s.input}
        type="text"
        value={value}
        onClick={() => setValue("")}
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
