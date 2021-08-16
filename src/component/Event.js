// eslint-disable-next-line
import React, { useState } from "react";

const Event = ({ addTask }) => {
  const [userToDo, setUserToDo] = useState([]);

  const handleChange = (e) => {
    setUserToDo(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userToDo);

    setUserToDo("");
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userToDo}
          onChange={handleChange}
          placeholder="What needs to be done?"
          required
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Event;
