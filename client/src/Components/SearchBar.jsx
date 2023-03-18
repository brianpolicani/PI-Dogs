import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../Redux/actions/actions";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getName(input));

    if (!input) {
      return alert("Insert breed name");
    }

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" value={input} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}
